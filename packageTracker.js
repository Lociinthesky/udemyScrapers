var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});

	var mostRecentNews = '';
	var mostRecentTime = '';
function c() {
	var form = document.querySelector('input #reference_number');
}

casper.start('https://app.memoryleague.com/#!/home', function() {
	this.fill('form[action="https://www.parcelmonkey.com/track#tracking"]', {
		text:'PMSFIXQP'
	}, true)
})

	
.then(function() {
	mostRecentNews = document.querySelector('p.tracking__message').innerText;
	mostRecentTime = document.querySelector('p.tracking__time').innerText;
	})
casper.run(function(){
	this.echo(' results \n\n ' + matchOutcome).exit();
});
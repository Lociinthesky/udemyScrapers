var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});


var matchOutcome = '';
var str = '';

function c() {
	var counter = 0;
	if (document.querySelectorAll('div .summary')){
		document.querySelectorAll('div .summary').forEach( function(node) {
			if ( counter < 6 ) {
				matchOutcome += node.innerText.split('/n')[0] + '\n\n';
				counter++;
			}
		})
	}
	str += document.body.innerText;
}

casper.start('https://app.memoryleague.com/#!/home', function() {
	setTimeout(function() {
	this.evaluate(c);

	}, 8000)
})

casper.then(function() {
	casper.capture('mystery.png')
})
casper.run(function(){
	this.echo(' body: \n\n\n\n ' + str)
	this.echo(' results \n\n ' + matchOutcome).exit();
});
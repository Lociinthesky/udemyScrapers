var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});

var matchOutcome = '';

function c() {
	var counter = 0;
	document.querySelectorAll('div .summary').forEach( node => {
		if ( counter < 6 ) {
			matchOutcome += node.innerText.split('/n')[0] + '\n\n';
			counter++;
		}
	})
	console.log(matchOutcome);
}

casper.start('https://app.memoryleague.com/#!/home', function() {
	this.evaluate(c());
})
casper.run(function(){
	this.echo(' results \n\n ' + matchOutcome).exit();
});
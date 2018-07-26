var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});

var title = '';

function getTitle() {
	// var title = document.querySelector('body');
	var title = JSON.stringify(document.body);

	return title;
}

casper.start('https://app.memoryleague.com/#!/home')
.then(function() {
	title = this.evaluate(getTitle)
})
casper.run(function(){
	this.echo(title);
});
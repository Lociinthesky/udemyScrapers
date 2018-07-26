var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});

var links = [];

function getLinks() {
	var links = document.querySelectorAll('.b_algo a');
	return Array.prototype.map.call(links, function(e) {
		return e.getAttribute('href');
	})
}

casper.start('http://bing.com/', function() {
	this.fill('form[action="/search"]', {
		q:'casperjs'
	}, true)
}).then(function() {
	links = this.evaluate(getLinks);
	this.fill('form[action="/search"]', {
		q: 'phantomjs'
	}, true)
}).then(function() {
	links = links.concat(this.evaluate(getLinks));
})
casper.run(function(){
	this.echo(links.length + ' links found: ');
	this.echo('-' + links.join('\n -')).exit();
});
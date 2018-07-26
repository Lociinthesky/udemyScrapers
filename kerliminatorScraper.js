var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});

var tabList = []

function getTabs() {
	var nodeList = document.querySelector('menu a');
	return Array.prototype.map.call(nodeList, function(node) {
		return node.innerHTML
	})
}

casper.start('http://www.katiekermode.com/Memory/Kerliminator.html')

casper.then(function() {
	tabList = this.evaluate(getTabs);
});

casper.run(function(){
	this.echo(tabList.join('\n -')).exit();
});
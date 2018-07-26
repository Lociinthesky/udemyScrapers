var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});


var message = '';
var gameName = "Guns'n'Stories: Bulletproof VR";


// function buildMessage() {
// 	if ( prices.length === 2 ) {
// 		message = gameName + ' is on sale for ' + prices[1] +', down from ' + prices[0] + '.'
// 	} else {
// 		message = gameName + ' - no sale.'
// 	}
// 	return message;
// }

function grabTab(){	
		return document.querySelector('div.responsive_search_name_combined').innerText;
}

casper.start('https://store.steampowered.com/', function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Guns'n'Stories: Bulletproof VR"
	}, true)
}).then(function() {
	message = this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  gameName + ' - no sale.'
})

casper.run(function(){	
	this.echo(message).exit();
});
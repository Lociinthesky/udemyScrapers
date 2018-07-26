var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});

var games = [];
var game;
var name = '';
var names = '';
var gamesAndNames = [];
var gameInfo = '';
var message = '';
var gameName = 'Arizona Sunshine';
var prices = [];
var price = '';

// function buildMessage() {
// 	if ( prices.length === 2 ) {
// 		message = gameName + ' is on sale for ' + prices[1] +', down from ' + prices[0] + '.'
// 	} else {
// 		message = gameName + ' - no sale.'
// 	}
// 	return message;
// }

function grabTab(){

		games = document.querySelectorAll('div.responsive_search_name_combined');
		
		gameInfo = document.querySelector('div.responsive_search_name_combined').innerText;
		
		// var prices = gameInfo.match(/\$[0-9.]+/gi);
		// if ( prices.length === 2 ) {
		// 	message = gameName + ' is on sale for ' + prices[1] +', down from ' + prices[0] + '.'
		// } else {
		// 	message = gameName + ' - no sale.'
		// }
		return gameInfo;
}

casper.start('https://store.steampowered.com/', function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]':'arizona sunshine'
	}, true)
})
// .then(function() {
// 	links = this.evaluate(getLinks);
// 	this.fill('form[action="/search"]', {
// 		q: 'phantomjs'
// 	}, true)
// })
.then(function() {
	message = this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.' :
	  gameName + ' - no sale.'
})
// .then(function(){
// 	prices = gameInfo.match(/\$[0-9.]+/gi);
// 	price = prices[0];
// })
casper.run(function(){	
	this.echo(message);
	this.echo(this.getCurrentUrl()).exit();
});
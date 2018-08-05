var twilio = require('twilio');
var tokens = require('./tokens')
var again = require('./packageTrackerWorking4').again
var client = new twilio(tokens1, tokens2);
var mostRecentNews = '';
var previousNews = '';
var mostRecentTime = '';
var boolFlag = false;
// client.messages.create({
// 	to: '+19727466590',
// 	from: '+14696063720',
// 	body: 'test!!!!'
// });
var startingOptions = {
	to: '+19727466590',
	from: '+14696063720',
	body: 'test!!!!' 
}

setInterval(function(){
	if ( boolFlag === true ) {
		console.log('we have made it!!!!!')
	}
	return again(mostRecentNews, mostRecentTime)
}, 16000)
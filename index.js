var twilio = require('twilio');

var client = new twilio('AC1e1979a7c3d1e8a7ccec2bec84beb978', 
						'44e83d0b1e2b84c1eb7acc7dd9b15dc0');


function retrieve() {
	var packageTrackerWorking = import('./packageTrackerWorking3')

	if ( packageTrackerWorking.notification ) {
		console.log(packageTrackerWorking.notification)
	}

	// client.messages.create({
	// 	to: '+19727466590',
	// 	from: '+14696063720',
	// 	body: 'test!!!!'
	// });

}



setInterval(function(){
	return retrieve()
}, 25000)
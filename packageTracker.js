var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});

	var mostRecentNews = '';
	var mostRecentTime = '';
// function submit(trackingNumber) {
// 	return function() {
// 		var field = document.querySelector('button').nextElementSibling;
// 		field.value = trackingNumber;
// 		casper.capture('pic1.png')
// 		field.click();
// 	}
// }

var messageArr = [];
var doc;
casper.start('https://www.parcelmonkey.com/track', function() {
	console.log('parcelmonkey website opened')
})
	
casper.then(function() {
	this.evaluate(function() {
		console.log('log::: ' + document.querySelector('#reference_number'))
		document.querySelector('#reference_number').value = 'PMSFIXQP';
		document.querySelectorAll('button')[1].click()
	})
	console.log('submitted');
})

casper.then(function() {
	mostRecentNews = this.evaluate(function(){
		mostRecentNews = document.getElementsByClassName('tracking__message')[0].innerText.trim();
		return mostRecentNews;
	})
	mostRecentTime = this.evaluate(function(){
		mostRecentTime = document.getElementsByClassName('tracking__time')[0].innerText.trim();
		return mostRecentTime;
	})


})
casper.run(function(){
	this.echo(' results \n\n ' + mostRecentNews);
	this.echo(' results \n\n ' + mostRecentTime).exit();
});




//AMAZON

// var casper = require('casper').create({
//     pageSettings: {
//         loadImages: false,//The script is much faster when this field is set to false
//         loadPlugins: false,
//         userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
//     }
// });
 
// //First step is to open Amazon
// casper.start().thenOpen("https://amazon.com", function() {
//     console.log("Amazon website opened");
// });
 
// //Second step is to click to the Sign-in button
// casper.then(function(){
//    this.evaluate(function(){
//       document.getElementById("nav-tools").children[0].click();
//    });
// });
 
// //Now we have to populate username and password, and submit the form
// casper.then(function(){
//     console.log("Login using username and password");
//     this.evaluate(function(){
//         document.getElementById("ap_email").value="AMAZON USERNAME";
//         document.getElementById("ap_password").value="AMAZON PASSWORD";
//         document.getElementById("signInSubmit").click();
//     });
// });
 
// //Wait to be redirected to the Home page, and then make a screenshot
// casper.then(function(){
//     console.log("Make a screenshot and save it as AfterLogin.png");
//     this.capture('AfterLogin.png');
// });
 
// casper.run();
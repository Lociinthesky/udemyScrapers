var casper = require('casper').create()
	.start('http://www.katiekermode.com/Memory/Kerliminator.html')
	.run(function(){
		casper.capture('deck2.png')
		.exit()
	});
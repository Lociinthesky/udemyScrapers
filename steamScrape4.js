var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});


var message = '';
var gameName = "Guns'n'Stories: Bulletproof VR";



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
	  gameName = 'Star Trek: Bridge Crew'
}).then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Star Trek: Bridge Crew"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Overload'
})


.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Overload"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Seeking Dawn'
})




.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Seeking Dawn"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Smashbox Arena'
})





.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Smashbox Arena"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'PAYDAY 2'
})





.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "PAYDAY 2"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Overwatch'
})


.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Overwatch"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Serious Sam VR: The Last Hope'
})







.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Serious Sam VR: The Last Hope"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Serious Sam VR: The First Encounter'
})


.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Serious Sam VR: The First Encounter"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Serious Sam VR: The Second Encounter'
})


.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Serious Sam VR: The Second Encounter"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Serious Sam VR Bundle'
})

.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Serious Sam VR Bundle"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Serious Sam 3 VR: BFE'
})

.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Serious Sam 3 VR: BFE"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Skyfront'
})


.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Skyfront"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Natural Locomotion'
})

.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Natural Locomotion"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'CROTEAM VR Bundle'
})

.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "CROTEAM VR Bundle"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Overkill VR: Action Shooter FPS'
})

.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Overkill VR: Action Shooter FPS"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Bullets And More VR - BAM VR'
})

.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Bullets And More VR - BAM VR"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Trickster VR: Co-op Dungeon Crawler'
})

.then(function() {
	this.fillSelectors('form#searchform', {
		'input[name="term"]': "Trickster VR: Co-op Dungeon Crawler"
	}, true)
}).then(function() {
	message += this.evaluate(grabTab).match(/\$[0-9.]+/gi).length === 2 ?
	  '\n\n' + gameName + ' is on sale for ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[1] +', down from ' + this.evaluate(grabTab).match(/\$[0-9.]+/gi)[0] + '.\nGet it: ' + this.getCurrentUrl() :
	  '\n\n' + gameName + ' - no sale.'
	  gameName = 'Trickster VR: Co-op Dungeon Crawler'
})
casper.run(function(){	
	this.echo(message).exit();
});
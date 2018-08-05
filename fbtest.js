var env = require('system').env;
// var google_email = env.MY_GOOGLE_EMAIL;
// var google_passwd = env.MY_GOOGLE_PASSWD;

var casper = require('casper').create();

casper.start('https://accounts.google.com/ServiceLogin?hl=EN', function() {
  casper.waitForSelector('form#gaia_loginform #Email', function() {
    this.fill('form#gaia_loginform', {
      'Email':  'lociinthesky@gmail.com'
    }, false);
    this.click('#next');
    casper.waitForSelector('form#gaia_loginform #Passwd', function() {
      this.fill('form#gaia_loginform', {
        'Passwd':  'Hailey84'
      }, false);
      this.click('#signIn');
    });
  });
})
casper.thenOpen('https://gmail.com', function(){
  this.evaluate(function(){
    var zz;
    document.querySelector('div').forEach(function(one){
      if ( one.innerText === "COMPOSE") {
        zz = one;
      }
    })
    zz.click();
  })
})

casper.run(function(){
  casper.capture('deck6.png').exit()
})


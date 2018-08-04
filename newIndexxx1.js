var twilio = require('twilio'); 
var tokens = require('./tokens'); 
var client = new twilio('tokens.token1', 'tokens.token2'); 
client.messages.create({ 
to: '+19727466590', 
from: '+14696063720', 
body: 'Oculus Go Update:   On Aug 1, 10:41 AM: At departure hub' });
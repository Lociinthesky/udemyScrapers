var casper = require('casper').create({
	verbose: true,
	logLevel: 'error',
	clientScripts: []
});

var fs = require('fs')
var mostRecentNews = '';
var mostRecentTime = '';
var indexCode = "var twilio = require('twilio'); \n"
indexCode += "var client = new twilio('AC1e1979a7c3d1e8a7ccec2bec84beb978', '44e83d0b1e2b84c1eb7acc7dd9b15dc0');"


var messageArr = [];
var doc;
var scrapeCount = 0;
function again(news, time){
	// if ( scrapeCount < 1 ){
		casper.start('https://www.parcelmonkey.com/track', function() {
			console.log('parcelmonkey website opened')
		})
		
		casper.then(function() {
			this.evaluate(function() {
				console.log('log::: ' + document.querySelector('#reference_number'))
				document.querySelector('#reference_number').value = 'PMSFIXQP';
			})
			console.log('filled');
		})

		casper.then(function() {
			this.evaluate(function() {
				document.querySelectorAll('button')[1].click()
			})
			console.log('clicked');
		})
		casper.then(function() {
			news = this.evaluate(function(){
				news = document.getElementsByClassName('tracking__message')[0].innerText.trim();
				return news;
			})
			this.echo('news: ' + news)
			time = this.evaluate(function(){
				time = document.getElementsByClassName('tracking__time')[0].innerText.trim();
				return time;
			})
			this.echo('time: ' + time)
		})

		casper.run(function(){
			this.echo('scrapeCount = ' + scrapeCount);
			scrapeCount++;
			if ( scrapeCount == 1 ) {
				var filename = 'newIndex' + scrapeCount + '.js'
				this.echo(indexCode);
				fs.write(filename, indexCode, 'w');
			}
		});
	//}
}
setInterval(function(){
	return again(mostRecentNews, mostRecentTime)
}, 16000)
//3600000



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


// Balanced Brackets
// Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

// Examples
// Input	Output
// str:
// "(x + y) - (4)"	true
// str:
// "(((10 ) ()) ((?)(:)))"	true
// str:
// "[{()}]"	true
// str:
// "(50)("	false
// str:
// "[{]}"	false










// Compose, Pipe


// function compose()

// function pipe()


// Implement the functions compose and pipe.

// Compose
// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

// You can think of compose as moving right to left through its arguments.

// Example
// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}

// var welcome = compose(greet, exclaim);
// welcome('phillip'); //=> 'hi: PHILLIP!'
// Pipe:
// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

// You can think of pipe as moving left to right through its arguments.

// Example
// var add2 = function(number){ return number + 2; }
// var multiplyBy3 = function(number){ return number * 3; }

// pipe(add2, multiplyBy3)(5) //=> 21
// pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63
// HINT: You should use the functions reduce() and reduceRight() in your solutions.

// Your Code Should Pass:

// 'use strict';

// var should = chai.should();

// describe('composePipe', function() {

//   describe('Step 1: Compose', function() {

//     it('should exist', function() {
//       should.exist(compose);
//     });
//     it('should be a function', function() {
//       compose.should.be.a.Function;
//     });
//     it('should return a function', function() {
//       var result = compose(function() {return 'Hi!';});
//       should.exist(result);
//       result.should.be.a.Function;
//     });
//     it('should be able to compose 2 functions', function() {
//       var greet = function(name){return 'hi: ' + name;};
//       var exclaim = function(statement){return statement.toUpperCase() + '!'};
//       var welcome = compose(greet, exclaim);
//       welcome.should.be.a.Function;
//       welcome('phillip').should.equal('hi: PHILLIP!');
//       welcome('kia').should.equal('hi: KIA!');
//     });
//     it('should be able to compose multiple functions', function() {
//       var first = function(array){return array[0];};
//       var shift = function(array){return array.slice(1);};
//       var fifth = compose(first, shift, shift,shift, shift);
//       fifth.should.be.a.Function;
//       (fifth([1,2,3,4,5,6,7,8,9])).should.equal(5);
//     });

//     it('should handle multiple composes', function() {
//       var first = function(array){return array[0];};
//       var shift = function(array){return array.slice(1);};
//       var fifth = compose(first, shift, shift, compose(shift, shift));
//       fifth.should.be.a.Function;
//       (fifth([1,2,3,4,5,6,7,8,9])).should.equal(5);
//     });
//   });


//   describe('Step 2: Pipe', function() {

//     it('should exist', function() {
//       should.exist(pipe);
//     });
//     it('should be a function', function() {
//       pipe.should.be.a.Function;
//     });
//     it('should return a function', function() {
//       function add2(value){return value + 2;}
//       function multiplyBy3(number){return number * 3;}
//       (pipe(add2, multiplyBy3)).should.be.a.Function;
//     });
//     it('should pass the input through a function', function() {
//       function add2(value){return value + 2;}
//       (pipe(add2)(21)).should.equal(23);
//     });
//     it('should pass the input through 2 functions', function() {
//       function add2(value){return value + 2;}
//       function multiplyBy3(number){return number * 3;}
//       (pipe(add2, multiplyBy3)(5).should.equal(21));
//     });
//     it('should pass the input through multiple functions', function() {
//       function add2(value){return value + 2;}
//       function multiplyBy3(number){return number * 3;}
//       (pipe(add2, multiplyBy3, add2, multiplyBy3)(7).should.equal(87));
//     });
//     it('should be able to handle multiple pipes', function() {
//       function add2(value){return value + 2;}
//       function multiplyBy3(number){return number * 3;}
//       (pipe(pipe(add2, multiplyBy3), multiplyBy3)(7).should.equal(81));
//     });

//   });

// });
 
















// Function Bind

// var bind = function(func, context){
//   //Your code here
//   return function(){
//     //Your code here
//   }
// };  

// Function.prototype.bind = function(context) {
//   //Your code here  
//   return function(){
//     //Your code here
//   }
// };






// Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.

// For example, if we have the following object:

// var alice = {
//   name: 'alice',
//   shout: function () {
//     alert('here comes' + ' ' + this.name);
//   }
// };

// alice.shout() //=> 'here comes alice'
// If you use your bind function with the context { name: 'bob' }, as is shown here:

// boundShout = bind(alice.shout, { name: 'bob' })
// Then calling boundShout() will alert 'here comes bob'

// The following example should also work in the following way once your function is implemented:

// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'diet');

// boundFunc('coke'); //=> 'dietcoke'
// Once you have finished that, implement the function ‘bind’ as a method of the Function.prototype object. This will be similar to your first solution, but should be able to be used in the following way:

// var alice = {
//   name: 'alice',
//   shout: function () {
//     alert(this.name);
//   }
// };

// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'

// boundShout = alice.shout.bind({ name: 'bob' });
// boundShout(); // alerts 'bob'
// DO NOT use the native bind() function in your solutions. You may use the functions call() and apply().

// Your Code Should Pass:








// var should = chai.should();

// describe('bind', function(){
//   it('should exist', function(){
//     should.exist(bind);
//   });

//   it('should be a function', function(){
//     bind.should.be.a.Function;
//   });
//   it('should return a function', function(){
//     var func = function(){ };
//     var res = bind(func);
//     should.exist(res);
//     res.should.be.a.Function;
//   });
//   it('should not return the original function', function(){
//     var func = function(){ };
//     var res = bind(func);
//     //aka, the original function should not be returned by `bind()`
//     // instead, we want to return a new function that will call our original
//     // function with the default (aka, curried) arguments we specified in our
//     // original call to `bind`.
//     res.should.not.be.equal(func);
//   });
//   it('should return a result when calling the bounded function', function(){
//     var func = function(arg1){ return arg1 };
//     var context = null;
//     var boundFunc = bind(func, context, "foobar");
//     var result = boundFunc();
//     should.exist(result);
//     result.should.be.equal('foobar');
//   });
//   it('should call the "curried" function in the bound context', function(){
//     // wtf does that mean, right? well, bind takes a `context` argument which
//     // is the context in which our newly returned function will be called in.
//     // see: http://msdn.microsoft.com/en-us/library/ie/ff841995(v=vs.94).aspx
//     var func = function() { return this };
//     var context = { foo: 'bar' };
//     var boundFunc = bind(func, context);
//     var result = boundFunc();
//     should.exist(result);
//     result.should.be.equal(context);
//   });
//   it('should bind the first argument', function(){
//     // are you sure you're not forgetting about the arguments?
//     // hint: don't forget `arguments` isn't a "true" array
//     var func = function(a){ return a };
//     var context = null;
//     var boundFunc = bind(func, context, 'foo');
//     var result = boundFunc();
//     should.exist(result);
//     result.should.be.a.String;
//     result.should.equal('foo');
//   });
//   it('should allow the bound function to be called multiple times with different arguments', function(){
//     var func = function(a, b){ return a + b };
//     var context = null;
//     var boundFunc = bind(func, context, 'wow '); // "bind" 'wow ' => the first argument (a)

//     var result1 = boundFunc('dawg'); // first call to boundFunc with b='dawg'
//     should.exist(result1);
//     result1.should.be.equal('wow dawg');

//     var result2 = boundFunc('man'); // second call to boundFunc with b='man'
//     should.exist(result2);
//     result2.should.be.equal('wow man');
//     // you're probably modifying some shared `args` array in the
//     // clojure scope ( or possibly the global scope :( ) everytime `boundFunc`
//     // is being called.
//     // hint: myArray.push.call(myArray, [1,2,3]) will _append_ to `myArray`
//     // hint: but myArray.concat([1,2,3]) will _return_ a new array and _not_
//     // hint: modify `myArray`
//   });
//   it('should bind the first and second arguments', function(){
//     var func = function(a, b){ return a + b };
//     var context = null;
//     var boundFunc = bind(func, context, 'foo', 'bar');
//     var result = boundFunc();
//     should.exist(result);
//     result.should.be.a.String;
//     result.should.equal('foobar');
//   });
//   it('should bind only first and second arguments (in this example) and allow the bound function to take the third', function(){
//     var func = function(a, b, c){ return a + b + c };
//     // here we only bind to the first 2 arguments, `a` and `b`
//     var context = null;
//     var boundFunc = bind(func, context, 'foo', 'bar');
//     // should call `func` with a='foo', b='bar', c='baz'
//     var result = boundFunc('baz');
//     should.exist(result);
//     result.should.be.a.String;
//     result.should.equal('foobarbaz');
//   });
//   it('should bind only the first and second arguments (in this example) and allow the bound function to take the third and fourth', function(){
//     // we've only written tests for up to 4 original arguments but your
//     // bound function should allow any number of arguments to be bound to it
//     // when calling `bind` or when calling the `bound` function return by it.
//     var func = function(a, b, c, d){ return a + b + c + d };
//     var boundFunc = bind(func, null, 'foo', 'bar');
//     var result = boundFunc('biz','baz');
//     should.exist(result);
//     result.should.be.a.String;
//     result.should.equal('foobarbizbaz');
//   });
// });

// describe('Function.prototype.bind', function(){
//   it('should exist', function(){
//     should.exist(Function.prototype.bind);
//   });
//   it('should be a function', function(){
//     Function.prototype.bind.should.be.a.Function;
//   });
//   it('should return a function', function(){
//     var func = function(){ };
//     var res = func.bind();
//     should.exist(res);
//     res.should.be.a.Function;
//   });
//   it('should not return the original function', function(){
//     var func = function(){ };
//     var res = func.bind();
//     //aka, the original function should not be returned by `bind()`
//     // instead, we want to return a new function that will call our original
//     // function with the default (aka, curried) arguments we specified in our
//     // original call to `bind`.
//     res.should.not.be.equal(func);
//   });
//   it('should return a result when calling the bounded function', function(){
//     var func = function(arg1){ return arg1 };
//     var context = null;
//     var boundFunc = func.bind(context, "foobar");
//     var result = boundFunc();
//     should.exist(result);
//     result.should.be.equal('foobar');
//   });
//   it('should call the "curried" function in the bound context', function(){
//     // wtf does that mean, right? well, bind takes a `context` argument which
//     // is the context in which our newly returned function will be called in.
//     // see: http://msdn.microsoft.com/en-us/library/ie/ff841995(v=vs.94).aspx
//     var func = function() { return this };
//     var context = { foo: 'bar' };
//     var boundFunc = func.bind(context);
//     var result = boundFunc();
//     should.exist(result);
//     result.should.be.equal(context);
//   });
//   it('should bind the first argument', function(){
//     // are you sure you're not forgetting about the arguments?
//     // hint: don't forget `arguments` isn't a "true" array
//     var func = function(a){ return a };
//     var context = null;
//     var boundFunc = func.bind(context, 'foo');
//     var result = boundFunc();
//     should.exist(result);
//     result.should.be.a.String;
//     result.should.equal('foo');
//   });
//   it('should allow the bound function to be called multiple times with different arguments', function(){
//     var func = function(a){ return a + a };
//     var context = null; // we're not worrying about the context in this text
//     var boundFunc = func.bind(context);

//     var result1 = boundFunc('foo');
//     should.exist(result1);
//     result1.should.be.equal('foofoo');

//     var result2 = boundFunc('bar');
//     should.exist(result2);
//     result2.should.be.equal('barbar');
//     // you're probably modifying some shared `args` array in the
//     // clojure scope ( or possibly the global scope :( ) everytime `boundFunc`
//     // is being called.
//     // hint: myArray.push.call(myArray, [1,2,3]) will _append_ to `myArray`
//     // hint: but myArray.concat([1,2,3]) will _return_ a new array and _not_
//     // hint: modify `myArray`
//   });
//   it('should bind the first and second arguments', function(){
//     var func = function(a, b){ return a + b };
//     var context = null; // we're not worrying about the context in this text
//     var boundFunc = func.bind(context, 'foo', 'bar');
//     var result = boundFunc();
//     should.exist(result);
//     result.should.be.a.String;
//     result.should.equal('foobar');
//   });
//   it('should bind only first and second arguments (as in this example) and allow the bound function to take the third', function(){
//     var func = function(a, b, c){ return a + b + c };
//     // here we only bind to the first 2 arguments, `a` and `b`
//     var context = null; // we're not worrying about the context in this text
//     var boundFunc = func.bind(context, 'foo', 'bar');
//     // should call `func` with a='foo', b='bar', c='baz'
//     var result = boundFunc('baz');
//     should.exist(result);
//     result.should.be.a.String;
//     result.should.equal('foobarbaz');
//   });
//   it('should bind only the first and second arguments (as in this example) and allow the bound function to take the third and fourth', function(){
//     // we've only written tests for up to 4 original arguments but your
//     // bound function should allow any number of arguments to be bound to it
//     // when calling `bind` or when calling the `bound` function return by it.
//     var func = function(a, b, c, d){ return a + b + c + d };
//     var boundFunc = func.bind(null, 'foo', 'bar');
//     var result = boundFunc('biz','baz');
//     should.exist(result);
//     result.should.be.a.String;
//     result.should.equal('foobarbizbaz');
//   });

// });

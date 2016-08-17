						// Function Factories
function makeGreeting(language){
		language=language||'en';// if language stores a value, value is passed into language, else en is passed
		return function(firstname,lastname){
				if (language==='en'){
				console.log("Hello" + firstname + " " + lastname);

				}
				if(language==='es'){
				console.log("Olla" + firstname + " " + lastname);
				}
		}
}
console.log(makeGreeting());//code is invoked, function is returned. In order to invoke the returned function, you need to use (),like in line 17
console.log(makeGreeting);
makeGreeting('en');

/* output: 
console.log(makeGreeting()):function (firstname,lastname){                                               
				if (language==='en'){
				console.log(firstname + " " + lastname);

				}
				if(linguage==='es'){
				console.log(firstname + " " + lastname);
				}
		}                                                                                                     function_factories.js:15 
		function makeGreeting(language){
		language=language||'en';
	
		 return function(firstname,lastname){
				if (language==='en'){
				console.log(firstname + " " + lastname);

				}
				if(linguage==='es'){
				console.log(firstname + " " + lastname);
				}
		}
		}*/
makeGreeting('es')("Santosh");//the second peranthasis will invoke the returned function, it accepts two arguments but one passed. The other would be 
//undefined
makeGreeting('en')("Santosh","Kesireddy");/* when returned function is invoked, called function(makeGreeting) is poped out of memory stack.
Language variable is available to the  calling function(returned function) due to consept called closures*/
/* output for lines 41 and 43
OllaSantosh undefined
function_factories.js:6 HelloSantosh Kesireddy*/
var greetEnglish = makeGreeting('en');//greetEnglish points to a returned annonymous function
var greetSpanish = makeGreeting('es');//greetSpanish points to the same returned anonymous function, but different language 
greetEnglish("Santosh","Kesireddy");
greetSpanish("Santosh","kreddy");
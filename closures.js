								//Closures: Phenominon in closing in the variables that are suppose to have access to is called a closure
function greet(wazup){
	return function(name){
		console.log(wazup + " " + name);
	}
	
}
var a=greet("Hello");// a contains the anonymous function returned by greet
a("Santosh");//a invokes the returned function and santosh is passed into name. lines 8 and 9 can be written in a single line as greet("Hello")("Santosh")
console.log(greet);//greet points the location where function object of a greet is held
console.log(greet("call"));/*when greet() is called, the code property of the function object greet is invoked and executed, in this case greet returns
anonymous function*/
console.log(a);// same as line 11
console.log(a("Santosh reddy"));// as a("Santosh reddy") returns nothing, undefined is returned
console.log(greet("Hello")("Santosh"));
/*output:
Hello Santosh
closures.js:10 greet(wazup){
	return function(name){
		console.log(wazup + " " + name);
	}
	
}
closures.js:11 function (name){
		console.log(wazup + " " + name);
	}
closures.js:13 function (name){
		console.log(wazup + " " + name);
	}
closures.js:4 Hello Santosh reddy
closures.js:14 undefined
closures.js:4 Hello Santosh
closures.js:15 undefined

*/

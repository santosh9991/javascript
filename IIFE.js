// Immediately Invocked Function Expression
function greet(){
	console.log("function statement");
}
//function expression: Memory for function is created at run time(on the fly)
var a= function(){
console.log("function expression");
}
//Imediately invocked function Expression
var b=function(){
		console.log("I am in function");
};
console.log(b);
console.log(b());
/* output=
output for line 13: b contains: function(){
		console.log("I am in function");
}
o/p for line 14:b() code property gets invoked: I am in function
When JSE is run greet function is placed in globle execution space, as its code property is not invocked it is not loaded into the memory. 
When a function expression is encountered by JSE, it is created on the fly and its object is loaded into 'a'. In order to invoke code property a()
is done.*/    

var e=function(){
		console.log("I am in IIFE");
}();//function is run at the point it is created.
console.log("hello  " + e);
// invoking function when created on the fly.
/*output for line 24-26:
I am in IIFE.
line 27: hello undefined//e is undefined because e is a global variable and function() is created on th file and it pops up the memory after 
its work is done. It not returning any value. so e is remained undfined, but in case of line 36. it returns Hello there I am in IIFE.
function(){}(); is same as e(). When this statement is encountered by JSE it creates a new execution space on the fly, and runs the code,
creates a variable environment, and the code property is invoked rsuling in "I am in IIFE". In the above case e is pointing to the function object*/

var f=function(){
		return("I am in IIFE");//function returns a string. variable 'e' contains the returned string value.
}();//function is run at the point it is created.
//console.log(e());// throws an error because e is now a string
//output line 37 error: Uncaught TypeError: e is not a function
console.log("Hello  there "+ f);

/* output from line 1 to 41:function(){
		console.log("I am in function");
}
IIFE.js:11 I am in function
IIFE.js:14 undefined
IIFE.js:25 I am in IIFE
IIFE.js:27 hello  undefined
IIFE.js:41 Hello  there I am in IIFE*/

//Stand alone IIFE
/* You can do 3; "hello"; { name:"fn"};, when you run these statements you see that they are stored internaly, but they are valied statements. However 
when you apply the same for function statement it fails.
function(){
	
	console.log();
} 
You get an error, which says unexpected ( token. Because when JSE encounters a keyword function it expects a function name followed by it. We know 
that we use () to evaluate an expression, not statement.For example grouping operator(), (3+4) returns 7, statements are not put inside(), like (if(...)), not vailed
 So in order to trick the JSE we use (in front of function keyword.
*/
(function(){
	console.log("Hello I am in Stand alone function");
} );
/* when you wrap a function like you did above inside  (), JSE understands that you are trying to create a function object and if you run this ,
it trows no error. In case of 3; it is just stored in memory, does nothing whereas you can invoke the function expression on the fly and
execute the code*/

(function(){
	var greeting="Hello";
	console.log(greeting );
}());
//output: Hello
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
									//self invocable Function with arguments: Creating and running a funcion all at the same time
(function(name){
	var greeting="Hello";
	console.log(greeting + " " + name);
	console.log(this);
}("Santosh"));
//output: Hello Santosh, and this points to the window object with infinte property in it.
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44
													//IIFE and Safe code

 

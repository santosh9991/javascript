/*Function Statements and expressions: Every Function is an object in js. Every function object contains some default properties attached to it
ex:1. Name ,2.code. When you want to run the code property of the function you use () after the function name.
Properties can be added and deleted for function
Function statements are stored in globle execution space. 
Function expression returns a value, they donot occupy globle execution space. They are created on th fly*/
//Function Statement
function function_name(){
		//function_body
		console.log("Function Statement");
}
/*Function Statement
When it is run, globle execution space is created and function_name sits in the memory doing nothing. If you want to invoke the code property of 
the function_name, we do function_name();*/ 
function_name();
/*output: Function Statement*/
//Function Expression
var a=function() {
	console.log("Function expression");
}
/* Anonymus Function: function with no name. Execution context is created on the fly 
= returns a function expression and 'a' is pointed to the object that is returned. If you want to invode the code you do a();*/
a();
//Parsing arguments into the function
var c=function(b){
	console.log(b());
	return b;
}
/*c(funcion(){
	/*return new function(){
				console.log("Hi");
};
	console.log("function call");
});*/
c(function(){
		console.log("Function call");
		return new function(){
		console.log("return value");
};
});
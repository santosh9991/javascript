//creating new execution context for our library so that all the variables are safe, and we are exposing on the global object what we want
(function(global){
//setting up a function that returns a new object
	var Greet=function(fn,lna,ln){
		// Greet.init is a function expression created on fly
	     b=new Greet.init(fn,lna,ln);//new creates an object and returns an empty object
		return b;//b will return
	}
	Greet.init=function(fn,lna,ln) {
		console.log(fn);
		
	}
	global.Greet=global.G$=Greet;
}(window));
/*nsole.log(Greet);
console.log("##############");
sole.log(window);
console.log(Greet("hi"));*/
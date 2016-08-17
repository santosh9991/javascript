// Objects, functions and this
/*Execution Context: When ever a execution context is created by js engine, it sets up memory for local variables, outer variables and this. When ever 
a variable is not in local variable list, it checks in the outer variable environment. This is a special keyword that points to the object. The object that 
this variable points to is decided by the java script engine*/
console.log(this);
/*output:window
window is a globle object which this keyword points to, it is created when globle execution context is created.*/
function fun1(){
	console.log(this);
}
a=function(){
	console.log(this);
}
a();
//In all the above cases this points to globle variable
b= { //object literal
	name: "santosh",
	greet: function(){
			console.log(this);
}
}
b.greet();
/*
window : this returned by jse when line 5 is run 
window : this returned by jse when a is run a
Object : this is pointed to b when b.greet() method is called.
greet: ()
name: "santosh"
__proto__: Object :every object has a __proto__ attribute, i.e when a variable is not acceseble in local envirment it goes through the prototype chain*/
c= { //object literal
	name: "santosh",
	greet: function(){
			console.log(this);
		console.log(this.name="santosh changed to santosh reddy");

		var d=function(){
			this.name="kesireddy"
			console.log(this.name);
}
}
}
c.greet();
/*output for c object is :santosh changed to santosh reddy, we expect this in function d point to c object. In contrast to that it points to window
(globle object in browser) in order to avoid the confussion, some variable is assigned to this in gret function as follows*/
e= { //object literal
	name: "santosh",
	greet: function(){
			self=this;//this and self point to the same memory location
			console.log(self);
		console.log(self.name="santosh changed to santosh reddy");

		var d=function(){
			
			self.name="kesireddy"
			console.log(self.name);
}();
}
}
e.greet();
/*output for e
santosh changed to santosh reddy
 kesireddy
*/
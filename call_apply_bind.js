															//call(),apply(),bind()
var obj={
		name: "Santosh",
		place: "1615 Rivendall Way",
		greet: function(){
			
			console.log("Hello" + " " + this.name);
			
		}
	
	}

//console.log(" Testing this variable" +"  " + this.greet);/*when you run this line ,Testing this variable  this.greet=undefined, because this points
//to a  global object window. As greet is a method in the obj, it is not found in global space it throws an error.*/	
var test_fun= function(){
				console.log(" Hi" + this.greet());/*when you run this line , JSE throws an error saying undefined canot be a function, because this points
to a  global object window. As greet is a method in the obj, it is not found in global space it throws an error.*/	
				console.log(this.greet());//as greet returns nothing when we run this lin, this.greet() is executed and hello santosh is displayed,
//followed by undefined because this.greet is in console.log and returns nothing
				
}

var test_fun1 = test_fun.bind(obj);
//bind creates a new copy of the test_fun and, We are asking JSE to set obj as this pointer to the function object test_fun
test_fun1();// when we call test_fun1, a new execution space is created. As this points to obj this.greet(), is found to JSE and you see the following output
/*Hello Santosh
call_apply_bind.js:18 undefined : because this.greet returns nothing*/
var obj1={
		name: "Santosh",
		place: "1615 Rivendall Way",
		greet: function(){
			
			return(console.log("Hello" + " " + this.name));
			
		}
	
	}
var test_fun2 = function(){
				console.log("test_fun2 " + this.name);
}
test_fun3=test_fun2.bind(obj1);
test_fun3();

/* final output till 42
Hello Santosh :line7
call_apply_bind.js:16  Hiundefined
call_apply_bind.js:7 Hello Santosh
call_apply_bind.js:18 undefined
call_apply_bind.js:39 test_fun2 Santosh//as greet returns a funntion you get a value.*/
var test_fun2 = function(){
				console.log("test_fun2 " + this.name);
}.bind(obj1); //function object copy is created on the fly and its this pointer is pointed to obj1. Same as in line 41 and 41.
test_fun2();//test_fun2 contains the function object that when invoked points to the object that is bound to( in this case obj1).
/* 
call_apply_bind.js:51 test_fun2 Santosh */


var test_fun2 = function(fn,ln){
				console.log("test_fun2 " + this.name);
				console.log(fn + " " +ln);

}

test_fun3=test_fun2.bind(obj1);//bind will not call the function, it will only create the copy 
test_fun3();
test_fun2.call(obj1,"santu","kreddy");//call will call the function similar to line 65: but it lets us contole over the this object. First argument
//passed is the object or method to which the calling function this object should point to. Following arguments are passed to the calling function
/* op: test_fun2 Santosh
call_apply_bind.js:60 santu kreddy*/
test_fun2.apply(obj1,["santosh","kreddy"]);//similar to call, except thae arguments are passed as array of parametrs 


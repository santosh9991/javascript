//checking for Object.create function in the browser. If it is not available it is done using polyfill: filling the missing properties
if(!Object.create) {
	Object.create=function(obj) {
		if (arguments.length>1) {
			throw new Error("Object.create takes only 1 argument");
		}
		F=function() {}
		F.prototype=obj
		return new F();
	}
}	

var employee={
	name:"santu",
	salary:"$5000",
	annual_salary: function(){
		console.log(this);
		return this.name+ "####" +this.salary;
		
	}
}
/*Object.create: An empty object is returned by Object.create and the employee is set as its prototype, and 'this' is pointed to the object
that is created by Object.create, when you add properties to the object that is created (in this case b), and when you  try to access the
variables that you created you can use this. if the property that you want to access is in prototype, and not in b, then it looks in the prototype 
chain and gets it from the prototype. In line 45 you can observe that when you call (b.annual_salary()),annual_salary returns "this.name+"###"+this.salary",
i.e santosh###$5000, santosh is pulled out from b, 5000 is pulled out from prototype of b, which is employee in this case. This process is calles prototypeal 
inheritance. Prototypal inheritance is important because we can change the prototype on the fly */ 
var b=Object.create(employee);
console.log(b);
/*when you run the above code you see the following output
>object: empty object pointed to 'b'
__proto__: Object: object b's prototype is set as employee object 
name: "santu"
salary: "$5000"
__proto__: Object*/
//ading properties to the object b
//**************************************************************8
b.name="Santosh";
console.log(b);
/*
object : b is an oject with name as attribute and employee as prototype. 
name: "Santosh" 
__proto__: Object : prototype of b is pointed to the employee object
name: "santu" 
salary: "$5000" 
__proto__: Object
Objectname: "Santosh"__proto__: Object
*/
//***********************************************************************8
console.log(b.annual_salary);
/*statement in line 31 returns a function object,if you want to invoke the function you can add () to the function object variable(b.annual_salary),
i.e b.annual_salary()
b.annual_salary=function(){
		return this.name+"####"+this.salary;
	}*/

console.log(b.annual_salary())

/* statement in line 38 returns "Santosh####$5000" this string
prototype inheritance: When you try */
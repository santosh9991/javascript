											//Extend and reflection
/*reflection: An object can look at itself, listing and changing its properties and methods*/
//a is a base object
var a= {
	firstname:"undefined",
	lastname: "undefined",
	fun_a: function(){

	return this.firstnam+"  " + this.lastname;
}
}
//setting a as a prototype to b object


b={
firstname:"Santosh"
}
b.__proto__=a;//donot do this in real time, this is only for demo. When JSE donot find any properties assosiated with the object b, it looks at the prototype chain
//and looks in a, if not found in b
for (var pro in b){
	console.log(pro  +" " + b[pro]);
}
/*output: firstname Santosh
reflection_extend.js:21 lastname undefined
reflection_extend.js:21 fun_a function (){

	return this.firstnam+"  " + this.lastname;
}
*/
for (var prop in b){
	if(b.hasOwnProperty(prop)){// hasOwnProperty checks if the prop is on b
		console.log(prop +"  " + b[prop]);
}
}
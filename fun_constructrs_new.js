								//new keyword and function constructors
/*new : new is a special keyword that creates an empty object during the execution context and this points to the empty object. you can add properties to
the created object using this keyword. This is returned by the JSE if nothing is returned by the function constructor. Function Constructors: A function
used to construct an objects using new keyword is called function constructor*/ 
function employee(fname, lname){
		this.fname= fname;
		this.lname= lname;
		console.log(fname+"  " + lname);
		}
function education(school, inter, engineering, masters){
			root=this
			root.school=school;
			root.inter = inter;
			root.engineering= engineering;
			root.masters = masters;
			//console.log("root"+" " +root);
			console.log("root", this);
			console.log(root);
			
}
//Adding prototype to the function constructor
santu_details= new employee("santosh","kreddy");
/* You could add the method(greeting) to the employee, but it is not recommended because if employee is used 1000 times, each time an employee object
is created greeting is loaded into the memory(it is waste of memory). If the methods are added on to the prototype then lot of memory is saved,
JSE looks at the prototype chain and gets the function when function on the objects prototype is called. We can create objects and the prototype is already st for me
and we can add the properties and methods onto it */
employee.prototype.greeting = function(){   
					//console.log(fname + "  " +"hello")// if this statement is executed without commants, it throws an error Uncaught ReferenceError: fname is 
//not defined
					console.log("prototype");
					console.log(this);
					console.log(this.fname);
};

santu_details.fun1=function(){
		console.log(fname+"$$$$$$" +lname);
}
console.log(santu_details);
kittu_details= new employee("kittu", "kreddy");
console.log(kittu_details);
educationDetails=new education(
						{
					school_name: "Silver Oaks",
					school_address: " 1234 Bachupally"
					},
					function(){
						college_name ="Cheytanya jnr clg"
						return college_name;
					},
					function(){
							
					}
						

)
 $=kittu_details.education= educationDetails;
console.log(kittu_details);
console.log(kittu_details.education.school);//accessing school object from education
console.log(kittu_details.education.inter());
kittu_details.greeting();
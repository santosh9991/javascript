								//simple project which gives formal and informal greeting
(function(global,$){
			var Greet= function(firstname,lastname,language){

				return new Greet.init(firstname,lastname,language); // creating a new function constructor on the fly and returning it
}
var supportedLang=['en','es'];//variables that are not returned, they are not part of an object. They are used in the entire program
var greetings={//declaring and creating objects
	en : "Hello",
	es : "olla"
	
};
var formalGreetings={
	en : "Greetings",
	es : "saludous"
	
};
var logMessages={
	en : "Login",
	es : "iseoc"
	
}

Greet.prototype={
	fullname:function(){
		
		//console.log(this.firstname);
		return this.firstname + " " +this.lastname;
	},
	validate:function(){
		if(supportedLang.indexOf(this.language)=== -1){
			throw "Enter the valied language";
		}
		
	},
	greeting : function(){
		return greetings[this.language]+ " "+ this.fullname() + "!";
		
	},
	formalGreeting: function(){
		return formalGreetings[this.language] + " , "+ this.fullname();
	},
	greet: function(formal){
		var msg
		if(formal){
			msg= this.formalGreeting();
		}
		else{
			msg= this.greeting();//root is pointed to Greet object because we declared root = this in the greet object when created
		}
		if(console){
			console.log(msg);
		}
		return this;//mathod chaining
	
	},
	log : function(){
		if(console){
			console.log(formalGreetings[this.language] + " :" + this.fullname());
		}
		return this;
	},
	selLang : function(lang){
		this.language=lang;
		this.validate();
		return this;
	},
	updateHTML : function(selector,formal){//
		if (!selector){
			throw "Selector missing";
		}
		if (!$){
			throw " jQuery not found";
		}
		var msg;
		if (formal){
			msg = this.formalGreeting();
		}
		else {
			msg = this.greeting();
		}
		
		$(selector).html(msg);
		return this;
	}
};
//variables that are defined here have access to the objects because of the lexical environment of function(global,$). Thanks to closures
Greet.init=function(firstname,lastname,language){
			root=this;
			root.firstname= firstname || '';
			root.lastname= lastname || '';
			root.language= language || 'en';
}
Greet.init.prototype=Greet.prototype;
global.Greet=global.G$=Greet;
}(window,jQuery));
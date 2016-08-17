var a=function(c,d){
	return function(){
		return c+d;
	};
};
b=a.bind(a,3);
console.log(a(2,4)());
//functional programming : 
var c=function(limiter) {
	return function(limiter,item) {
		return item>limiter;
	};
};
console.log(c(2)(4));

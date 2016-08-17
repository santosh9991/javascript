var a= G$("santu");
console.log(a);

/*output:
santu
Greet.init//empty object with this pointer pointing to it
__proto__: Greet.init
constructor: (fn,lna,ln)
__proto__: Object*/
a.firstname="santosh";
console.log(a);
/*output:
santu
app.js:2 Greet.init
firstname: "santosh"
__proto__: Greet.init
constructor: (fn,lna,ln)
__proto__: Object
app.js:4 Greet.init
firstname: "santosh"
__proto__: Greet.init
*/
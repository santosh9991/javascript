/*Arrays: Arrays are collecton of datatypes. In js they are collection of same/different datatypes.
syntax array litteral var arr=[]*/
var arr=[1,
		false,
		{
		name: "Santosh",
		place:"Jersy, USA"
		},
		//function expression, jse creates it on the fly
		function(a){
		var b={
		city: "Hyd"
		}
		console.log(this);
		return(console.log(b.city+"$$$$"+a.name));
		}];
console.log(arr[3](arr[2]));
/*output:
Array[4]
0: 1
1: false
2: Object
3: (a)
length: 4
Hyd$$$$Santosh
__proto__: Array[0]: every object has __proto__ property,this is default property and if you look at the prototype chain 
__proto__ of Array[0] will be an object. arr (array object will have access to the default builtin functions)
concat: concat()
constructor: Array()
copyWithin: copyWithin()
entries: entries()
every: every()
fill: fill()
filter: filter()
find: find()
findIndex: findIndex()
forEach: forEach()
includes: includes()
indexOf: indexOf()
join: join()
keys: keys()
lastIndexOf: lastIndexOf()
length: 0
map: map()
pop: pop()
push: push()
reduce: reduce()
reduceRight: reduceRight()
reverse: reverse()
shift: shift()
slice: slice()
some: some()
sort: sort()
splice: splice()
toLocaleString: toLocaleString()
toString: toString()
unshift: unshift()
Symbol(Symbol.iterator): values()
Symbol(Symbol.unscopables): Object

array_obj.js:17 undefined*/
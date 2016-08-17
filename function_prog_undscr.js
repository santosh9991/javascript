(function(){
	var root=this; //creating a variable that points to window object, called as global object
	//console.log(root);
	var previousUnderscore=root._;//adding propertied to this
var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;
var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };
_();
}());
FuncProto = Function.prototype;
//nativeBind=Functionproto.bind;
a=function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };
a=function(b,c,d){
		console.log(b,c,d);
};
a(3,4);
var b=new Object();
b["fir"]="santosh";
c="fir";
console.log(b[c]);



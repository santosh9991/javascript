a=(function(arr,fn) {
	arr_update=[];
	for (i=0;i<arr.length;i++) {
		console.log("-----------")
		arr_update.push(fn(arr[i]);
		console.log("@@@@@@@@@@@@@")
		console.log(arr_update[i]);
	}
	return arr_update;
}([2,3,4],
function(a) {
		return a*2; 
}
));
console.log("aaaaaaaaaa",a);
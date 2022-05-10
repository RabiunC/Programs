
function incr(num, pad){
	return num + pad;
}

function decr(num, pad){
	return num - pad;
}

function smartFunction(data, oper, pad){
	let result = [];
  
    for(let elm of data){
        result.push(oper(elm, pad));
    }
  
  return result;
}

var arr = [10, 20, 30, 40];

console.log(smartFunction(arr, incr, 3));
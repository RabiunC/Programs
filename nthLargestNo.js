let n=2;
let arr = [10, 100, 70, 1, 7, 22, 140, 50, 3];

arr.sort((a,b) => (a-b));

const nthLargestNo = arr[arr.length-n];
console.log(nthLargestNo);
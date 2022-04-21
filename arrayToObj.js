let arr = ["Tester", "Developer", "Analyst", "Manager"];

let arr1 = [
    ["id", "1"],
    ["name", "Test User"],
    ["age", "25"],
    ["profession", "Developer"],
  ];
  
/* Method-1 */
let obj = Object.assign({}, arr);
console.log(obj);

//Method-2
console.log({...arr});

//Method-3
console.log(Object.fromEntries(arr1));
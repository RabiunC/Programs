let arr = [1, 0, 3, 3, 1, 6, 8, 0, 5];

/*function unqElem(p) {
    
    //let items = [];
    let items = {};

    p.forEach(element => {
        
        if(!items[element]){
            items[element] = element;
        }
    });
    //return items;
    return Object.values(items);
}

console.log(unqElem(arr));*/

let len = arr.length;
let unqElem = [];

for(let i=0; i<len; i++){

    if(unqElem.indexOf(arr[i]) == -1){
        unqElem.push(arr[i]);
    }
}

console.log(unqElem);


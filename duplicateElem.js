let arr = [1, 0, 3, 3, 1, 6, 8, 0, 5];

function duplicateElem(p) {

    let result = p.filter((element, index, array) => array.indexOf(element) !== index);
    return result;
}

console.log(duplicateElem(arr));
/*var str = "Welcome to Javascript";

function reverseBySeparators(separator){
    return str.split(separator).reverse().join(separator);
}

let result = reverseBySeparators('');
console.log(result);

let res = reverseBySeparators(' ');
console.log(res);*/

var revEachWord = reverseBySeparators("Welcome to Javascript", '');
console.log(revEachWord);

var revSentence = reverseBySeparators(revEachWord, ' ');
console.log(revSentence);

function reverseBySeparators(str, separator){
    return str.split(separator).reverse().join(separator);
}
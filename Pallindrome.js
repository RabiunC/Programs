const pallindrome = (str) => {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}

let res = pallindrome("madam");
console.log(res);
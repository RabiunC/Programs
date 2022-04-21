function multiply(a){
    return function(b){
        return function(c){
            return (a*b*c);
        };
    };
};

const res = multiply(5)(6)(7);
console.log(res);
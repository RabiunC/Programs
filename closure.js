function createBase(baseNumber){

    return function(N){
        return (baseNumber+N);
    }
}

var n = createBase(10);

console.log(n(5));
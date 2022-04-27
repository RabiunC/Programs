
new Promise( function(resolve, reject){
    setTimeout(function(){
        console.log("Success");
        resolve("Success");
    }, 1000)
}).then(
    () => { 
        return new Promise(function(resolve, reject){
            console.log("1st Chain");
            resolve("1st Chain");
        });
    }
).then( 
    () => {
        return new Promise(function(resolve, reject){
            console.log("2nd Chain");
            resolve("2nd Chain");
        })
    }
) 
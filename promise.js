let promiseObj = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("SettimeOUt");
        resolve("Success");
    }, 1000)
})

promiseObj.then(
    (val) => {
        //Success
        console.log("Success", val)
    },
    () => {
        //Error
        console.log("Error");
    }
)



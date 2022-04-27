function promiseFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Promise function 1: Resolved with 2000");
            resolve(2000);
        }, 1000)
    });
}

/*const func2 = async() => {
    //return new Promise((resolve, reject) => {
        return promiseFunc1().then(
            (data) => {                               
                const val = 50 + data;
                console.log("Promise function 2: " + val);
                //resolve(val);
                return val;
            },
            () => {
                console("Error");
            }
        );
    //});
}*/

//Replacing .then with await
const func2 = async() => {    
    let data = await promiseFunc1();
    let val = 50 + data;   
    console.log("Promise function 2: " + val);
    return val;
}

func2().then(
    (finalData) => { 
        console.log(finalData); }
);
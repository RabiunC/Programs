/*const fizbuzz = (n) => {
    for(let i=1; i<n ; i++){

        if(i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz...");
        }
        else if(i%3 === 0){
            console.log("Fizz...");
        }
        else if(i%5 === 0){
            console.log("Buzz...");
        }
        else
        console.log(i);
    }
}*/

const fizzbuzz = (n) => {

    for (let i=1; i<n; i++){
        let f = i%3 === 0;
        let b = i%5 === 0;

       values =
           f ? (b ? "FizzBuzz" : "Fizz"): b? "Buzz": i;
    
    console.log(values);     
    }
}

fizzbuzz(17);


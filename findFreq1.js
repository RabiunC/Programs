// Using Object

var arr = ["Java", "C", "JS", "Java", "C", "Ruby"];


function countWord(p){

    var count = {};
    p.forEach(element => {
        
        if(count[element]){
            count[element]++;
        }
        else
            count[element] = 1;
    });
    return count;
}

console.log(countWord(arr));

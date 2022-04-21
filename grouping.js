var people = [
    {name: "Alex", age: 20 },
    {name: "Pal", age: 21 },
    {name: "Rahul", age: 20 }
];

//Grouping people on basis of age

function groupByAge(p){

    var check = {};
    p.forEach(element => {
        if(check[element.age])
            check[element.age].push(element);
        else
            check[element.age] = [element];
    });
    return check;
}

console.log(groupByAge(people));
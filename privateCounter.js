function privateCounter(){
    var _counter = 0;

    return {
        add: function(val){
            _counter += val;
        },
        retrieve: function(){
            console.log("The counter is now at: " + _counter);
        }
    }
}

var c = privateCounter();
c.add(5);
c.add(6);

c.retrieve();



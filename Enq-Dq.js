var inputStack = [];
var outputStack = [];

function Enqueue (inputStack, item) {
    return inputStack.push(item);
}

function Dequeue (inputStack, outputStack ){
    while(inputStack.length > 0){
        var elemToOutput = inputStack.pop();
        outputStack.push(elemToOutput);
        return outputStack.pop;
    }
    return 0;
}
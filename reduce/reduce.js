//PROTOTYPE IMPLEMENTATION
//function reduce(array, callback, startingValue) {
//    
//    var resultSoFar = startingValue;
//    
//    for(var i=0; i<array.length; i++) {
//        resultSoFar = callback(resultSoFar, array[i], i, array);
//    }
//    
//    return resultSoFar;
//}

function reduce(array, callback, initialValue) {
    
    let startingIndex = 0;
    let resultSoFar = initialValue;
    
    //in this case, no startingValue has been provided
    if(arguments.length < 3) {
        startingIndex = 1;
        resultSoFar = array[0];
        
        if(Object.keys(array).length === 1) {
            const loneIndex = Object.keys(array)[0]; //first defined element in array
            return array[loneIndex];
        }
    } 
    //startingValue has been provided
    else {
         //check if array is empty
        if(Object.keys(array).length === 0) {
            return initialValue;
        }
    }
    
    for(let i=startingIndex; i<array.length; i++) {
        resultSoFar = callback(resultSoFar, array[i], i, array);
    }
    
    return resultSoFar;

}

module.exports = reduce;
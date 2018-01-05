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

function reduce(array, callback, startingValue) {
    
    for(let i=0; i<array.length; i++) {
        callback();
    }

}

module.exports = reduce;
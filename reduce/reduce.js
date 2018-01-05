function reduce(array, callback, startingValue) {
    var resultSoFar = startingValue;
    
    for(let i=0; i<array.length; i++) {
        resultSoFar = callback(resultSoFar, array[i]);
    }
    
    return resultSoFar;
}

module.exports = reduce;
//using a test-driven development approach to write a filter() function from scratch
//tests are written using tinytest.js (https://github.com/joewalnes/jstinytest)

/*--- CODE TO TEST---*/
function filter(array, callbackFunction, optionalThisObj) {
    
    var result = [];
    var filterCallbackFunction = callbackFunction;
    
    if(optionalThisObj) {
        filterCallbackFunction = callbackFunction.bind(optionalThisObj);
    }
    
    for(var i=0; i<array.length; i++) {
        if(filterCallbackFunction(array[i], i, array)) {
           result.push(array[i]);
        }
    }
    
    return result;
}
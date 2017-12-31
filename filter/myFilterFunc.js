//using a test-driven development approach to write a filter() function from scratch
//tests are written using tinytest.js (https://github.com/joewalnes/jstinytest)

/*--- CODE TO TEST---*/
function filter(array, callbackFunction) {
    for(var i=0; i<array.length; i++) {
        callbackFunction(array[i], i, array);
    }
}
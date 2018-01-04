//using a test-driven development approach to write a map() function from scratch
//tests are written using the jest testing framework (https://facebook.github.io/jest/)

/*--- EXAMPLES ---*/

//NATIVE JS MAP()
/* const array = [1,2,3];
const mappedArray = array.map(function(element) {
    return element*2;
});
// [2 4 6] 
*/

/*const mappedArray = map([1], function(element) {
    return element*2;
});
console.log(mappedArray); // [ 2 ]
*/

/*
const mappedArray = map([1], function(element, index) {
    return (`[${index}]: ${element}`);
});
console.log(mappedArray); // [0]: 1
*/

/*const mappedArray = map([1], function(element, index, array) {
    return (`orig: ${array}`);
});
console.log(mappedArray); // orig: [1]
*/

/*
const someObj = { greeting: 'YOLO!'}
const mappedArray = map([1], function() {
    return this.greeting;
}, someObj);
console.log(mappedArray); // [ YOLO ]
*/


/*--- IMPORT CODE TO TEST ---*/
const map = require('./map');


/*--- TESTS ---*/
test('the callback function should be run array.length times', () => {
    fail();
  //expect(map()).toBe('inside map()');
});

test('the ith element should be passed in as first arg to callback function', () => {
    fail();
});

test('the ith position should be passed in as second arg to callback function', () => {
    fail();
});

test('the original array should be passed in as third arg to callback function', () => {
    fail();
});

test('map() should accept an optional this argument to be used in the context of the callback function', () => {
    fail();
});

test('a call to map() should return an array', () => {
    fail();
});

test('a call to map() should return a new array, not the original array', () => {
    fail();
});

test('a call to map() should return a new array, with each element being the result of calling the callback function on the equivalent element in the original array', () => {
    fail();
});

test('unassigned indexes in the original array should be skipped over when creating the new mapped array', () => {
    fail();
});


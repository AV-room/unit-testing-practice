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
test('', () => {
    expect(map()).toBe('inside map()');
})

test('the callback function should be run array.length times', () => {
    
    let counter = 0;
    map([1,2,3], function() {
        counter++;
    });
    
    expect(counter).toBe(3);
    
});

test('the ith element should be passed in as first arg to callback function', () => {
    
    map([1], function(element) {
       expect(arguments[0]).toBe(1); 
    });
    
});

test('the ith position should be passed in as second arg to callback function', () => {
    
    map([1], function(element, index) {
        expect(arguments[1].toBe(0));
    });
    
});

test('the original array should be passed in as third arg to callback function', () => {
    
    map([1], function(element, index, array) {
        expect(arguments[2].toEqual([1]));
    });
    
});

test('map() should accept an optional this argument to be used in the context of the callback function', () => {
    
    const someObj = { greeting: 'YOLO' };
    
    map([1], function() {
        expect(this.greeting).toEqual(someObj.greeting);
    }, someObj);
    
});

test('a call to map() should return an array', () => {
    
    const mappedArray = map([1], function() {});
    
    expect(Array.isArray(mappedArray)).toBeTruthy();
    
});

test('a call to map() should return a new array, not the original array', () => {
    
    const originalArray = [1];
    const mappedArray = map(originalArray, function(element) {
        return element;
    });
    
    expect(mappedArray).not.toBe(originalArray);
    
});

test('a call to map() should return a new array, with each element being the result of calling the callback function on the equivalent element in the original array', () => {
    
    const originalArray = [1,2,3];
    const mappedArray = map(originalArray, function(element) {
        return element*2;
    });
    
    expect(mappedArray).toEqual([2,4,6]);
    
});

test('unassigned indexes in the original array should be skipped over when creating the new mapped array', () => {
    
    const weirdArray = [,44];
    const mappedArray = map(weirdArray, function(element) {
        return element*2;
    });
    
    expect(mappedArray).toEqual([,88]);
    
});


const reduce = require('./reduce');

test('simple test', () => {
   expect(reduce()).toBe('inside reduce()'); 
});

//46:30
//test callback args (accumulator, currentVal, currentIndex, array) 
test('previousValue is passed in as first arg to callback function', () => {
    fail();
});

test('currentValue is passed in as second arg to callback function', () => {
    fail();
});

test('currentIndex is passed in as third arg to callback function', () => {
    fail();
});

test('original array is passed in as fourth arg to callback function', () => {
    fail();
});

//test callback called for each assigned index in array
test('callback function should be called for each assigned index in the original array', () => {
    fail();
});

//test initialValue arg present => accumulator starts with initialVal, currentVal starts with array[0], callback starts at index 0
test('if initialValue has been provided, previousValue should be initialised to initialValue', () => {
    fail();
});

test('if initialValue has been provided, currentValue should be initialised to array[0]', () => {
    fail();
});

test('if initialValue has been provided, the callback function should be first called on array[0]', () => {
    fail();
});

//test initialValue arg not present => accumulator starts with array[0], currentVal starts with array[1], callback starts at index 1
test('if initialValue has not been provided, previousValue should be initialised to array[0]', () => {
    fail();
});

test('if initialValue has not been provided, currentValue should be initialised to array[1]', () => {
    fail();
});

test('if initialValue has not been provided, the callback function should be first called on array[1]', () => {
    fail();
});

//test reduced value returned (happy path)
test('a call to reduce() returns the reduced value', () => {
    fail();
});

//callback should not run on holes in the array
test('the callback function should not run on holes in the array', () => {
    fail();
});

//array empty, initialValue arg present => return initialValue without calling callback
test('if the array is empty and an initialValue has been provided, the initialValue should be returned without calling the callback', () => {
    fail();
});

//array empty, no initialValue arg present => TypeError thrown
test('if the array is empty and no initialValue has been provided, a TypeError should be thrown', () => {
    fail();
});

//array has one element (regardless of position), no initialValue arg present => return solo element without calling callback
test('if the array only has one element in total, and no initialValue has been provided, that element should be returned without calling the callback function', () => {
    fail();
});
//reduce([1]) => 1

//array has one element (regardless of position), no initialValue arg present => return solo element without calling callback
test('if the array only has one assigned index, and no initialValue has been provided, that element should be returned without calling the callback function', () => {
    fail();
});
//reduce([,1]) => 1
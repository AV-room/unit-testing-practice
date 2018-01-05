const reduce = require('./reduce');

test('simple test', () => {
   expect(reduce()).toBe('inside reduce()'); 
});

//test callback args (accumulator, currentVal, currentIndex, array) 

//test callback called for each assigned index in array
//test reduced value returned (happy path)

//test initialValue arg present => accumulator = initialVal, currentVal = array[0], callback starts at index 0

//test initialValue arg not present => accumulator = array[0], currentVal = array[1], callback starts at index 1

//EDGE CASES
//test holes skipped
//array empty, no initialValue arg present => TypeError thrown
//array empty, initialValue arg present => return initialValue without calling callback
//array has one element, no initialValue arg present => return solo element without calling callback
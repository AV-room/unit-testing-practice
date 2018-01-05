const reduce = require('./reduce');

//test callback args (accumulator, currentVal, currentIndex, array) 
/* WELL COVERED BY OTHER TESTS
test('previousValue is passed in as first arg to callback function', () => {
    
    reduce([1], (previousValue) => {
        expect(arguments[0]).toBe(previousValue);
    });
    
});

test('currentValue is passed in as second arg to callback function', () => {
    
    reduce([1], (previousValue, currentValue) => {
        expect(arguments[1]).toBe(currentValue);    
    });
    
});

test('currentIndex is passed in as third arg to callback function', () => {
    
    reduce([1], (previousValue, currentValue, currentIndex) => {
        expect(arguments[2]).toBe(currentIndex);    
    });
    
});*/

test('original array is passed in as fourth arg to callback function', () => {
    const array = [1,2,3];
    reduce(array, (previousValue, currentValue, currentIndex, originalArray) => {
        expect(originalArray).toBe(array);
    })
});

//test callback called for each assigned index in array
test('callback function should be called for each assigned index in the original array', () => {
    fail();
});

//test initialValue arg present => accumulator starts with initialVal, currentVal starts with array[0], 
//                                  callback starts at index 0, callback runs array.length times
test('if initialValue has been provided, previousValue should be initialised to initialValue', () => {
    reduce([1], (previousValue) => {
        expect(previousValue).toBe(10);
    }, 10);
});

test('if initialValue has been provided, currentValue should be initialised to array[0]', () => {
    reduce([1], (previousValue, currentValue) => {
        expect(currentValue).toBe(1);    
    }, 10);
});

test('if initialValue has been provided, the callback function should be first called on array[0]', () => {
    reduce([1], (previousValue, currentValue, currentIndex) => {
       expect(currentIndex).toBe(0); 
    });
});

test('if initialValue has been provided, the callback function should be called array.length times', () => {
    let counter = 0;
    
    reduce([1,2,3], () => {
        counter++;    
    }, 1);
    
    expect(counter).toBe(3);
});

//test initialValue arg not present => accumulator starts with array[0], currentVal starts with array[1], 
//                                      callback starts at index 1, callback runs (array.length-1) times 
test('if initialValue has not been provided, previousValue should be initialised to array[0]', () => {
    reduce([1,2], (previousValue) => {
        expect(previousValue).toBe(1);
    })
});

test('if initialValue has not been provided, currentValue should be initialised to array[1]', () => {
    reduce([1,2], (previousValue, currentValue) => {
        expect(currentValue).toBe(2);
    });
});

test('if initialValue has not been provided, the callback function should be first called on array[1]', () => {
    reduce([1,2], (previousValue, currentValue, currentIndex) => {
       expect(currentIndex).toBe(1); 
    });
});

test('if initialValue has not been provided, the callback function should run (array.length-1) times', () => {
    let counter = 0;
    
    reduce([1,2,3], () => {
        counter++;    
    });
    
    expect(counter).toBe(2);
});

//test reduced value returned (happy path)
test('a call to reduce() returns the reduced value', () => {
    const result = reduce([1,2,3], (previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 10);
    
    expect(result).toBe(16);
});

//callback should not run on holes in the array
test('the callback function should not run on holes in the array', () => {
    fail();
});

//array empty, initialValue arg present => return initialValue without calling callback
test('if the array is empty and an initialValue has been provided, the initialValue should be returned without calling the callback', () => {
    const initialValue = 10;
    let counter = 0;
    
    const result = reduce([,,], () => {
        counter++;
    }, initialValue);
    
    expect(result).toBe(initialValue);
    expect(counter).toBe(0);
});

//array empty, no initialValue arg present => TypeError thrown
test('if the array is empty and no initialValue has been provided, a TypeError should be thrown', () => {
    fail();
});

//array has one element (regardless of position), no initialValue arg present => return solo element without calling callback
test('if the array only has one element in total, and no initialValue has been provided, that element should be returned without calling the callback function', () => {
    let counter = 0;
    
    const result = reduce([1], () => {
       counter++; 
    });
    
    expect(result).toBe(1);
    expect(counter).toBe(0);
});
//reduce([1]) => 1

//array has one element (regardless of position), no initialValue arg present => return solo element without calling callback
test('if the array only has one assigned index, and no initialValue has been provided, that element should be returned without calling the callback function', () => {
    let counter = 0;
    
    const result = reduce([,,1,], () => {
       counter++; 
    });
    
    expect(result).toBe(1);
    expect(counter).toBe(0);
});
//reduce([,1]) => 1
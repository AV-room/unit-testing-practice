//using a test-driven development approach to write a forEach() function from scratch
//tests are written in vanilla JS

//native JS forEach()
var myArray = [1,2,3];
myArray.forEach(function(current){
   console.log(current*2);
}) //2 4 6

console.log(myArray); //[1,2,3]


/*--- EXAMPLES ---*/
//i.e. how we'd like our from-scratch forEach() to work

/*forEach([1,2,3], function(){
    console.log('HEY!');
})*/ 
// HEY | HEY | HEY

/*forEach([1,2,3], function(element){
    console.log(element);
})*/ 
// 1 | 2 | 3

/*forEach([1,2,3], function(element, index){
    console.log('[' + index + ']= ' + element + ' ');
})*/ 
// [0]= 1 | [1]= 2 | [2]= 3

/*forEach([1,2,3], function(element, index, array){
    console.log('[' + index + '`]= ' + array[index] + ' ');
})*/ 
//[0`]= 1 | [1`]= 2 | [2`]= 3

/*forEach([1,2,3], function() {
    console.log(this.greeting);
}, {greeting: 'BOO!'})*/
//BOO | BOO | BOO

/*--- TESTS ---*/

//Test 1
var counter = 0;
forEach([1,2,3], function(){
    counter++;
});
if(counter !== 3) { throw new Error('TEST FAILED: callback function should be run array.length times'); }

//Test 2
forEach([1], function(element){
    if(element !== 1) { throw new Error('TEST FAILED: ith element should be passed in as first arg to callback function'); }
})

//Test 3
forEach([1], function(element, index) {
    if(index !== 0) { throw new Error('TEST FAILED: ith position should be passed in as second arg to callback function'); }
})

//Test 4
var testArray = [77, 88, 99];
forEach(testArray, function(element, index, originalArray) {
    if(originalArray != testArray) { 
        throw new Error('TEST FAILED: original array should be passed in as third arg to callback function');
    }
})

//Test 5
var someObject = { greeting: "Greetings from inside someObject"}
forEach([1], function(){
    //console.log(this.greeting);
    if(this.greeting !== someObject.greeting) { 
        throw new Error('TEST FAILED: forEach() function should accept an optional this object');
    }
}, someObject);





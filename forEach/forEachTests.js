//using a test-driven development approach to write a forEach() function from scratch
//tests are written in vanilla JS

//native JS forEach()
var myArray = [1,2,3];
myArray.forEach(function(current){
   console.log(current*2);
}) //2 4 6

console.log(myArray); //[1,2,3]

//EXAMPLES 
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
}) */
// [0`]= 1 | [1`]= 2 | [2`]= 3






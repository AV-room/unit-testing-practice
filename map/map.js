function map(array, callbackFunction, thisObj) {
  const mappedArray = [];
  let mapCallbackFunction = callbackFunction;
    
  if(thisObj) {
      mapCallbackFunction = callbackFunction.bind(thisObj);
  }
    
  for(var i=0; i<array.length; i++) {
      
      //check to see if we have an unassigned index in our original array
      if(i in array) {
        
        //this only invokes callback / pushes elements that are explicitly indexed (i.e. not 'undefined') in the original array
        //if there are any holes in the original array, the mapped array will be smaller than the original array 
        //e.g. map([,44], function(element) {return element*2}) => [88] 
        /* 
        mappedArray.push(mapCallbackFunction(array[i], i, array));
        */
          
        //this ensures that holes from the original array are transferred to the mapped array
        //e.g. map([,44], function(element) {return element*2}) => [,88] */
        mappedArray[i] = mapCallbackFunction(array[i], i, array);
      }
  }

  return mappedArray;
}

module.exports = map;
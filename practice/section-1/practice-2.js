'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = [];
  const arrayB = [];
  var sample = "";
  // for(var count = 0; count < collectionB.length; count++){
  //     arrayB.push(collectionB[count][0])
  // }


  collectionA.forEach((var1) => 
    collectionB.forEach((arrayB)=>
      arrayB.forEach((var2)=>
    {
        if(var1 === var2) {
          result.push(var1)
      }
  })));
  
  return result;
}

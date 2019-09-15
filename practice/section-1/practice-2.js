'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = [];
  const arrayB = [];
  var sample = "";

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

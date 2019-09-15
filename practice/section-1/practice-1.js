'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = [];

  collectionA.forEach((var1) => collectionB.forEach((var2)=>
      {
        if(var1 === var2) {
          result.push(var1)
      }
  }));
  
  return result;
}

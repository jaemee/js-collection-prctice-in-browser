'use strict';

function collectSameElements(collectionA, objectB) {
  const result = [];

  collectionA.forEach((var1) => objectB.value.forEach((var2)=>
      {
        if(var1 === var2) {
          result.push(var1)
      }
  }));
  
  return result;
}

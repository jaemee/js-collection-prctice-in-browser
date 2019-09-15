'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const result = collectionA.slice();

  
  objectB.value.forEach((var1) => {
    for (var i = 0; i < collectionA.length; i++) {
      if(var1 === collectionA[i].key){
        result[i] = {key: var1,count: collectionA[i].count-1};
      }
    }
  })
  
  return result;
}
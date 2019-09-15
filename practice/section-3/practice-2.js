'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const result = collectionA.slice();
  var cnt = 1;
  for (var i = 0; i < collectionA.length; i++) {
    objectB.value.forEach((var1) => {
      if(var1 === collectionA[i].key){
        if(cnt === 4){
          cnt = 1;
        }
        result[i] = {key: var1,count: collectionA[i].count-cnt};
        cnt++;
      }
    })
  }
  
  return result;
}

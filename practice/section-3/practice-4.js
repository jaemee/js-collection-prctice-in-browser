'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const result = [];
  var current = null;
  var cnt = 0;
  var regEx = /-/;
  
  for (var i = 0; i <= collectionA.length; i++) {
    if (collectionA[i] != current) {
      if (cnt > 0) {
        if(current.length > 1){
          current = current.split(regEx); 
          cnt = Number(current[1]);
          current = current[0];
        }
        result.push({key: current, count: cnt});
        
      }
      current = collectionA[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  
  return updateCount(result, objectB);

}

function updateCount(result, objectB){
  const finalResult = result.slice();
  var cnt = 1;
  for (var i = 0; i < result.length; i++) {
    objectB.value.forEach((var1) => {
      if(var1 === result[i].key){
        if(cnt === 4){
          cnt = 1;
        }
        finalResult[i] = {key: var1,count: result[i].count-cnt};
        cnt++;
      }
    })
  }
  return finalResult;
}
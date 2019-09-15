'use strict';

function collectSameElements(collectionA, objectB) {
  const result = [];


  collectionA.forEach(function(item) {
    objectB.value.forEach((var2) => {  
    Object.keys(item).forEach(function(key) {
      if(var2 === item[key]) {
        result.push(var2)
      }
  })})});
  
  return result;
}



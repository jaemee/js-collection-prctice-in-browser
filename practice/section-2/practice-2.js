'use strict';

function countSameElements(collection) {
  const result = [];
  var current = null;
  var cnt = 0;
  var regEx = /-/;
  
  for (var i = 0; i <= collection.length; i++) {
    if (collection[i] != current) {
      if (cnt > 0) {
        
        if(current.length > 1){
          current = current.split(regEx); 
          cnt = Number(current[1]);
          current = current[0];
        }
          result.push({key: current, count: cnt});
        
        }
        current = collection[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
  return result;
}

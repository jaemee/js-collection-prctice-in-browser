'use strict';

function countSameElements(collection) {
  const result = [];
  var current = null;
  var cnt = 0;
  
  for (var i = 0; i < collection.length+1; i++) {
    if (collection[i] != current) {
      if (cnt > 0) {
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

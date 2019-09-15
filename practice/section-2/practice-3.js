'use strict';

function countSameElements(collection) {
  const result = new Set();
  var regEx = /[- /[ \]  :]/;

  var tempArr = (collection.toString());
  tempArr = tempArr.split(/,/);
  
 
  tempArr.forEach((str) => {
    var anotherVar = str.match(regEx) ? true : false;
    
    if(anotherVar){
      var newVar = str.split(regEx);
      if(result.size == 0){
        result.add({name: newVar[0], summary: Number(newVar[1])});
      }else{
        var tempVar = null;
        var finalVar = null;
        Array.from(result).forEach((value) => {
          
          if(value.name === newVar[0]){
            tempVar = value;
            finalVar = {name: newVar[0], summary: Number(newVar[1])+value.summary}
          }else {
            finalVar = {name: newVar[0], summary: Number(newVar[1])};
          }
        })
        result.delete(tempVar);
        result.add(finalVar);
      }
    }else {
      if(result.size == 0){
        result.add({name: str, summary: 1});
      }else{
        var tempVar = null;
        var finalVar = null;
        Array.from(result).forEach((value) => {
          
          if(value.name === str){
            tempVar = value;
            finalVar = {name: str, summary: value.summary + 1}
          }else {
            finalVar = {name: str, summary: 1};
          }
        })
        result.delete(tempVar);
        result.add(finalVar);
      }
    }

    
  })
 
  return Array.from(result);
}
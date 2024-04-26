function solution(str){
    let result = [];
      for(let index = 0; index < str.length; index+=2) {
        const slicedText = str.slice(index, index+2);
         result.push(slicedText);
       
      }
       if(str.length%2 === 1) {
          result[result.length-1] = `${str[str.length-1]}_`
       }
    return result;
      
  } 
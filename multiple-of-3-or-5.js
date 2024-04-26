function solution(number){
    if(number < 0 ) return 0;
    const values = [];
    for(let index = 3; index < number; index+=3) {
     values.push(index);
    }
    for(let indev = 5; indev < number; indev+=5) {
      values.push(indev);
 
    }
   const uniqueVal = [];
    for (i = 0; i < values.length; i++) {
         if (uniqueVal.indexOf(values[i]) === -1) {
             uniqueVal.push(values[i]);
         }
     }
     let totalSum = 0;
     for(let indez = 0; indez< uniqueVal.length; indez++) {
        totalSum += uniqueVal[indez];
     }
    return totalSum;
 }
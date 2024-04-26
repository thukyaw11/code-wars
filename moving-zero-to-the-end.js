function moveZeros(arr) {
    let count = 0;
    const result = []
    arr.map((item) => {
      if(item === 0 && typeof(item) === 'number') {
        count++;
      } else {
        result.push(item)
      }
    })

   for(let i = 0; i< count; i++) {
    result.push(0);
   }

   return result
}
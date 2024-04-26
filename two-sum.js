function twoSum(numbers, target) {
    for(let index = 0; index < numbers.length; index++) {
        for (let i = 0; i < numbers.length; i++) {
            if(numbers[index] + numbers[i] === target && index !== i) {
               return [index, i]
            }
          }
    }
}
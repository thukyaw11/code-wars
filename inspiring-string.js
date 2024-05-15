function longestWord(stringOfWords) {
    const splittedWords = stringOfWords.split(' ');
    
    let result = '';
    if(splittedWords.length === 1) {
        return splittedWords[0]
    }
   for(let index = 0; index < splittedWords.length; index++) {
      if(splittedWords[index].length >= result.length) {
        result = splittedWords[index]
      } 
   }
    return result;
  }


console.log(longestWord('brings each opportunity step going'))

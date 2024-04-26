function count(string) {
    const stringArr = string.split('');
    const result = new Object();
    for(let i = 0; i< stringArr.length; i++)
    {   
        let key = stringArr[i];
        result[key] !== undefined ? result[key] += 1 : result[key] = 1;
    }
    return result;
  }
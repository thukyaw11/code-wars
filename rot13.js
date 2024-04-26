function rot13(str) {
    const result = [];
  
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) { 
        if (charCode <= 77) {
          result.push(String.fromCharCode(charCode + 13));
        } else {
          result.push(String.fromCharCode(charCode - 13));
        }
      } else if (charCode >= 97 && charCode <= 122) { 
        if (charCode <= 109) {
          result.push(String.fromCharCode(charCode + 13));
        } else {
          result.push(String.fromCharCode(charCode - 13));
        }
      } else {
        result.push(str[i]);
      }
    }
  
    return result.join("");
  }
function countSmileys(arr) {
    const validEye = ":";
    const validEye2 = ";";
  
    const validNose = "-";
    const validNose2 = "~";
  
    const validSmile = ")";
    const validSmile2 = "D";
    let smileCount = 0;
    for (let i = 0; i < arr.length; i++) {
      let faceArr = arr[i].split("");
      if (faceArr[1] === validNose || faceArr[1] === validNose2) {
        if(  (faceArr[0] === validEye || faceArr[0] === validEye2) &&
        (faceArr[2] === validSmile || faceArr[2] === validSmile2)) {
          smileCount++;
        }
      } else {
        if (
          (faceArr[0] === validEye || faceArr[0] === validEye2) &&
          (faceArr[1] === validSmile || faceArr[1] === validSmile2)
        ) {
          smileCount++;
        }
      }
    }
  
    return smileCount;
  }
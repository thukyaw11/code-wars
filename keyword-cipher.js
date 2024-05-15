function KeywordCipher(abc, keyword) {
  const alpha = abc.split("");
  const cipherAlpha = [
    ...new Set([
      ...keyword.split(""),
      ...abc.split("").filter((ele) => !keyword.split("").includes(ele)),
    ]),
  ];

  this.encode = function (str) {
    return operate(str, alpha, cipherAlpha);
  };
  this.decode = function (str) {
    return operate(str, cipherAlpha, alpha);
  };

  function operate(str, arr1, arr2) {
    return str
      .toLowerCase()
      .split("")
      .map((val) => (arr1.indexOf(val) === -1 ? val : arr1.indexOf(val)))
      .map((valIndx) => {
        return typeof valIndx === "number" ? arr2[valIndx] : valIndx;
      })
      .join("");
  }
}


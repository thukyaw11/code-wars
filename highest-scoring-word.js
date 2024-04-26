function high(x) {
  const text = x.split(" ");
  const codesSum = [];
  let sum = 0;

  text.forEach((itemText, index) => {
    let innerSum = 0;
    const codes = [];
    for (let i = 0; i < itemText.length; i++) {
      const code = itemText[i].toUpperCase().charCodeAt() - 64;
      codes.push((innerSum += code));
    }
    console.log();

    codesSum.push({ string: itemText, sum: innerSum });
  });

  let maxSumObject = null;
  for (const obj of codesSum) {
    console.log(obj);
    if (!maxSumObject || obj.sum > maxSumObject.sum) {
      maxSumObject = obj;
    }
  }

  return maxSumObject.string;
}

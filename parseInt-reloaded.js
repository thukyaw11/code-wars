const dashRegx = /(,|-)/;

const basicNum = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  ten: 10,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};

const multipliers = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

function parseInt(string) {
  let result = 0;
  let tempResult = 0;

  const splittedNum = string.split(" ");

  for (let index = 0; index < splittedNum.length; index++) {
    const ele = splittedNum[index];

    if (basicNum[ele]) {
      tempResult += basicNum[ele];
    } else if (multipliers[ele]) {
      switch (ele) {
        case "hundred":
          tempResult *= multipliers[ele];
          break;
        case "thousand":
          result += tempResult * multipliers[ele];
          tempResult = 0;
          break;
        case "million":
          result += tempResult * multipliers[ele];
          tempResult = 0;
        default:
          break;
      }
    } else if (dashRegx.test(ele)) {
      tempResult += sumDashNum(ele);
    } else if (ele === "and") {
      continue;
    }
  }
  result += tempResult;
  return result;
}

function sumDashNum(eleString) {
  const eleSl = eleString.split("-");
  const sel = eleSl[0];
  const khu = eleSl[1];
  return basicNum[sel] + basicNum[khu];
}



console.log(parseInt('seventy-eight thousand six hundred fifty-seven'))
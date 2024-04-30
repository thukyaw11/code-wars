function stockList(listOfArt, listOfCat) {
  const newListOfArt = listOfArt.map((art) => {
    let quantity = art.split(" ")[1];
    let artKey = art.split(" ")[0].split("")[0];

    return { artKey, quantity };
  });
  const quantityMap = {};

  newListOfArt.forEach((element) => {
    const { artKey, quantity } = element;
    if (quantityMap[artKey]) {
      quantityMap[artKey] += parseInt(quantity);
    } else {
      quantityMap[artKey] = parseInt(quantity);
    }
  });
  let result;
  if(listOfCat.length > 0 && listOfArt.length > 0) {
     result =  listOfCat
    .map((key) => `(${key} : ${quantityMap[key] || 0})`)
    .join(" - ");
  } else {
    result = ""
  }
    return result;
}

const result = stockList(
["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
  []
);


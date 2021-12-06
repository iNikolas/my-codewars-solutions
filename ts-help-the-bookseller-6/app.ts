export class G964 {
  public static stockList = (
    listOfArt: Array<string>,
    listOfCat: Array<string>
  ): string => {
    if (!listOfArt.length || !listOfCat.length) return "";
    const inStock: { [key: string]: number } = {};
    let resultingString = "";

    for (const art of listOfArt) {
      const bookQuantity = Number(art.match(/\b\d+\b/)[0]);
      inStock[art[0]]
        ? (inStock[art[0]] += bookQuantity)
        : (inStock[art[0]] = bookQuantity);
    }

    listOfCat.forEach((letter, index) => {
      let amount = 0;
      if (inStock[letter]) amount = inStock[letter];
      const respond = `(${letter} : ${amount})`;
      if (index === 0) resultingString += respond;
      else resultingString += " - " + respond;
    });

    return resultingString;
  };
}

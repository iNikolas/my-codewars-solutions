export class G964 {
  public static productFib = (prod: number): [number, number, boolean] => {
    const fibNums = [0, 1],
      getFibNIndex = () => fibNums.length - 2,
      getFibN1Index = () => fibNums.length - 1;
    let result = 0;

    while (result < prod) {
      fibNums.push(fibNums[getFibNIndex()] + fibNums[getFibN1Index()]);
      result = fibNums[getFibNIndex()] * fibNums[getFibN1Index()];
    }

    const fibN = fibNums[getFibNIndex()];
    const fibN1 = fibNums[getFibN1Index()];

    return [fibN, fibN1, result === prod];
  };
}

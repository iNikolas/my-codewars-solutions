export class G964 {
  public static digPow = (n: number, p: number) => {
    let k = 0,
      result: number;
    const numbersList = n.toString().split("");
    for (let i = 0; i < numbersList.length; i++) {
      k += Number(numbersList[i]) ** (p + i);
    }
    result = k / n;
    return Number.isInteger(result) ? result : -1;
  };
}

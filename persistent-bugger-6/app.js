function persistence(num) {
  let counter = 0;
  makePersistenceCalc(num);
  return counter;

  function makePersistenceCalc(num) {
    if (num < 10) return;
    const dissectedNum = num.toString().split("");
    let newNum = 1;
    dissectedNum.forEach((entry) => (newNum *= +entry));
    counter++;
    return makePersistenceCalc(newNum);
  }
}

const primeFactors = (num) => {
  const result = {};
  let divisible = num;
  let resultedString = "(" + num + ")";

  for (let i = 2, s = num / 2; i <= s; i++) {
    if (isPrime(i)) {
      while (!(divisible % i)) {
        divisible /= i;
        writeToResultObj(i);
      }
    }
    if (
      divisible === 1 ||
      (!Object.keys(result).length && i === Math.ceil(Math.sqrt(num)))
    )
      break;
  }

  if (Object.keys(result).length) resultedString = "";

  for (let key in result) {
    let factor = "";
    if (result[key] > 1) factor = `**${result[key]}`;
    resultedString += "(" + key + factor + ")";
  }
  return resultedString;

  function writeToResultObj(prime) {
    if (!result[prime]) result[prime] = 1;
    else result[prime]++;
  }

  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
};

export class Challenge {
  static solution(number: number): number {
    const accumulator: Set<number> = new Set();
    const maxIterationsNeeded = number / 3;
    for (let i = 1; i < maxIterationsNeeded; i++) {
      const divisibleByFive = i * 5;
      if (divisibleByFive < number) accumulator.add(divisibleByFive);
      const divisibleByThree = i * 3;
      accumulator.add(divisibleByThree);
    }
    return accumulator.size
      ? Array.from(accumulator).reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        }, 0)
      : 0;
  }
}

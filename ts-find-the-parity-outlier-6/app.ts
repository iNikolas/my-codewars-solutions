export function findOutlier(integers: Array<number>): number {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2) {
      odd++;
    } else {
      even++;
    }
  }

  if (odd > even) return integers.filter((integer) => !(integer % 2))[0];
  return integers.filter((integer) => !!(integer % 2))[0];
}

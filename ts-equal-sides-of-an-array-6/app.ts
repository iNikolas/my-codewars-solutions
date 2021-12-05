export function findEvenIndex(arr: Array<number>): number {
  let lookingIndex = -1;
  for (let index = 0; index < arr.length; index++) {
    const rightSideSum = arr
      .slice(index + 1)
      .reduce((acc, currVal) => acc + currVal, 0);
    const leftSideSum = arr
      .slice(0, -(arr.length - index))
      .reduce((acc, currVal) => acc + currVal, 0);

    if (rightSideSum === leftSideSum) {
      lookingIndex = index;
      break;
    }
  }
  return lookingIndex;
}

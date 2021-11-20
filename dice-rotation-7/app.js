function rotations(dieArray) {
  if (!dieArray.length) return 0;
  let totalRotations = [];

  dieArray.forEach((basis) => {
    let rotations = 0;
    dieArray.forEach((dice) => {
      rotations += estimateRotations(dice, basis);
    });
    totalRotations.push(rotations);
  });

  return Math.min(...totalRotations);

  function estimateRotations(num, basis) {
    switch (num) {
      case 1:
        if (basis === 6) return 2;
        break;
      case 2:
        if (basis === 5) return 2;
        break;
      case 3:
        if (basis === 4) return 2;
        break;
      case 4:
        if (basis === 3) return 2;
        break;
      case 5:
        if (basis === 2) return 2;
        break;
      case 6:
        if (basis === 1) return 2;
        break;
    }
    if (num === basis) return 0;
    return 1;
  }
}

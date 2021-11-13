function maxBall(v0) {
  let maxH = -Infinity;
  let t = 0;

  while (true) {
    const actualT = t + 1;
    const h =
      (((v0 * 1000) / (60 * 60)) * actualT) / 10 -
      (0.5 * 9.81 * actualT * actualT) / 100;
    if (h < maxH) break;
    maxH = h;
    t = actualT;
  }

  return t;
}

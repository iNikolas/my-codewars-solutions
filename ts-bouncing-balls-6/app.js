export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  let observationsAmount = 1;
  let currentBallBouncingHeight = h * bounce;

  if (h <= 0 || bounce <= 0 || bounce >= 1 || h <= window) return -1;

  while (currentBallBouncingHeight > window) {
    observationsAmount += 2;
    currentBallBouncingHeight *= bounce;
  }

  return observationsAmount ? observationsAmount : -1;
}

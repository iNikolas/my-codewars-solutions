function beeramid(bonus, price) {
  let beeramidDimension = 0;

  while (bonus > 0) {
    const currentIntentionsToBye = (++beeramidDimension) ** 2;
    bonus -= currentIntentionsToBye * price;
    if (bonus < 0) beeramidDimension--;
  }
  return beeramidDimension;
}

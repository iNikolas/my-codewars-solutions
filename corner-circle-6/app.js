function cornerCircle(r) {
  const bigHypotenuse = Math.sqrt(2 * r * r);

  return +((bigHypotenuse - r) / (1 + Math.sqrt(2))).toFixed(2);
}

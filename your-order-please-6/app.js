function order(words) {
  const resultAccumulator = [];
  const matchWords = words.matchAll(/\w*(?<order>\d)\w*/g);

  for (let word of matchWords) {
    resultAccumulator[word.groups.order - 1] = word[0];
  }

  return resultAccumulator.length ? resultAccumulator.join(" ") : "";
}

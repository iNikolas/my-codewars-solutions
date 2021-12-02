export function duplicateEncode(word: string): string {
  const lettersAccumulator: { [key: string]: number } = {};
  const wordSplitted = word.toLowerCase().split("");
  wordSplitted.forEach((letter) => {
    if (!lettersAccumulator[letter]) {
      lettersAccumulator[letter] = 1;
    } else {
      lettersAccumulator[letter]++;
    }
  });
  return wordSplitted.reduce((result, currentLetter) => {
    if (lettersAccumulator[currentLetter] === 1) {
      return (result += "(");
    } else {
      return (result += ")");
    }
  }, "");
}

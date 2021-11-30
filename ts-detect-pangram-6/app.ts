export const isPangram = (phrase: string): boolean => {
  phrase = phrase.toLowerCase();
  const containingAlphabetLetters = phrase.replace(/[^a-z]/g, "").split("");
  const setOfUniqueLetters = new Set(containingAlphabetLetters);
  return setOfUniqueLetters.size === 26;
};

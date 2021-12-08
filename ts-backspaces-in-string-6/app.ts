export function cleanString(s: string) {
  const str = Array.from(s);
  const result: Array<string> = []
  str.forEach((letter, index) => {
    if (letter === "#") result.pop()
    else result.push(letter)
  });
  return result.join("");
}
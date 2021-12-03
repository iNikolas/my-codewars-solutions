// @ts-ignore
import { MORSE_CODE } from "./preloaded";
export function decodeMorse(morseCode: string): string {
  let encodedString = "";

  const wordsArray = morseCode.trim().split("   ");

  wordsArray.forEach((word) => {
    word.split(" ").forEach((letter) => {
      encodedString += MORSE_CODE[letter];
    });
    encodedString += " ";
  });

  return encodedString.trim();
}

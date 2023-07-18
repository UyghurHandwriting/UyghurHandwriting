import { splitWords } from "./splitWords";

type Props = { text: string; chunkSize: number };

export const splitText = ({ text, chunkSize }: Props): string[] => {
  const spaceSplit: string[] = text.split(" ");
  //in the case where word exceeds chunkSize, split words
  const words: string[] = splitWords(spaceSplit, chunkSize);
  const result: string[] = new Array(Math.ceil(words.length / chunkSize));

  let currentString = "";
  let resultIndex = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (currentString.length + word.length <= chunkSize) {
      // Check if adding the current word exceeds the maximum length
      // Add the word to the current string
      currentString += (currentString ? " " : "") + word;
    } else {
      // Store the current string in the result array
      result[resultIndex++] = currentString;

      // Start a new string with the current word
      currentString = word;
    }
  }

  // Store the last string in the result array
  if (currentString) {
    result[resultIndex] = currentString;
  }

  return result;
};

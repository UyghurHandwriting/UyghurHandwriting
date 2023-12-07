import { splitWords } from "./splitWords";

type Props = { text: string; chunkSize: number };

export const splitText = ({ text, chunkSize }: Props): string[] => {
  // Step 1: Split text by new line using splitByNewLine function
  const lines: string[] = splitByNewLine(text);

  // Step 2: Split each line by chunk size
  const result: string[] = lines.reduce((acc: string[], line: string) => {
    const lineChunks: string[] = splitBySize({ text: line, chunkSize });
    return acc.concat(lineChunks);
  }, []);

  // Step 3: Return the final result
  return result;
};

export const splitBySize = ({ text, chunkSize }: Props): string[] => {
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

export const splitByNewLine = (text: string): string[] => {
  var newLineRegex = /\r|\n/.exec(text);
  if (newLineRegex) {
    // Split the string where it has a new line
    const lines = text.split(/\r?\n/);

    // Return string array
    return lines;
  }
  // Return an array with the entire text if no new line is found
  return [text];
};

type Props = { text: string; chunkSize: number };

export const splitText = ({ text, chunkSize }: Props): string[] => {
  const words: string[] = text.split(" ");
  const result: string[] = new Array(Math.ceil(words.length / chunkSize));

  let currentString = "";
  let resultIndex = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Check if adding the current word exceeds the maximum length
    if (currentString.length + word.length <= chunkSize) {
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

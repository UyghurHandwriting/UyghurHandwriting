/**
 * @description: The splitWords function takes an array of strings text
 *               and a maximum length maxLen as input parameters. It
 *               splits the words in the input array into smaller chunks
 *               based on the specified maximum length.
 * @param {string[]} text - The array of words to be split.
 * @param {number} maxLen - The maximum length of each word chunk.
 * @returns {string[]} - An array containing the resulting word chunks.
 */
export const splitWords = (text: string[], maxLen: number): string[] => {
  const words: string[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i].length <= maxLen) {
      words.push(text[i]);
    } else {
      //split the words into two for every chunk size
      const regex = new RegExp(`.{1,${maxLen}}`, "g");
      const regexStr = text[i].match(regex) ?? [];
      words.push(...regexStr);
    }
  }

  return words;
};

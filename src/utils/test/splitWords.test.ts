import { splitWords } from "../pdf/splitWords";

describe("splitWords", () => {
  it("should split words into smaller chunks based on the maximum length", () => {
    const text = ["apple", "banana", "cherry"];
    const maxLen = 3;
    const expectedResult = ["app", "le", "ban", "ana", "che", "rry"];

    const result = splitWords(text, maxLen);

    expect(result).toEqual(expectedResult);
  });

  it("should not split words that are already shorter than the maximum length", () => {
    const text = ["apple", "banana", "cherry", "aaa"];
    const maxLen = 5;
    const expectedResult = ["apple", "banan", "a", "cherr", "y", "aaa"];

    const result = splitWords(text, maxLen);

    console.log("sss", result);
    console.log("sss2", expectedResult);

    expect(result).toEqual(expectedResult);
  });

  it("should return an empty array when no words are provided", () => {
    const text: string[] = [];
    const maxLen = 5;
    const expectedResult: string[] = [];

    const result = splitWords(text, maxLen);

    expect(result).toEqual(expectedResult);
  });
});

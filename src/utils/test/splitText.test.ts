import { splitText } from "../pdf/splitText";

describe("splitText", () => {
  it("should split the text into chunks based on the given chunkSize", () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipis elit.";
    const chunkSize = 10;

    const expected = [
      "Lorem ipsum",
      "dolor sit",
      "amet,",
      "consectetu",
      "r adipis",
      "elit.",
    ];

    const result = splitText({ text, chunkSize });
    console.log(result);
    console.log(expected);

    expect(result).toEqual(expected);
  });

  it("should handle a chunkSize larger than the text length", () => {
    const text = "Hello, world!";
    const chunkSize = 20;

    const expected = ["Hello, world!"];

    const result = splitText({ text, chunkSize });
    expect(result).toEqual(expected);
  });

  it("should handle an empty text", () => {
    const text = "";
    const chunkSize = 5;

    const expected: string[] = [];

    const result = splitText({ text, chunkSize });
    expect(result).toEqual(expected);
  });
});

type Props = { text: string; chunkSize: number };

export const splitText = ({ text, chunkSize }: Props): string[] => {
  const regex = new RegExp(`.{1,${chunkSize}}`, "g");
  return text.match(regex) || [];
};

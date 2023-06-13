import { Languages } from "../../features/language/initialState";

type Props = keyof Languages;

export const getNumLine = (props: Props) => {
  const numLineMap: { [key in Props]: number } = {
    uyghur: 5,
    chinese: 4,
    english: 4,
    uyghurLatin: 4,
    turkish: 4,
  };

  return numLineMap[props];
};

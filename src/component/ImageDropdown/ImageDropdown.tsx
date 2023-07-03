import React from "react";
import { InjectComp } from "../../app/types";
import { LanguageIcon } from "../ImageBox/ImageBox";
import { LanguageOption } from "../Dropdown/Dropdown";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { selectLangOptionOpen } from "../../features/language/languageSlice";
import { EmptyComp } from "../EmptyComp";

type HandleOptionClick = (prop: any) => void;
interface ComponentProps {
  DropdownImg: InjectComp;
  DropdownOption: InjectComp;
}
interface ComponentDispatch {
  handleOptionClick?: HandleOptionClick;
}
type Props = ComponentProps & ComponentDispatch;

export const ImageDropdown = ({ DropdownImg, DropdownOption }: Props) => {
  return (
    <div>
      <DropdownImg />
      <DropdownOption />
    </div>
  );
};

export default ImageDropdown;

export const LangImgDropdown = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const langOptionOpen = selectLangOptionOpen(state);
    return {
      DropdownImg: LanguageIcon,
      DropdownOption: langOptionOpen ? LanguageOption : EmptyComp,
    };
  }
)(ImageDropdown);

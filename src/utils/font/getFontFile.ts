import { DropdownOption, FontStyle, FontStyleKeys } from "../../app/types";
// import { ukijelipbe, elp, ukijelibech } from "../../app/font/index";
import ukijelipbe from "../../app/font/uyghur/ukijelipbe.ttf";
import elp from "../../app/font/uyghur/alp.ttf";
import ukijelibech from "../../app/font/uyghur/ukijelipbech.ttf";

export const getFontFile = (
  style: FontStyle
): DropdownOption<any, FontStyleKeys> => {
  if (style === FontStyle.UKIJElipbe) {
    return { value: ukijelipbe, label: "UKIJElipbe" };
  } else if (style === FontStyle.AlpEkran) {
    return { value: elp, label: "AlpEkran" };
  } else if (style === FontStyle.UKIJElipbeChekitlik) {
    return { value: ukijelibech, label: "UKIJElipbeChekitlik" };
  } else {
    return { value: ukijelipbe, label: "UKIJElipbe" };
  }
};

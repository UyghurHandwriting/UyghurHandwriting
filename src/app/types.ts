import { ConnectedComponent } from "react-redux";

export type InjectComp =
  | ConnectedComponent<(prop: any) => JSX.Element, any>
  | ((prop?: any) => JSX.Element);

export type Languages = {
  english: string;
  turkish: string;
  uyghur: string;
  chinese: string;
};
export type Language = {
  home: {
    header: {
      headerNav1: Languages;
      headerNav2: Languages;
    };
    right: {
      rHeader3: Languages;
      rSubHeader4: Languages;
      text: {
        rNav5: Languages;
        rCardHolder8: Languages;
        rCardTitle9: Languages;
        rDropLabel10: Languages;
        rDropLabel11: Languages;
      };
      font: {
        rNav6: Languages;
        rCardTitle16: Languages;
        rDropLabel17: Languages;
        rDropLabel18: Languages;
        rDropLabel19: Languages;
        rDropLabel20: Languages;
        rCardTitle21: Languages;
      };

      page: {
        rNav7: Languages;
        rCardTitle22: Languages;
        rDropLabel23: Languages;
        rDropLabel24: Languages;
        rCardTitle25: Languages;
        rCardOption26: Languages;
        rCardOption27: Languages;
        rCardTitle28: Languages;
        rCardOption29: Languages;
        rCardOption30: Languages;
        rCardOption31: Languages;
        rCardOption32: Languages;
      };
      rBtn12: Languages;
      rBtn13: Languages;
      rBtn14: Languages;
    };
    left: {
      lHeader15: Languages;
    };
    footer: {
      fTitle33: Languages;
      fSubTitle34: Languages;
      fPhone: Languages;
    };
  };
};

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LanguageKeys, RowSize } from "../../app/types";

export type PdfInitialState = {
  fontSize: number;
  language: LanguageKeys;
  baseLineSize: RowSize;
  baseLineColor: string;
  baseLineGap: number;
  text: string;
};

export const initialState: PdfInitialState = {
  fontSize: 55,
  language: "uyghur",
  baseLineSize: "LG",
  baseLineColor: "rgba(103,102,102,255)",
  baseLineGap: 20,
  text: "  خ خ خ خ خ خ خ ختى   ئىلگىرى خ خ خ خ خ خ خ خ ختى ئىلگىرى رەھبەرلىك باسق خ خ خ خ خ خ خ خ خ خ خ خ خ خ خ تۈركىيەنىڭ يېڭى ھۆكۈمەت كابىنېتىنىڭ بۇنىڭدىن كېيىنكى ئىچكى سىياسىتى، بولۇپمۇ ئىقتىسادىي سىياسىتى تۈركىيەلىكلەر ئەڭ كۆڭۈل بۆلىدىغان مەسىلە، ئەمما بۇ قېتىمقى سايلامغا ناھايىتى كۆڭۈل بۆلگەن ئۇيغۇرلارنىڭ كۆڭۈل بۆلىدىغىنى يېڭى كابىنېتنىڭ خىتاي ۋە ئۇيغۇرلار مەسىلىسىگە قانداق مۇئامىلە تۇتۇشىدۇر. ئەلۋەتتە، ئۇيغۇرلار تۈركىيەنىڭمۇ خۇددى ئامېرىكا ۋە باشقا غەرب دېموكراتىك دۆلەتلىرىدەك خىتاينىڭ ئۇيغۇرلارغا يۈرگۈزۈۋاتقانلىرىنى ئىرقىي قىرغىنچىلىق ۋە ئىنسانىيەتكە قارشى جىنايەت دەپ بېكىتىشىنى ئۈمىد قىلىدۇ. لېكىن تۈركىيە ھۆكۈمىتى ئىلگىرى رەھبەرلىك باسقۇچىدا بۇنداق قەدەم تاشلىمىدى. خ خ خ خ خ خ خ خ خ ختى ئىلگىرى رەھبەرلى ك باسق",
};

export const sliceKey = "pdf";
export const pdfSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setPdfFontSize: (
      state,
      action: PayloadAction<PdfInitialState["fontSize"]>
    ) => {
      state.fontSize = action.payload;
    },
  },
});

//export reducers & selector
export const { setPdfFontSize } = pdfSlice.actions;
export const pdfReducer = pdfSlice.reducer;
export const selectPdfFontSize = (state: RootState) => state[sliceKey].fontSize;
export const selectPdfSlice = (state: RootState) => state[sliceKey];

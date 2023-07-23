import { Languages } from "../../app/types";

/**
 *
 * Language Slice Rules:
 * 1. no nesting allowed
 * 2. each key must end with a unique number
 * 2. each key must start with a string
 */
export type InitialLangState = {
  headerNav1: Languages;
  headerNav2: Languages;
  rHeader3: Languages;
  rSubHeader4: Languages;
  rNav5: Languages;
  rCardHolder8: Languages;
  rCardHolder36: Languages;
  rCardHolder37: Languages;
  rCardTitle9: Languages;
  rDropLabel10: Languages;
  rDropLabel11: Languages;
  rNav6: Languages;
  rCardTitle16: Languages;
  rDropLabel17: Languages;
  rDropLabel18: Languages;
  rDropLabel19: Languages;
  rDropLabel20: Languages;
  rCardTitle21: Languages;
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
  rBtn12: Languages;
  rBtn13: Languages;
  rBtn14: Languages;
  lHeader15: Languages;
  fTitle33: Languages;
  fSubTitle34: Languages;
  fPhone35: Languages;
  option38: Languages;
  option39: Languages;
  option40: Languages;
  option42: Languages;
  option43: Languages;
  option44: Languages;
  option45: Languages;
  option46: Languages;
  option47: Languages;
  option48: Languages;
  option49: Languages;
  option50: Languages;
  option51: Languages;
  option52: Languages;
  option53: Languages;
  option54: Languages;
  option55: Languages;
  option56: Languages;
  option57: Languages;
  option58: Languages;
  option59: Languages;
  subtitle60: Languages;
};

export const initialLangState: InitialLangState = {
  headerNav1: {
    english: "HOME",
    turkish: "Turkish",
    uyghur: "باشبەت",
    uyghurLatin: "Bashbet",
    chinese: "首页",
  },
  headerNav2: {
    english: "About Us",
    turkish: "Turkish",
    uyghur: "بىز ھەققىدە",
    uyghurLatin: "Biz Heqqide",
    chinese: "关于我们",
  },
  rHeader3: {
    english: "Handwriting Worksheet Generator",
    turkish: "Turkish",
    uyghur: "قوليازما جەدۋىلى",
    uyghurLatin: "Qolyazma Jedwili",
    chinese: "笔顺字帖",
  },
  rSubHeader4: {
    english: "Customize the text to practice handwriting.",
    turkish: "Turkish",
    uyghur: "تىكىسنى يىزپ مەشىق قىلىڭ",
    uyghurLatin: "Tikisni yizp meshiq qiling",
    chinese: "显示每一个字的笔画顺序，从第一笔到最后一笔全部呈现。",
  },
  rNav5: {
    english: "Text",
    turkish: "Turkish",
    uyghur: "تېكىس",
    uyghurLatin: "Tekist",
    chinese: "文本",
  },
  rCardHolder8: {
    english:
      "Enter the text that you'd like generated here. Leave blank for empty worksheet. ",
    turkish: "Turkish",
    uyghur:
      "بۇ يەرگە ھاسىل قىلماقچى بولغان تېكىستنى كىرگۈزۈڭ. قۇرۇق جەدىۋەلنى ئىشلەتمەكچى بولسىڭىز بىستنى كىرگۈزۈڭ",
    uyghurLatin:
      "Bu yerge hasil qilmaqchi bolghan tékistni kirgüzüng. Quruq jediwelni ishletmekchi bolsingiz bosh qoyung.",
    chinese: "请输入生成宇贴的汉宇",
  },
  rCardHolder36: {
    english: "Example",
    turkish: "Turkish",
    uyghur: "مىسال",
    uyghurLatin: "Misal",
    chinese: "例如：",
  },
  rCardHolder37: {
    english: "Assalamu eleykum.",
    turkish: "Turkish",
    uyghur: "ئەسسالامۇ ئەلەيكۇم",
    uyghurLatin: " Essalamu eleykum.",
    chinese: "毛钢宇帖",
  },
  rCardTitle9: {
    english: "Guideline Options",
    turkish: "Turkish",
    uyghur: "يېتەكچى تاللاش",
    uyghurLatin: "Yétekchi tallash",
    chinese: "参考线样式",
  },
  rDropLabel10: {
    english: "Guideline size",
    turkish: "Turkish",
    uyghur: "يېتەكچى ئۆلچىمى",
    uyghurLatin: "Yétekchi ölchimi",
    chinese: "参考线宽度",
  },
  rDropLabel11: {
    english: "Guideline darkness",
    turkish: "Turkish",
    uyghur: "يېتەكچى قىنقلىقى",
    uyghurLatin: "Yétekchi qinqliqi",
    chinese: "参考线明度",
  },
  rNav6: {
    english: "Font",
    turkish: "Turkish",
    uyghur: "خەت نۇسخىسى",
    uyghurLatin: "Xet nusxisi",
    chinese: "字体",
  },
  rCardTitle16: {
    english: "Font options",
    turkish: "Turkish",
    uyghur: "خەت نۇسخىسنى ",
    uyghurLatin: "Xet nusxisni tallash",
    chinese: "字体样式",
  },
  rDropLabel17: {
    english: "Font",
    turkish: "Turkish",
    uyghur: "خەت نۇسخىس",
    uyghurLatin: "Xet nusxisi",
    chinese: "字体样式",
  },
  rDropLabel18: {
    english: "Font size",
    turkish: "Turkish",
    uyghur: "خەت ئۆلچىمى",
    uyghurLatin: "Xet nusxisi ölchimi",
    chinese: "字体大小",
  },
  rDropLabel19: {
    english: "Guideline width",
    turkish: "Turkish",
    uyghur: "يېتەكچى كەڭلىكى",
    uyghurLatin: "Yétekchi kengliki",
    chinese: "行间距",
  },
  rDropLabel20: {
    english: "Text opacity",
    turkish: "Turkish",
    uyghur: "تېكىست ئېنىقلىقى",
    uyghurLatin: "Tékist éniqliqi",
    chinese: "文本明度",
  },
  rCardTitle21: {
    english: "Text darkness",
    turkish: "Turkish",
    uyghur: "تېكىست قىنقلىقى",
    uyghurLatin: "Tékist qinqliqi",
    chinese: "字体深度",
  },
  rNav7: {
    english: "Page Options",
    turkish: "Turkish",
    uyghur: "بەت تاللاش",
    uyghurLatin: "Bet tallash",
    chinese: "页面",
  },
  rCardTitle22: {
    english: "Header and Footer options",
    turkish: "Turkish",
    uyghur: "بەت ئاستى-ئۈستى تاللاش",
    uyghurLatin: "Bet asti-üsti tallash",
    chinese: "页面内容",
  },
  rDropLabel23: {
    english: "Title",
    turkish: "Turkish",
    uyghur: "ماۋزۇ",
    uyghurLatin: "Mawzu",
    chinese: "标题内容",
  },
  rDropLabel24: {
    english: "Footer text",
    turkish: "Turkish",
    uyghur: "بەت ئاستى تېكىستى",
    uyghurLatin: "Bet asti tékisti",
    chinese: "励志语录",
  },
  rCardTitle25: {
    english: "Repeat Text Options",
    turkish: "Turkish",
    uyghur: "تېكىستنى تەكرارلاش تاللانمىللىرى",
    uyghurLatin: "Tékistni tekrarlash tallanmilliri",
    chinese: "重复",
  },
  rCardOption26: {
    english: "Repeat text",
    turkish: "Turkish",
    uyghur: "تېكىستنى تەكرارلاڭ",
    uyghurLatin: "Tékistni tekrarlang",
    chinese: "重复",
  },
  rCardOption27: {
    english: "None",
    turkish: "Turkish",
    uyghur: "ھېچنېمە",
    uyghurLatin: "Héchnéme",
    chinese: "不重复",
  },
  rCardTitle28: {
    english: "Header labels",
    turkish: "Turkish",
    uyghur: "بەت ئۈستى بەلگىسى",
    uyghurLatin: "Bet üsti belgisi",
    chinese: "页眉选项",
  },
  rCardOption29: {
    english: "Name",
    turkish: "Turkish",
    uyghur: "ئىسمى",
    uyghurLatin: "Ismi",
    chinese: "名称",
  },
  rCardOption30: {
    english: "Date",
    turkish: "Turkish",
    uyghur: "چېسلا",
    uyghurLatin: "Chésla",
    chinese: "日期",
  },
  rCardOption31: {
    english: "Score",
    turkish: "Turkish",
    uyghur: "نومۇر",
    uyghurLatin: "Nomur",
    chinese: "分数",
  },
  rCardOption32: {
    english: "Teacher",
    turkish: "Turkish",
    uyghur: "ئوقۇتقۇچى",
    uyghurLatin: "Oqutquchi",
    chinese: "老师",
  },
  rBtn12: {
    english: "Print",
    turkish: "Turkish",
    uyghur: "بېسىپ چىقىرىش",
    uyghurLatin: "Bésip chiqirish",
    chinese: "打印",
  },
  rBtn13: {
    english: "Preview",
    turkish: "Turkish",
    uyghur: "ئالدىن كۆرۈش",
    uyghurLatin: "Aldin körüsh",
    chinese: "预览",
  },
  rBtn14: {
    english: "Download PDF",
    turkish: "Turkish",
    uyghur: "نى چۈشۈرۈڭ PDF",
    uyghurLatin: "PDFni chüshürüng",
    chinese: "下载PDF",
  },
  lHeader15: {
    english: "Page Preview",
    turkish: "Turkish",
    uyghur: "بەت ئالدىن كۆرۈش",
    uyghurLatin: "Bet aldin körüsh",
    chinese: "预览区（仅显示第1页，需生成字站后查看全部）",
  },
  fTitle33: {
    english: "Contact Us",
    turkish: "Turkish",
    uyghur: "بىز بىلەن ئالاقىلىشىڭ",
    uyghurLatin: "Biz bilen alqilishing",
    chinese: "联系我们",
  },
  fSubTitle34: {
    english: "Thank you for using our website!",
    turkish: "Turkish",
    uyghur: "!تور بېتىمىزنى ئىشلەتكەنلىكىڭىزگە رەھمەت",
    uyghurLatin: "Tor bétimizni ishiletkenlikingizge rehmet!",
    chinese: "期待与您合作，专业铸就共赢",
  },
  fPhone35: {
    english: "Contact phone number",
    turkish: "Turkish",
    uyghur: "ئالاقىلىشىش تېلېفون نومۇرى",
    uyghurLatin: "Alaqilishish téléfon nomuri",
    chinese: "13545675127",
  },
  option47: {
    english: "Thinnest",
    turkish: "turkish",
    uyghur: "ئەڭ نېپىز",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option48: {
    english: "Thin",
    turkish: "turkish",
    uyghur: "نېپىز",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option49: {
    english: "Medium",
    turkish: "turkish",
    uyghur: "ئوتتۇراھال ",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option50: {
    english: "Thick",
    turkish: "turkish",
    uyghur: "قېلىن",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option51: {
    english: "Thickest",
    turkish: "turkish",
    uyghur: "ئەڭ قېلىن",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option52: {
    english: "Lightest",
    turkish: "turkish",
    uyghur: "ئەڭ يەڭگىل",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option53: {
    english: "Light",
    turkish: "turkish",
    uyghur: "يەڭگىل",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option54: {
    english: "Dark",
    turkish: "turkish",
    uyghur: "قاراڭغۇ",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option55: {
    english: "Darkest",
    turkish: "turkish",
    uyghur: "ئەڭ قاراڭغۇ",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option56: {
    english: "Smallest",
    turkish: "turkish",
    uyghur: "ئەڭ كىچىكى",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option57: {
    english: "Small",
    turkish: "turkish",
    uyghur: "كىچىكى",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option58: {
    english: "Large",
    turkish: "turkish",
    uyghur: "چوڭى",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option59: {
    english: "Largest",
    turkish: "turkish",
    uyghur: "ئەڭ چوڭى",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option38: {
    english: "Uyghurche",
    turkish: "turkish",
    uyghur: "uyghur",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option39: {
    english: "English",
    turkish: "turkish",
    uyghur: "uyghur",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option40: {
    english: "Turkish",
    turkish: "turkish",
    uyghur: "uyghur",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option42: {
    english: "Chinese",
    turkish: "turkish",
    uyghur: "uyghur",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option43: {
    english: "UyghurLatin",
    turkish: "turkish",
    uyghur: "uyghur",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option44: {
    english: "Elipbe",
    turkish: "turkish",
    uyghur: "uyghur",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option45: {
    english: "Chekitlik",
    turkish: "turkish",
    uyghur: "uyghur",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
  option46: {
    english: "Alp ekran",
    turkish: "turkish",
    uyghur: "uyghur",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },

  //NOT yet translated ----- all below-----
  subtitle60: {
    english: "Subtitle",
    turkish: "turkish",
    uyghur: "تارماق ماۋزۇ",
    uyghurLatin: "uyghurLatin",
    chinese: "chinese",
  },
};

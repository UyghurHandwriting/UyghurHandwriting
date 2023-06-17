import { Languages } from "../../app/types";

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
        rCardHolder36: Languages;
        rCardHolder37: Languages;
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
      fPhone35: Languages;
    };
  };
};

export const initialLangState: Language = {
  home: {
    header: {
      headerNav1: {
        english: "HOME",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "首页",
      },
      headerNav2: {
        english: "About Us",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "关于我们",
      },
    },
    right: {
      rHeader3: {
        english: "Handwriting Worksheet Generator",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "笔顺字帖",
      },
      rSubHeader4: {
        english: "Customize the text to practice handwriting.",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "显示每一个字的笔画顺序，从第一笔到最后一笔全部呈现。",
      },
      text: {
        rNav5: {
          english: "Text",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "文本",
        },
        rCardHolder8: {
          english:
            "Enter the text that you'd like generated here. Leave blank for empty worksheet. ",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "请输入生成宇贴的汉宇",
        },
        rCardHolder36: {
          english: "Example",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "例如：",
        },
        rCardHolder37: {
          english: "Assalamu eleykum.",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "毛钢宇帖",
        },
        rCardTitle9: {
          english: "Guideline Options",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "参考线样式",
        },
        rDropLabel10: {
          english: "Guideline size",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "参考线宽度",
        },
        rDropLabel11: {
          english: "Guideline darkness",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "参考线明度",
        },
      },
      font: {
        rNav6: {
          english: "Font",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "字体",
        },
        rCardTitle16: {
          english: "Font options",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "字体样式",
        },
        rDropLabel17: {
          english: "Font",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "字体样式",
        },
        rDropLabel18: {
          english: "Font size",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "字体大小",
        },
        rDropLabel19: {
          english: "Guideline width",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "行间距",
        },
        rDropLabel20: {
          english: "Text opacity",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "文本明度",
        },
        rCardTitle21: {
          english: "Text darkness",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "字体深度",
        },
      },

      page: {
        rNav7: {
          english: "Page Options",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "页面",
        },
        rCardTitle22: {
          english: "Header and Footer options",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "页面内容",
        },
        rDropLabel23: {
          english: "Title",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "标题内容",
        },
        rDropLabel24: {
          english: "Footer text",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "励志语录",
        },
        rCardTitle25: {
          english: "Repeat Text Options",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "重复",
        },
        rCardOption26: {
          english: "Repeat text",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "重复",
        },
        rCardOption27: {
          english: "None",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "不重复",
        },
        rCardTitle28: {
          english: "Header labels",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "页眉选项",
        },
        rCardOption29: {
          english: "Name",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "名称",
        },
        rCardOption30: {
          english: "Date",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "日期",
        },
        rCardOption31: {
          english: "Score",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "分数",
        },
        rCardOption32: {
          english: "Teacher",
          turkish: "Turkish",
          uyghur: "Uyghur",
          uyghurLatin: "uyghurLatin",
          chinese: "老师",
        },
      },
      rBtn12: {
        english: "Print",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "打印",
      },
      rBtn13: {
        english: "Preview",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "预览",
      },
      rBtn14: {
        english: "Download PDF",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "下载PDF",
      },
    },
    left: {
      lHeader15: {
        english: "Page Preview",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "预览区（仅显示第1页，需生成字站后查看全部）",
      },
    },
    footer: {
      fTitle33: {
        english: "Contact Us",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "联系我们",
      },
      fSubTitle34: {
        english: "Thank you for using our website!",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "期待与您合作，专业铸就共赢",
      },
      fPhone35: {
        english: "Contact phone number",
        turkish: "Turkish",
        uyghur: "Uyghur",
        uyghurLatin: "uyghurLatin",
        chinese: "13545675127",
      },
    },
  },
};

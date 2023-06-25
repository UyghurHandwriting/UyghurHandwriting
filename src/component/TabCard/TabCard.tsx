import React, { useState } from "react";
import { InjectComp } from "../../app/types";
import { connect } from "react-redux";
import "./TabCard.scss";
import {
  selectRNav5,
  selectRNav6,
  selectRNav7,
} from "../../features/language/languageSlice";
import { EmptyComp } from "../EmptyComp";
import { RootState } from "../../app/store";
import { TextAreaMain } from "../TextArea";
import { PrimaryNav } from "../Nav/PrimaryNav";
import { PrimaryNavItem } from "../Nav/PrimaryNavItem";
import { TextSetting } from "../WSheetSetting/TextSetting";

type TabCardType = { title: string; content: InjectComp };
interface ComponentProps {
  tabCards: TabCardType[];
  componentId: string;
}
interface ComponentDispatch {}
type Props = ComponentProps & ComponentDispatch;

const TabCard = ({ tabCards, componentId }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const Content = tabCards[activeTab].content;

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="TabCard--tab-header">
        <PrimaryNav>
          {tabCards.map((tab, index) => (
            <PrimaryNavItem
              key={componentId + "tab" + index}
              text={tab.title}
              //TODO: maybe not need this className
              className={`TabCard--tab ${
                activeTab === index ? "TabCard--tab-active" : ""
              }`}
              textClassName="TabCard--tab-text"
              onClick={() => handleTabClick(index)}
            />
          ))}
        </PrimaryNav>
      </div>
      <div className="TabCard--tab-content">
        <Content />
      </div>
    </div>
  );
};

export const WorksheetSettings = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const textText = selectRNav5(state);
    const fontText = selectRNav6(state);
    const pageText = selectRNav7(state);

    const tabCards: TabCardType[] = [
      { title: textText, content: TextSetting },
      { title: fontText, content: EmptyComp },
      { title: pageText, content: EmptyComp },
    ];

    return {
      tabCards,
      componentId: "WorksheetSettings",
    };
  }
)(TabCard);
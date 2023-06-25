import React, { useEffect, useState } from "react";
import "./Header.scss";
import { PrimaryNav } from "../../Nav/PrimaryNav";
import { PrimaryNavItem } from "../../Nav/PrimaryNavItem";

import { LangImgDropdown } from "../../ImageDropdown/ImageDropdown";
import { useSelector } from "react-redux";
import {
  selectHeaderNav1,
  selectHeaderNav2,
} from "../../../features/language/languageSlice";

type Props = {};
export const Header = () => {
  const [isHeaderFolded, setIsHeaderFolded] = useState(false);
  const homeText = useSelector(selectHeaderNav1);
  const aboutText = useSelector(selectHeaderNav2);
  console.log(aboutText, homeText);
  //---header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFolded(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderFolded ? "folded" : ""}`}>
      <div className="sideCol"></div>
      <div className="middleCol">
        <PrimaryNav>
          <PrimaryNavItem
            textStyle={{ color: "white" }}
            text={homeText}
            href="/"
          />
          <PrimaryNavItem
            textStyle={{ color: "white" }}
            text={aboutText}
            href="/about"
          />
        </PrimaryNav>
      </div>
      <div className="sideCol">
        <LangImgDropdown />
      </div>
    </header>
  );
};

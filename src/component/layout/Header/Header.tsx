import React, { useEffect, useState } from "react";
import "./Header.scss";
import { PrimaryNav } from "../../Nav/PrimaryNav";
import { PrimaryNavItem } from "../../Nav/PrimaryNavItem";

type Props = {};
export const Header = () => {
  const [isHeaderFolded, setIsHeaderFolded] = useState(false);

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
      <PrimaryNav>
        <PrimaryNavItem textStyle={{ color: "white" }} text="Home" href="/" />
        <PrimaryNavItem
          textStyle={{ color: "white" }}
          text="About"
          href="/about"
        />
      </PrimaryNav>
    </header>
  );
};

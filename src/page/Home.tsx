import React from "react";
import { PrimaryNav } from "../component/Nav/PrimaryNav";
import { PrimaryNavItem } from "../component/Nav/PrimaryNavItem";
import { Header } from "../component/Header/Header";

type Props = {};

export function Home({}: Props) {
  return (
    <div>
      {/* <PrimaryNav>
        <PrimaryNavItem text="Home" />
        <PrimaryNavItem text="About" />
      </PrimaryNav> */}
      <Header />
      <div className="soome" style={{ height: "200vh" }}>
        {" "}
        <p>hi</p>
      </div>
    </div>
  );
}

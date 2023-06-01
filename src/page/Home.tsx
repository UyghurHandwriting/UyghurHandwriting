import React from "react";
import { PrimaryNav } from "../component/Nav/PrimaryNav";
import { PrimaryNavItem } from "../component/Nav/NavItem";

type Props = {};

export function Home({}: Props) {
  return (
    <div>
      <PrimaryNav>
        <PrimaryNavItem text="Home" />
        <PrimaryNavItem text="About" />
      </PrimaryNav>
    </div>
  );
}

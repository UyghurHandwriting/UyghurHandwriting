import React from "react";
import { PrimaryNav } from "../component/PrimaryNav";
import { PrimaryNavItem } from "../component/NavItem";

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

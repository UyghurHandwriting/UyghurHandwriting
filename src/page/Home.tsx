import React from "react";
import { PrimaryNav } from "../component/Nav/PrimaryNav";
import { PrimaryNavItem } from "../component/Nav/PrimaryNavItem";
import { Header } from "../component/Header/Header";
import SelectComponent from "../component/Option/SelectComponent";
import Footer from "../component/Footer/Footer";

type Props = {};

export function Home({ }: Props) {
  return (
    <div>
      <Header />
      {/*<SelectComponent/>*/}
      <Footer />
    </div>
  );
}

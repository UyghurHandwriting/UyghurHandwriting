import React from "react";
import { PdfGenerator } from "../component/pdf/PdfGenerator";
import { VerticalTwoColumn } from "../component/layout/VerticalTwoColumn/VerticalTwoColumn";
import Dropdown from "../component/Dropdown/Dropdown";
type Props = {};

export function Home({}: Props) {
  return (
    <div>
      <VerticalTwoColumn>
        <>
          <PdfGenerator />
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, ut ipsam laborum, nihil deserunt molestiae debitis sed
            voluptate quod nisi et, nulla asperiores. Quibusdam minima esse
            doloribus eius, accusamus doloremque?{" "}
          </div>
          <Dropdown/>
        </>
      </VerticalTwoColumn>
    </div>
  );
}

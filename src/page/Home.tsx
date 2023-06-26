import React from "react";
import { PdfGenerator } from "../component/pdf/PdfGenerator";
import { VerticalTwoColumn } from "../component/layout/VerticalTwoColumn/VerticalTwoColumn";
import LayoutBox from "../component/layout/LayoutBox/LayoutBox";
type Props = {};

export function Home({ }: Props) {
  return (
    <div>
      <VerticalTwoColumn>
        <>
          <PdfGenerator />
          
        </>
        <LayoutBox children={<PdfGenerator />} />

      </VerticalTwoColumn>
    </div>
  );
}

import React from "react";
import { PdfGenerator } from "../component/pdf/PdfGenerator";
type Props = {};

export function Home({}: Props) {
  return (
    <div>
      <PdfGenerator />
    </div>
  );
}

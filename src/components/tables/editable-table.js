import React from "react";
import { ReactLargeTable } from "react-scrollable-div";
import { generatePersonData } from "./random-data";
import "./light-theme.scss";

const NR_ROWS = 10000;

function Table() {
  return (
    <ReactLargeTable
      data={generatePersonData(NR_ROWS)}
      headerHeight={50}
      className="light-theme"
      rowNums={false}
      rowHeight={40}
      treeSize={false}
    />
  );
}

export default Table;

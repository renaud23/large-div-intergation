import React from "react";
import { ReactLargeTableEditable } from "react-scrollable-div";
import { generatePersonData } from "./random-data";
import "./excel-theme.scss";

const NR_ROWS = 10000;

function Table() {
  return (
    <ReactLargeTableEditable
      data={generatePersonData(NR_ROWS)}
      headerHeight={50}
      className="excel-theme"
      rowNums={true}
      getValue={({ value }) => value}
      setValue={(o, value) => ({ ...o, value })}
      treeSize={true}
    />
  );
}

export default Table;

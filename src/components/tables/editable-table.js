import React from "react";
import { ReactLargeTable } from "react-scrollable-div";
import platform from "platform-detect";
import classnames from "classnames";
import { generatePersonData } from "./random-data";
import PercentBar from "../percent-bar";
import "./light-theme.scss";

function CustomCell({ cell }) {
  console.log(typeof cell);
  const { value, type } = cell;
  if (type === "percent") {
    return <PercentBar value={value} />;
  }
  return value;
}

const NR_ROWS = 1000;

function Table() {
  return (
    <ReactLargeTable
      data={generatePersonData(NR_ROWS)}
      headerHeight={50}
      className={classnames("light-theme", { touch: platform.touch })}
      rowNums={false}
      treeSize={false}
      cellRenderer={CustomCell}
    />
  );
}

export default Table;

import React from "react";
import { ReactLargeTable } from "react-scrollable-div";
import { hasFlag } from "country-flag-icons";
import Flags from "country-flag-icons/react/3x2";
import platform from "platform-detect";
import classnames from "classnames";
import { generatePersonData } from "./random-data";
import PercentBar from "../percent-bar";
import "./light-theme.scss";

function Locale({ value }) {
  if (hasFlag(value.toUpperCase())) {
    const Flag = Flags[value.toUpperCase()];
    return <Flag style={{ width: 30, height: 20 }} />;
  }
  return value;
}

function CustomCell({ cell }) {
  const { value, type } = cell;
  if (type === "percent") {
    return <PercentBar value={value} />;
  }
  if (type === "locale") {
    return <Locale value={value} />;
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

import React from "react";
import { ReactLargeTable } from "react-scrollable-div";
import { getPersonsRows } from "./random-data";
import classnames from "classnames";
import "./simple-theme.scss";

const persons = {
  header: [
    { path: "firstName", label: "Prenom", __width: 100, resizable: true },
    { path: "lastName", label: "Nom", __width: 100, resizable: true },
    {
      path: "birthday",
      label: "Date de naissance",
      __width: 150,
      resizable: true,
    },
    {
      path: "email",
      label: "Mail",
      __width: 200,
      resizable: true,
    },
  ],
  rows: getPersonsRows(1000),
};

function CellRenderer({ cell }) {
  const { value, css = [] } = cell;
  return <div className={classnames("simple-theme-cell", ...css)}>{value}</div>;
}

function Table() {
  return (
    <ReactLargeTable
      data={persons}
      headerHeight={50}
      cellRenderer={CellRenderer}
      className="simple-theme"
    />
  );
}

export default Table;

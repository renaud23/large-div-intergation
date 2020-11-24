import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import "./percent-bar.scss";

function PercentBar({ value }) {
  const containerEl = useRef();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(
    function () {
      const { current } = containerEl;
      if (current) {
        const { width } = current.getBoundingClientRect();
        setContainerWidth(width);
      }
    },
    [containerEl]
  );
  return (
    <div className="my-percent-bar" ref={containerEl}>
      <span
        className={classnames("bar", {
          red: value <= 33,
          orange: value > 33 && value <= 66,
          green: value > 66,
        })}
        style={{ width: (value * containerWidth) / 100 }}
      ></span>
      <span className="percent">{value}</span>
    </div>
  );
}

export default PercentBar;

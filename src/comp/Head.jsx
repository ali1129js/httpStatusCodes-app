import React from "react";
import "./head.css";

const Head = ({
  changeSet,
  isSelected,
  getColor,
  bools: { is2xx, is3xx, is4xx, is5xx },
}) => (
  <div className="mt-4">
    <button
      className={is2xx ? "selected" : "select"}
      type="submit"
      value={"2xx"}
      onClick={changeSet}
    >
      Success
    </button>
    <button
      className={is3xx ? "selected" : "select"}
      type="submit"
      value={"3xx"}
      onClick={changeSet}
    >
      Redirection
    </button>
    <button
      className={is4xx ? "selected" : "select"}
      type="submit"
      value={"4xx"}
      onClick={changeSet}
    >
      Client errors
    </button>
    <button
      className={is5xx ? "selected" : "select"}
      type="submit"
      value={"5xx"}
      onClick={changeSet}
    >
      Server errors
    </button>
  </div>
);
export default Head;

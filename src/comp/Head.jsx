import React from "react";

const Head = ({ changeSet }) => (
  <div className="head">
    <input
      type="submit"
      value={"2xx"}
      onClick={(e) => changeSet(e.target.value)}
    />
    <input
      type="submit"
      value={"3xx"}
      onClick={(e) => changeSet(e.target.value)}
    />
    <input
      type="submit"
      value={"4xx"}
      onClick={(e) => changeSet(e.target.value)}
    />
    <input
      type="submit"
      value={"5xx"}
      onClick={(e) => changeSet(e.target.value)}
    />
  </div>
);
export default Head;

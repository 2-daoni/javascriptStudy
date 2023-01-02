import React from "react";
import _ from "lodash";

const Debounce = () => {
  const onChange = _.debounce(
    (e) => {
      console.log("debounce", e.target.value);
    },
    300,
    { leading: true }
  );

  return (
    <>
      <div>Debounce</div>
      <input type="text" onChange={(e) => onChange(e)} />
    </>
  );
};

export default Debounce;

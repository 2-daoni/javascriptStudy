import React from "react";
import _ from "lodash";

const Throttle = () => {
  const throttle = _.throttle((e) => {
    console.log("throttle", e.target.value);
  }, 1000);

  return (
    <>
      <div>Throttle</div>
      <input type="text" onChange={(e) => throttle(e)} />
    </>
  );
};

export default Throttle;

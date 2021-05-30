import React from "react";
import Load from "../load/load.jsx";

const withLoad = (Component) => (props) => {
  const { loadStatus } = props;
  return (
    !loadStatus ? <Load /> : <Component {...props} />
  );
};

export default withLoad;

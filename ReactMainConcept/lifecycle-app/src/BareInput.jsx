import React from "react";

function BareInput(props) {
  const { type, ...rest } = props;
  return <input {...rest} />;
}
export default BareInput;

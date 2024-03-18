import React from "react";

function KeyboardKey({ status, children }) {
  return <span className={status ? `key ${status}` : "key"}>{children}</span>;
}

export default KeyboardKey;

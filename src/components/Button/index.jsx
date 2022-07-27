import React from "react";
import "./style.button.css";

export default function Button({ title, handler, info }) {
  return (
    <button onClick={handler} data-info={info}>
      {title}
    </button>
  );
}

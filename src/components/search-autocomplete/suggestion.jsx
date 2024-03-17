import React from "react";

export const Suggestion = ({ data }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => <li key={index}>{item}</li>)
        : null}
    </ul>
  );
};

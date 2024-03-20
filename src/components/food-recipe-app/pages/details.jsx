import React from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

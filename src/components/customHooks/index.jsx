import React from "react";
import { useFetch } from "./useFetch";

export const Customhook = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      {data.map((res) => {
        return (
          <h3 key={res.id}>
            {res.id}
            {res.name}
          </h3>
        );
      })}
    </>
  );
};

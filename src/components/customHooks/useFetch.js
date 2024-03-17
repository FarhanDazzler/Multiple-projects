import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponse(data));
  });
  return response;
};

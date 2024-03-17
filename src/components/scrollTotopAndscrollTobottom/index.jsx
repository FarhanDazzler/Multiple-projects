import React, { useEffect, useRef, useState } from "react";

export const ScrollToTopOrBottom = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  const bottmRef = useRef(null);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  function handlescrolltoTop() {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }

  function handlescrolltoBottom() {
    bottmRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (loading) {
    return (
      <div>
        <h2>loading data.....Please wait....!!!</h2>
      </div>
    );
  }
  return (
    <div className="content">
      <h2>Scroll Bar</h2>
      <button
        onClick={() => {
          handlescrolltoBottom();
        }}
      >
        Scroll To Buttom
      </button>
      <ul style={{ listStyle: "none", fontFamily: "sans-serif" }}>
        {data && data.length > 0
          ? data.map((item, index) => <li key={index}>{item.title}</li>)
          : null}
      </ul>
      <button ref={bottmRef} onClick={() => handlescrolltoTop()}>
        Scroll To Top
      </button>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import "./style.css";

export const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPrecentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(false);
      const response = await fetch(getUrl);
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

  function handleScrollPrecentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPrecentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPrecentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  useEffect(() => {
    fetchData(url);
  }, [url]);

  console.log(scrollPercentage);
  return (
    <div>
      <div className="top-container">
        <div>
          <h1>Custom Scroll Indicator</h1>
          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      {data && data.length > 0
        ? data.map((item, index) => <p key={index}>{item.title}</p>)
        : null}
    </div>
  );
};

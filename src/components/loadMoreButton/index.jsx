import React, { useEffect, useState } from "react";
import "./style.css";

export const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(false);
      const response = await fetch(
        `https://dummyjson.com/products?limit-10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setProduct((prev) => [...prev, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  if (loading) {
    return (
      <div>
        <h2>loading data.....Please wait....!!!</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="product-container">
        {product && product.length
          ? product.map((item) => (
              <div className="product">
                <img src={item.thumbnail} key={item.id} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          className="button-container"
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ProductTile } from "../components/product-tile";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function FetchListOfProduct() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    FetchListOfProduct();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <ClipLoader
            color={"red"}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : null}

      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
        {products && products.length
          ? products.map((productItem) => <ProductTile product={productItem} />)
          : null}
      </div>
    </div>
  );
};

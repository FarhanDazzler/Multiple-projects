import React, { useEffect, useState } from "react";

export const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setloading] = useState(false);

  const FetchImage = async () => {
    try {
      setloading(true);
      const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=5`);
      const data = await res.json();
      console.log(data[0].download_url);
      if (data) {
        setloading(false);
        setImages(data);
      }
    } catch (error) {
      console.error(Error, error);
    }
  };

  useEffect(() => {
    FetchImage();
  }, [activeIndex]);
  const handleClickNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handleClickPrevious = () => {
    setActiveIndex(!activeIndex ? images.length - 1 : activeIndex - 1);
  };
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center my-11 text-gray-600 font-serif">
          loading..Please wait...
        </div>
      ) : (
        <div className="contianer flex justify-center align items-center my-11">
          <button
            onClick={handleClickPrevious}
            className="btn bg-teal-600 text-white hover:bg-emerald-300 py-2 px-2 mx-5 rounded"
          >
            Previous
          </button>
          {images.map((item, index) => (
            <img
              key={index}
              // className="rounded-lg container w-full h-auto flex items-center justify-center"
              className={
                index === activeIndex
                  ? "rounded-lg container w-full h-auto flex items-center justify-center"
                  : "hidden"
              }
              src={item.download_url}
              alt={item.download_url}
            />
          ))}
          {/* <img
          className="rounded-lg"
          src="https://picsum.photos/200/500
        "
          alt=""
        /> */}
          <button
            onClick={handleClickNext}
            className="btn bg-teal-600 text-white hover:bg-emerald-300 py-2 px-2 mx-5 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

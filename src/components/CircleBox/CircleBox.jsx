import React, { useState } from "react";

export const CircleBox = () => {
  const [circles, setCircles] = useState([]);
  const [colouredCircle, setColouredCircles] = useState([]);

  const handleAddCircles = () => {
    setCircles([...circles, circles.length]);
  };

  const handleColouredCircles = (index) => {
    if (colouredCircle.includes(index)) {
      setColouredCircles(colouredCircle.filter((item) => item !== index));
    } else setColouredCircles([...colouredCircle, index]);
  };
  return (
    <div>
      <button
        onClick={() => handleAddCircles()}
        style={{
          margin: "10px 10px",
          backgroundColor: "blue",
          padding: "10px",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Add Circle
      </button>

      <p>Circle Count :{circles.length}</p>
      <p>ColouredCircle Count :{colouredCircle.length}</p>

      {/* Circles */}
      {circles.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "15px 10px",
            border: "1px solid black",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: colouredCircle.includes(index) ? "gray" : "white",
          }}
          onClick={() => handleColouredCircles(index)}
        ></div>
      ))}
    </div>
  );
};

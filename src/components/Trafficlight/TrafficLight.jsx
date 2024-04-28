import React, { useEffect, useState } from "react";

let colors = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

export const TrafficLight = () => {
  const [active, setActive] = useState(colors.red);

  useEffect(() => {
    switch (active) {
      case colors.red:
        setTimeout(() => {
          setActive(colors.yellow);
        }, 500);
        break;
      case colors.green:
        setTimeout(() => {
          setActive(colors.red);
        }, 1000);
        break;
      case colors.yellow:
        setTimeout(() => {
          setActive(colors.green);
        }, 1000);
    }
  }, [active]);
  return (
    <div
      style={{
        marginTop: "10px",
        marginLeft: "5px",
        width: "fit-content",
        height: "600px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "10px 20px",
      }}
    >
      <div
        className="red"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          borderRadius: "50%",
          textAlign: "center",
          fontSize: "40px",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...(colors.red !== active ? { opacity: 0.5 } : null),
        }}
      >
        A
      </div>
      <div
        className="green"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "green",
          borderRadius: "50%",
          textAlign: "center",
          fontSize: "40px",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...(colors.green !== active ? { opacity: 0.5 } : null),
        }}
      >
        B
      </div>
      <div
        className="yellow"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "yellow",
          borderRadius: "50%",
          textAlign: "center",

          fontSize: "40px",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...(colors.yellow !== active ? { opacity: 0.5 } : null),
        }}
      >
        C
      </div>
    </div>
  );
};

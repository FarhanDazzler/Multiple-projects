import React, { useEffect, useRef, useState } from "react";

export const ScrollAction = () => {
  const [scrollAction, setScrollAction] = useState("downward");
  let prevValue = useRef();

  const handleScroll = () => {
    prevValue.current > window.scrollY
      ? setScrollAction("UP")
      : setScrollAction("Downword");
    prevValue.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      <div className="box">this is box</div>
      {scrollAction}
      <div className="box">this is box</div>
      <div className="box">this is box</div>
    </div>
  );
};

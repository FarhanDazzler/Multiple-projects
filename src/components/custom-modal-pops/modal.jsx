import React from "react";
import "./style.css";

export const Modal = ({ onClose }) => {
  return (
    <div id={"Modal"}>
      <div className="content">
        <span onClick={onClose} className="close-modal">
          &times;
        </span>
        <div className="header">
          <h1>this is header</h1>
        </div>
        <div className="body">
          <p>
            <h3>This is main Body</h3>
          </p>
        </div>
        <div className="footer">
          <h2>this is footer</h2>
        </div>
      </div>
    </div>
  );
};

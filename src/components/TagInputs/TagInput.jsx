import React, { useState } from "react";

export const TagInput = () => {
  const [textInput, setTextInput] = useState("");
  const [skills, setSkills] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (skills.length <= 5) {
        setSkills([...skills, textInput]);
        setTextInput("");
      } else {
        alert("Your cant more than 5 skills");
      }
    }
  };

  const handleRemove = (index) => {
    const removeItem = skills.filter((item, i) => index !== i);
    setSkills(removeItem);
  };

  return (
    <div className=" bg-cyan-300 h-screen w-full flex justify-center ">
      <div className="box flex flex-col justify-start items-center bg-gray-200 px-2 py-2 text-gray-800 border rounded shadow-lg w-80 h-80 place-self-center   ">
        <h5 className="text-2xl font-bold text-gray-600 font-mono">Skills</h5>

        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-10 px-2 py-2 text-gray-600 border rounded shadow-lg focus:outline-none m-4"
          placeholder="Enter the skills you want to add"
        />
        <div className="skill-box grid grid-cols-3 gap-2">
          {skills?.map((tag, index) => (
            <div
              className="tag flex gap-1 border-2 border-gray-300 px-1 py-1 rounded shadow-md cursor-pointer self-start "
              key={index}
            >
              <div
                className="removeBtn bg-black text-white px-2 py-1 rounded shadow-md hover:bg-gray-400 cursor-pointer "
                onClick={() => handleRemove(index)}
              >
                X
              </div>
              <div className="skill-set py-1">{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

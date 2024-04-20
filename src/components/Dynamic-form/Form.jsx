import React, { useState } from "react";
import "./form.css";

export const FormDynamic = () => {
  const [formData, setFormData] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleAddMore = () => {
    const object = { name: "", email: "", password: "" };

    setFormData([...formData, object]);
  };
  const handleOnChange = (event, index) => {
    let data = [...formData];
    console.log(data);
    data[index][event.target.name] = event.target.value;
    setFormData(data);
  };

  const handleRemove = (e, index) => {
    const data = [...formData];
    data.splice(index, 1);
    setFormData(data);
  };
  return (
    <div className="container flex flex-col items-center justify-between bg-white rounded px-8 py-4 space-y-4">
      <h1 className="font-sans text-2xl font-bold leading-tight text-gray-600">
        Dynamic Form
      </h1>
      <form
        onSubmit={submit}
        className="flex flex-col items-center justify-between bg-white shadow-md rounded px-8 py-8 space-y-4 "
      >
        {formData.map((data, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={(e) => handleOnChange(e, index)}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={(e) => handleOnChange(e, index)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={(e) => handleOnChange(e, index)}
              />
              <button
                onClick={submit}
                className="btn font-sans text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-300 disabled:opacity-50 px-3 py-1 border rounded leading-tight"
                type="submit"
              >
                Submit
              </button>
              <button
                onClick={handleAddMore}
                className="btn font-sans text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-300 disabled:opacity-50 px-3 py-1 border rounded leading-tight"
              >
                Add Form
              </button>
              <button
                onClick={(e) => handleRemove(e, index)}
                className="btn font-sans text-white bg-red-500 hover:bg-red-700 focus:ring-blue-300 disabled:opacity-50 px-3 py-1 border rounded leading-tight"
              >
                Remove
              </button>
            </div>
          );
        })}
      </form>
    </div>
  );
};

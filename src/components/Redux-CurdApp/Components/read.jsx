import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers, deleteUsers } from "../features/userDetailsSlices";
import { Modal } from "./customModals";
import { Link } from "react-router-dom";

export const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);
  const [id, setId] = useState(null);
  const [popUp, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(showUsers());
    console.log("users", users);
  }, []);

  if (loading)
    return (
      <h1 className="flex text-center font-bold justify-center top-5">
        Loading...
      </h1>
    );

  return (
    <div>
      {popUp && <Modal id={id} setShowPopup={setShowPopup} popUp={popUp} />}
      {users &&
        users.map((user, index) => (
          <div
            key={index}
            className="max-w-md mx-auto bg-gray rounded-xl shadow-md overflow-hidden md:max-w-2xl "
          >
            <div className="md:flex gap-10">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  <span> {user["first-name"]} </span>
                  {user["last-name"]}
                </div>
                <p className="mt-2 text-gray-500">{user.email}</p>

                <button
                  className="bg-blue-300 text-white hover:bg-blue-800 font-bold uppercase text-sm shadow hover:shadow-lg outline-none focus:outline-none px-5 "
                  onClick={() => [setId(user.id), setShowPopup(true)]}
                >
                  View
                </button>

                <Link
                  to={`/edit/${user.id}`}
                  className="bg-blue-300 text-white hover:bg-blue-800 font-bold uppercase text-sm shadow hover:shadow-lg outline-none focus:outline-none px-5 "
                >
                  Edit
                </Link>
                <Link
                  className="bg-red-300 text-white hover:bg-red-800 font-bold uppercase text-sm shadow hover:shadow-lg outline-none focus:outline-none px-5"
                  onClick={() => dispatch(deleteUsers(user.id))}
                >
                  {/* <button className="bg-red-300 text-white hover:bg-red-800 font-bold uppercase text-sm shadow hover:shadow-lg outline-none focus:outline-none px-5" onClick={() => dispatch(deleteUsers(user.id))}>  */}
                  Delete
                  {/* </button> */}
                </Link>
                {/* <p className="mt-2 text-gray-500">{user["postal-code"]}</p>
                <p className="mt-2 text-gray-500">{user["street-address"]}</p> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

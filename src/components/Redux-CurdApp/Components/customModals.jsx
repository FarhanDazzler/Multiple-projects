import React from "react";
import { useSelector } from "react-redux";

export const Modal = ({ id, setShowPopup, popUp }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUsers = allusers.filter((ele) => ele.id === id);
  console.log("singleuser", singleUsers);
  // if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          // onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                {/* Icon or Image for the modal */}
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  More Details
                </h3>
                <div className="mt-2">
                  <h2 className="text-gray-500 text-center-100 hover-100">
                    {singleUsers[0]["first-name"]}{" "}
                  </h2>
                  <h2 className="text-gray-500 text-center-100 hover-100">
                    {" "}
                    {singleUsers[0]["last-name"]}{" "}
                  </h2>
                  <h2 className="text-gray-500 text-center-100 hover-100">
                    {" "}
                    {singleUsers[0]["postal-code"]}{" "}
                  </h2>
                  <h2 className="text-gray-500 text-center-100 hover-100">
                    {" "}
                    {singleUsers[0]["city"]}{" "}
                  </h2>
                  <h2 className="text-cyan-300 text-center-100 hover-100">
                    {" "}
                    {singleUsers[0]["street-addres"]}{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

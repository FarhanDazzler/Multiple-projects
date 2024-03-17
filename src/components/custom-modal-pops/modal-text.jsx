import React, { useState } from "react";
import { Modal } from "./modal";

export const ModalPopUps = () => {
  const [showModal, setShowModal] = useState(null);

  function handleModalPopups() {
    setShowModal(!showModal);
  }
  function handleClose() {
    setShowModal(false);
  }
  return (
    <div>
      <button onClick={handleModalPopups}>Open Modal PopUp</button>
      {showModal && <Modal onClose={handleClose} />}
    </div>
  );
};

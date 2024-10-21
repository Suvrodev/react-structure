import React, { useContext, useState } from "react";
import ModalPage from "../ModalPage/ModalPage";
import { AuthContext } from "../../Provider/AuthProvider";

const ModalMainContent = () => {
  const { modalRef } = useContext(AuthContext);

  const handleShowModal = () => {
    modalRef.current.showModal();
  };
  return (
    <div>
      {/* <button className="btn btn-primary" onClick={handleShowModal}>
        Press Button
      </button> */}
      <ModalPage />
    </div>
  );
};

export default ModalMainContent;

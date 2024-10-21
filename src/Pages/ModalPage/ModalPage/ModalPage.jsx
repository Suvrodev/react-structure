import React, { useRef } from "react";
import ModalContent from "../ModalContent/ModalContent";

const ModalPage = () => {
  const modalRef = useRef(null);
  const handleModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <div className="w-full h-[100vh] p-10">
      <dialog ref={modalRef} className="modal">
        {/* Modal Box Start */}
        <div className="modal-box relative bg-white p-0">
          <div className="bg-blue-400 w-full h-[60px] flex items-center justify-center sticky top-0">
            <h1 className="text-white font-bold text-2xl  ">Title</h1>
            <form method="dialog" className="absolute top-0 right-0 ">
              <button className="btn bg-red-500 hover:bg-red-600 border-0 text-white">
                X
              </button>
            </form>
          </div>
          <div>
            <ModalContent />
          </div>
        </div>
        {/* Modal Box End */}

        {/* It's for press outside of modal start  */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        {/* It's for press outside of modal end  */}
      </dialog>

      {/* Open Modal Page start */}
      <div className="w-full h-[450px] bg-white flex items-center justify-center">
        <button className="btn btn-primary" onClick={handleModal}>
          Show Modal
        </button>
      </div>
      {/* Open Modal Page close */}
    </div>
  );
};

export default ModalPage;

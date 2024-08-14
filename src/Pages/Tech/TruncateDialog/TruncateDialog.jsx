import React, { useRef } from "react";

const TruncateDialog = () => {
  const modalRef = useRef(null);
  const vissibleModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const fullText =
    " This is a long piece of text that will be truncated with an ellipsis if it overflows the container.";
  return (
    <div className="text-white">
      <dialog id="my_modal_3" ref={modalRef} className="modal w-full ">
        <div className="modal-box p-0 w-full max-w-5xl ">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white z-10">
              ✕
            </button>
          </form>
          <div className="flex items-center justify-center w-full h-[150px] p-5">
            {fullText}
          </div>
        </div>
      </dialog>

      <h1 className="my-10 text-xl font-bold">Truncate and dialog Box</h1>
      <div
        className="truncate w-48 border py-2 px-5 rounded-md"
        onClick={vissibleModal}
      >
        {fullText}
      </div>
    </div>
  );
};

export default TruncateDialog;

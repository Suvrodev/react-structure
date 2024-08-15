import React, { useRef } from "react";
import "./TruncateDialog.css";
import DialogBox from "./DialogBox";

const TruncateDialog = () => {
  const modalRef1 = useRef(null);
  const modalRef2 = useRef(null);

  const vissibleModal1 = () => {
    if (modalRef1.current) {
      modalRef1.current.showModal();
    }
  };

  const vissibleModal2 = () => {
    if (modalRef2.current) {
      modalRef2.current.showModal();
    }
  };

  const fullText =
    " This is a long piece of text that will be truncated with an ellipsis if it overflows the container.";

  const fullText2 = ` অবাক চাঁদের আলোয় দেখোভেসে যায় আমাদের পৃথিবীআড়াল হতে দেখেছি
            তোমারনিষ্পাপ মুখখানিঅবাক চাঁদের আলোয় দেখোভেসে যায় আমাদের পৃথিবীআড়াল
            হতে দেখেছি তোমারনিষ্পাপ মুখখানিডুবেছি আমি তোমার চোখের অনন্ত
            মায়ায়বুঝিনি কভু সেই মায়াতো আমার তরে নয়ভুলগুলো জমিয়ে রেখে বুকের
            মণিকোঠায়আপন মনের আড়াল থেকেভালবাসবো তোমায়ভালবাসবো তোমায়তোমার
            চিরচেনা পথের ঐ সীমা ছাড়িয়েএই প্রেম বুকে ধরে আমি হয়তো যাবো
            হারিয়েচোখের গভীরে তবু মিছে ইচ্ছে জড়িয়েএকবার শুধু একটিবার হাতটা
            দাও বাড়িয়েডাকবেনা তুমি আমায় জানি কোনোদিনতবু প্রার্থনা তোমার জন্য
            হবেনা মলিনহবেনা মলিন...ডুবেছি আমি তোমার চোখেরঅনন্ত মায়ায়বুঝিনি কভু
            সেই মায়াতো আমার তরে নয়ভুলগুলো জমিয়ে রেখে বুকের মণিকোঠায়আপন মনের
            আড়াল থেকেভালবাসবো তোমায়ভালবাসবো তোমায়হাজার বছর এমনি করেআকাশের
            চাঁদটা আলো দেবেআমার পাশে ক্লান্ত ছায়াআজীবন রয়ে যাবেতবু এই অসহায়
            আমিভালবাসবো তোমাকেশুধু যে তোমাকেভালবাসবো তোমাকে`;
  return (
    <div className="text-white">
      {/* dialog-1 start */}
      <dialog id="my_modal_3" ref={modalRef1} className="modal w-full  ">
        <div className="modal-box p-0 w-full max-w-5xl h-full ">
          <form method="dialog">
            {/* dialog এর পরে space থাকা যাবে না */}
            <button className="btn btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white z-10">
              ✕
            </button>
          </form>

          <div className="flex items-center justify-center h-full">
            <DialogBox text={fullText} />
          </div>
        </div>
      </dialog>
      {/* dialog-1 end */}

      {/* dialog-2 start */}
      <dialog id="my_modal_3" ref={modalRef2} className="modal w-full  ">
        <div className="modal-box p-0 w-full max-w-5xl h-full ">
          <form method="dialog">
            {/* dialog এর পরে space থাকা যাবে না */}
            <button className="btn btn-circle btn-ghost absolute right-2 top-2 bg-red-600 text-white z-10">
              ✕
            </button>
          </form>

          <div className="flex items-center justify-center h-full">
            <DialogBox text={fullText2} />
          </div>
        </div>
      </dialog>
      {/* dialog-2 end */}

      <h1 className="my-10 text-xl font-bold">Truncate and dialog Box</h1>
      <div className="flex gap-4">
        <div
          className="truncate w-48 border py-2 px-5 rounded-md"
          onClick={vissibleModal1}
        >
          {fullText}
        </div>

        <div
          className="truncateClass1 w-48 border py-2 px-5 rounded-md"
          onClick={vissibleModal2}
        >
          {fullText2}
        </div>
      </div>
    </div>
  );
};

export default TruncateDialog;

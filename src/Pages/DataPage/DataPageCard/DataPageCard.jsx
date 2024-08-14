import React from "react";
import { goLink } from "../../../assets/JSFile/goLink";

const DataPageCard = ({ data }) => {
  //   console.log(data);
  const { id, albumId, thumbnailUrl, title, url } = data;
  return (
    <div className="border rounded-md h-[380px]">
      <div className="flex justify-center my-2 ">
        <img
          src={thumbnailUrl}
          alt=""
          className="w-[150px] h-[150px] rounded-md"
        />
      </div>
      <h1 className="my-4 text-center font-bold">{title}</h1>
      <div className="flex items-center justify-around">
        <p>Id: {id} </p>
        <p>Album Id: {albumId}</p>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          className="btn btn-lg btn-success text-white"
          onClick={() => goLink(url)}
        >
          Url
        </button>
      </div>
    </div>
  );
};

export default DataPageCard;

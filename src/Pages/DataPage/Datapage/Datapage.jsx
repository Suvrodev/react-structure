import axios from "axios";
import React, { useEffect, useState } from "react";
import DataPageCard from "../DataPageCard/DataPageCard";
import SkelitonCard from "../DataPageCard/SkelitonCard";

const Datapage = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const [startPage, setStartPage] = useState(0);
  const [limitPage, setLimitPage] = useState(9);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_start=${startPage}&_limit=${limitPage}`
      )
      .then((res) => {
        setDatas(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SkelitonCard />
        <SkelitonCard />
        <SkelitonCard />
        <SkelitonCard />
        <SkelitonCard />
        <SkelitonCard />
      </div>
    );
  }
  //   console.log("Come Data: ", datas);
  return (
    <div className="text-white">
      <h1 className="my-10 text-xl font-bold text-white">Data Page</h1>
      <div>
        {datas && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {datas.map((data, idx) => (
              <DataPageCard key={idx} data={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Datapage;

/**
 * urls: https://github.com/typicode/jsonplaceholder/issues/65
 */

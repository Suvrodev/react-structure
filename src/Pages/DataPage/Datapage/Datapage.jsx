import axios from "axios";
import React, { useEffect, useState } from "react";
import DataPageCard from "../DataPageCard/DataPageCard";
import SkelitonCard from "../DataPageCard/SkelitonCard";
import { useInView } from "react-intersection-observer";
import titleAndGoUp from "../../../JSFile/titleAndGoUp";

const Datapage = () => {
  titleAndGoUp("Data");
  const { ref, inView } = useInView({
    threshold: 0,
  });
  //   console.log("Inview: ", inView);

  const [startPage, setStartPage] = useState(0);
  const [limitPage, setLimitPage] = useState(9);

  useEffect(() => {
    if (inView) {
      setStartPage((startPage) => startPage + 9);
      setLimitPage((limitPage) => limitPage + 9);
      console.log("Start: ", startPage);
      console.log("Limit: ", limitPage);
    }
  }, [inView]);

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_start=${startPage}&_limit=${limitPage}`
      )
      .then((res) => {
        const comeData = res.data;
        const newData = [...datas, ...comeData];
        setDatas(newData);
        setLoading(false);
      });
  }, [startPage]);
  //   console.log("Data: ", datas);
  //   console.log("Data Length: ", datas.length);

  /**
   * Link Preview Start
   */
  useEffect(() => {
    // Set the document title
    document.title = "Data Page";

    // Set Open Graph meta tags
    const metaTags = {
      title: "New Title-God",
      description: "New Description",
      image: "https://i.ibb.co.com/dsThXBx/frontend-development-tools.png",
      url: "https://heroic-crepe-2ae4c9.netlify.app/data",
    };

    // Function to set meta tags
    const setMetaTags = (metaTags) => {
      document.querySelector('meta[property="og:title"]').content =
        metaTags.title;
      document.querySelector('meta[property="og:description"]').content =
        metaTags.description;
      document.querySelector('meta[property="og:image"]').content =
        metaTags.image;
      document.querySelector('meta[property="og:url"]').content = metaTags.url;
    };

    setMetaTags(metaTags);
  }, []);
  /**
   * Link Preview Endd
   */

  if (datas.length == 0) {
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
      <h1 className="my-10 text-xl font-bold text-white">Data Page (Okay)</h1>
      <div>
        {datas.length > 0 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {datas.map((data, idx) => (
                <DataPageCard key={idx} data={data} />
              ))}
            </div>
            <div className="text-center mt-4" ref={ref}>
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Datapage;

/**
 * urls: https://github.com/typicode/jsonplaceholder/issues/65
 *
 */

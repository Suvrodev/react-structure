import React, { useEffect, useRef, useState } from "react";
import "./SideBarr.css";
import axios from "axios";
import SkelitonCard from "../../DataPage/DataPageCard/SkelitonCard";
import DataPageCard from "../../DataPage/DataPageCard/DataPageCard";

const SideBarr = () => {
  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, cum quam sapiente consequuntur consequatur reiciendis quidem. Temporibus animi, alias quis recusandae beatae similique soluta iusto tenetur eius totam quo voluptatibus quas, nemo commodi, omnis modi earum nam molestias vel sapiente! Magnam corporis dicta impedit nesciunt, delectus libero ea molestias, fugiat numquam veritatis omnis beatae veniam in rerum aut laborum animi ad dolore itaque culpa? Commodi voluptatum possimus deserunt quae, molestias assumenda, amet, molestiae deleniti consequatur eos incidunt ex. Cumque tempore sed atque facilis eaque, alias, saepe culpa porro at architecto ab aliquid sequi hic impedit. Iure aspernatur voluptas a laboriosam, possimus impedit, rem ipsa tenetur odio assumenda facere corporis quasi deleniti eligendi provident eum, odit soluta autem maiores quaerat dolorem. Ducimus repellat ullam corrupti, nobis error minima unde ratione, tenetur assumenda, sit fugiat voluptatibus ipsa. Perferendis molestiae commodi dolores architecto temporibus rem, laudantium error mollitia quidem porro vero ducimus sapiente quod cupiditate labore minima! Laudantium tempora quaerat sapiente esse officia. Nemo culpa perferendis nobis modi sunt deserunt! Voluptas excepturi eaque deleniti, repudiandae vel, eveniet nesciunt architecto cum corporis libero ea error, eligendi praesentium? Alias delectus, cum cumque tempore vel magni velit dolorem magnam placeat porro, facilis officia. Nulla eaque ducimus quaerat accusantium quia repudiandae. Quasi fugiat minima eum voluptatibus nisi debitis dignissimos sed commodi molestiae beatae modi eaque fuga, et adipisci deserunt reiciendis voluptate sint ullam culpa perferendis nulla vel. Amet aperiam, asperiores, accusamus dolor, quo voluptates doloribus eligendi quaerat maiores impedit quasi quod harum odio. Quasi ducimus deleniti, accusantium libero quo odio fugit minus repudiandae laborum! Qui debitis, sapiente fugit beatae culpa quidem officiis tempora dolores nihil itaque, fugiat adipisci quam consectetur quod voluptatibus autem necessitatibus quis amet doloremque totam praesentium magni rerum earum quaerat! Dolores officia doloribus eius aliquid, tempore soluta assumenda explicabo quam illum quibusdam. Error, laborum perferendis. Dolorum porro magnam voluptatum voluptates nisi, quos perferendis mollitia ut autem quis ipsa iure similique tenetur, error nemo itaque aliquam vitae nam quod doloribus eligendi consequuntur. Numquam esse accusantium odio libero tenetur fugiat ipsam, facilis nemo aliquam impedit, est ea aliquid dolores rerum perspiciatis nobis commodi quisquam quia, nesciunt maxime! Officiis, maxime ad, vero veniam eum minus possimus esse dignissimos illum omnis iusto incidunt rerum nisi ipsam, accusantium eius numquam facere inventore earum dolore. Aperiam ea, molestiae nostrum unde quidem, suscipit praesentium distinctio culpa, quibusdam tempora soluta libero! Ad nemo quaerat nesciunt distinctio quo architecto, non aperiam aliquid consequuntur temporibus libero quae inventore quibusdam exercitationem itaque ducimus fugiat fuga tempore? Totam perferendis vel tempora vitae officia ut quis inventore doloremque sed. Molestias vitae amet eum debitis eligendi corrupti dolores maiores ipsa distinctio illum ratione quaerat velit accusamus nostrum voluptates inventore, repellat neque dignissimos. Atque expedita blanditiis, quaerat hic iure labore vel, vero architecto veniam nobis voluptas a vitae! Iusto delectus eaque modi facere eum, iure dolor sit doloremque dolorem quisquam, placeat ex rem commodi! Voluptates ipsum in, necessitatibus consequatur possimus dicta repellendus. Eveniet sunt libero, veniam excepturi, atque sequi tempore rem quam harum culpa voluptates ex molestias perferendis repudiandae?";

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100`)
      .then((res) => {
        const comeData = res.data;
        const newData = [...datas, ...comeData];
        setDatas(newData);
        setLoading(false);
      });
  }, []);
  console.log("Data: ", datas);
  console.log("Data Length: ", datas.length);

  //   Js code
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollByCard = (direction) => {
    // if (containerRef.current) {
    //   const cardWidth = containerRef.current.querySelector(
    //     ".card-wrapper > div"
    //   ).offsetWidth;
    //   containerRef.current.scrollLeft += direction * cardWidth;
    // }
    if (containerRef.current) {
      const cardWidth = containerRef.current.querySelector(
        ".card-wrapper > div"
      ).offsetWidth;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + direction * cardWidth,
        behavior: "smooth", // Enables smooth scrolling
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 0.5; // Reduced multiplication factor for smoother scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  /**
   * If No data
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
  return (
    <div className="text-white">
      <div className="">
        <div>
          <h1 className="text-xl font-bold my-10">Sidebar</h1>
          <div className="w-6/12 h-[450px] border p-5 rounded-md text-justify overflow-y-scroll custom-scrollbar">
            {text}
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 rounded-r"
          onClick={() => scrollByCard(-1)}
        >
          -
        </button>

        <div
          className="scroll-container"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <h1 className="text-xl font-bold my-10">
            Scroll Right to left and Left to right
          </h1>
          {datas.length > 0 && (
            <div className="card-wrapper">
              {datas.map((data, index) => (
                <DataPageCard key={index} data={data} />
              ))}
            </div>
          )}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 rounded-l"
          onClick={() => scrollByCard(1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SideBarr;

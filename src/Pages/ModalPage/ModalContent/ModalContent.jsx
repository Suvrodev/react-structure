import React, { useRef } from "react";

const ModalContent = () => {
  const closeRef = useRef(null);
  const handleCross = () => {
    console.log("Handle Cross");
    alert("Will Close Dialog");
    closeRef.current.click();
  };
  return (
    <div className="text-black ">
      <h1 className="text-xl font-bold text-center w-8/12 mx-auto bg-blue-500 p-4 rounded-md text-white">
        Suvrodeb
      </h1>

      <p className=" overflow-scroll bg-green-600 mt-2 p-2 rounded-md text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, ab.
        Facilis voluptatibus odio dolorum modi vel rerum, voluptatum quos
        delectus totam molestiae blanditiis dignissimos illum animi adipisci,
        reprehenderit suscipit dolorem, impedit ipsum porro? Quos maiores quae
        tempora, debitis vel quisquam deserunt, dolore, consequatur suscipit
        animi perspiciatis praesentium natus modi qui nobis fuga cum enim omnis
        vitae similique in? Consequuntur, officiis nisi nesciunt praesentium
        facere unde nam aliquid et enim totam corrupti quae saepe ducimus maxime
        sapiente perspiciatis deserunt rerum dignissimos autem ipsam tempora
        fugit incidunt. Repellat expedita distinctio harum vero dolore debitis
        iusto repellendus, sequi labore nam inventore fuga assumenda? animi
        perspiciatis praesentium natus modi qui nobis fuga cum enim omnis vitae
        similique in? Consequuntur, officiis nisi nesciunt praesentium facere
        unde nam aliquid et enim totam corrupti quae saepe ducimus maxime
        sapiente perspiciatis deserunt rerum dignissimos autem ipsam tempora
        fugit incidunt. Repellat expedita distinctio harum vero dolore debitis
        iusto repellendus, sequi labore nam inventore fuga assumenda? animi
        perspiciatis praesentium natus modi qui nobis fuga cum enim omnis vitae
        similique in? Consequuntur, officiis nisi nesciunt praesentium facere
        unde nam aliquid et enim totam corrupti quae saepe ducimus maxime
        sapiente perspiciatis deserunt rerum dignissimos autem ipsam tempora
        fugit incidunt. Repellat expedita distinctio harum vero dolore debitis
        iusto repellendus, sequi labore nam inventore fuga assumenda?
      </p>

      <div className="flex justify-center bg-orange-500 sticky bottom-0 -left-10 p-5">
        <button className="btn btn-primary" onClick={handleCross}>
          Check Close
        </button>
      </div>

      <form method="dialog" className=" justify-center my-4  h-[1px] hidden">
        <button className="btn " ref={closeRef}>
          Close
        </button>
      </form>
    </div>
  );
};

export default ModalContent;

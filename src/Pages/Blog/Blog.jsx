import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";

const Blog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div>
      <h1 className="text-xl text-white my-10 font-bold">Blog</h1>

      <div>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          onChange={(newContent) => setContent(newContent)}
          className="text-black bg-white"
        />
      </div>

      <div className="bg-white w-10/12 p-5 rounded-md my-10 mx-auto text-black">
        {content}
      </div>

      <div className="bg-white w-10/12 p-5 rounded-md my-10 mx-auto text-black">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Blog;

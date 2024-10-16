import React, { useMemo, useRef, useState } from "react";
import JoditEditor, { Jodit } from "jodit-react";
import titleAndGoUp from "../../JSFile/titleAndGoUp";

const Blog = () => {
  titleAndGoUp("Blog");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  // const editor = Jodit.make("#editor", {
  //   autofocus: true,
  //   spellcheck: true,
  // });

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
          id="editor"
        />
      </div>

      {content && (
        <div className="bg-white w-full p-5 rounded-md my-10 mx-auto text-black">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}

      {content && (
        <div className="bg-white w-full p-5 rounded-md my-10 mx-auto text-black">
          {content}
        </div>
      )}
    </div>
  );
};

export default Blog;

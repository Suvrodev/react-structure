import axios from "axios";
import React, { useEffect, useState } from "react";
import Video from "./Video/Video";

const YoutubeVideo = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("ytvideo.json").then((res) => {
      setVideos(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="sklLoading flex items-center justify-center">
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="text-white my-10">
      <h1 className="font-bold text-2xl my-6 ">Youtube Video</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-0">
        {videos.map((video, idx) => (
          <Video video={video} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideo;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Video from "./Video/Video";

const YoutubeVideo = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dep, setDep] = useState(true);
  useEffect(() => {
    axios.get("ytvideo.json").then((res) => {
      setVideos(res.data);
      setLoading(false);
    });
  }, [dep]);

  const [banglaSong, setBanglaSong] = useState([]);
  const [hindiSong, setHindiSong] = useState([]);
  useEffect(() => {
    const banglaSongs = videos.filter((video) => video.type == "Bangla");
    const hindiSongs = videos.filter((video) => video.type == "Hindi");
    setBanglaSong(banglaSongs);
    setHindiSong(hindiSongs);
  }, [dep]);

  return (
    <div className="text-white my-10">
      <h1 className="font-bold text-2xl my-6 ">Youtube Video</h1>

      <div
        className="collapse collapse-arrow bg-base-200"
        onClick={() => setDep(!dep)}
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Bangla</div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-0">
            {banglaSong.map((video, idx) => (
              <Video video={video} key={idx} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="collapse collapse-arrow bg-base-200 mt-4"
        onClick={() => setDep(!dep)}
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Hindi</div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-0">
            {hindiSong.map((video, idx) => (
              <Video video={video} key={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-0">
        {videos.map((video, idx) => (
          <Video video={video} key={idx} />
        ))}
      </div> */}
    </div>
  );
};

export default YoutubeVideo;

/**
 * urls: https://daisyui.com/components/collapse/
 * urls: https://daisyui.com/components/accordion/
 */

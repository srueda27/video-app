import React, { useEffect, useState } from "react";

import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit('archery');
  }, []);

  const onSearchSubmit = async videoSearch => {
    const response = await youtube.get('/search', {
      params: { q: videoSearch }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar inputLabel='Video Search: ' onVideoSearch={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={videos}
              //(video) => setSelectedVideo(video) exactly the same as 
              onSelectedVideo={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div >
  );
}


export default App;

import React, { useEffect, useState } from "react";
import useVideos from "../hooks/useVideos";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const [videos, search] = useVideos('archery'); //custom hook

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]); //when you want useEffect to be triggered
                //in this case, everytime the list of videos change
  
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar inputLabel='Video Search: ' onVideoSearch={search} />
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

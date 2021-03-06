import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectedVideo }) => {
  const videosList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onSelectedVideo={onSelectedVideo} />
  });

  return (
    <div className="ui relaxed divided list segment container">
      {videosList}
    </div>
  );
}

export default VideoList
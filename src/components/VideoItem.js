import '../styles/VideoItem.css';

import React from "react";

const VideoItem = ({ video, onSelectedVideo }) => {
  return (
    <div onClick={() => onSelectedVideo(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="ui content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem
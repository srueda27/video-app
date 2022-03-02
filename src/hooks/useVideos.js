import { useEffect, useState } from "react";

import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos(defaultSearchTerm);
  }, []);

  const searchVideos = async videoSearch => {
    const response = await youtube.get('/search', {
      params: { q: videoSearch }
    });

    setVideos(response.data.items);
  }

  //should be the list of videos and an function to get more videos
  return [videos, searchVideos]; //can be an object or an array [] {}, same thing
}

export default useVideos;

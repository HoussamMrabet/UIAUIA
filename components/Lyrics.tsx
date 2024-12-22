'use client'

import LyricsSection from "./LyricsSection"
import { useEffect, useState } from "react";

const Lyrics = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the music is playing

  useEffect(() => {
    
  }, [isPlaying])

  // Callback function to update isPlaying state
  const handlePlayPauseToggle = (state) => {
    setIsPlaying(state);
  };

  return (
    <div>
      <h1>Sing with me</h1>
      <div className="flex flex-col container justify-center">
        <div className="flex m-2 justify-center">
          {/* Conditionally render GIFs based on isPlaying */}
          {isPlaying && (
            <>
              <img className="gif-imgs" src="https://media1.tenor.com/m/BNby1AnlynMAAAAd/spinning-spining-cat.gif" />
            </>
          )}
          <img className="gif-imgs" src="https://media.tenor.com/w_5Q79dNCh8AAAAj/cat-vibe.gif" />
          {isPlaying && (
            <>
              <img className="gif-imgs" src="https://media1.tenor.com/m/BNby1AnlynMAAAAd/spinning-spining-cat.gif" />
            </>
          )}
        </div>
        <div className="m-2">
          <h4>Lyrics side</h4>
        </div>
        {/* Pass handlePlayPauseToggle to LyricsSection */}
        <LyricsSection onPlayPauseToggle={handlePlayPauseToggle} />
      </div>
    </div>
  );
}

export default Lyrics;

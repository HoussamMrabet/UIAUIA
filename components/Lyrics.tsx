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
    <div id="sing" className="text-center bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 py-20">
        <h1 className="text-5xl font-black my-5 text-yellow-300">SING WITH ME</h1>
      <div className="flex flex-col container justify-center mx-auto">
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
        {/* Pass handlePlayPauseToggle to LyricsSection */}
        <LyricsSection onPlayPauseToggle={handlePlayPauseToggle} />
      </div>
    </div>
  );
}

export default Lyrics;

'use client';

import { useState } from "react";
import Cats from "./Cats";

const Hero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false); // State to control video visibility

  const handleClick = () => {
    setIsVideoVisible(true); // Show the video when div is clicked
  };

  return (
    <div id="crazy" className="mx-auto max-w-[1200px] h-screen relative flex justify-center items-center " onClick={()=> isVideoVisible && setIsVideoVisible(false)} >
      <div
        className="inline-block relative "
        // Handle the click event to show the video
      >
        {isVideoVisible && (
          <video
            autoPlay
            loop
            className="h-[500px]"
            src="/vid.mp4" // Replace with your video file path
          />
        )}
      </div>
      <div  onClick={handleClick} className="absolute top-0 w-full h-full flex justify-center items-center  ">
        <Cats hover={isVideoVisible} />
      </div>
    </div>
  );
};

export default Hero;

'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import useSound from 'use-sound';
import Cats from "./Cats";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [play, { stop, isPlaying }] = useSound("/sound.mp3", { loop: true });

  useEffect(() => {
    const enableAudioContext = () => {
      // Try to resume AudioContext when a user interacts
      if (typeof AudioContext !== 'undefined' && !isPlaying) {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        context.resume();
      }
    };

    // Listen to any mouse events or interactions to resume the audio context
    document.addEventListener('mousedown', enableAudioContext);
    document.addEventListener('keydown', enableAudioContext);

    return () => {
      document.removeEventListener('mousedown', enableAudioContext);
      document.removeEventListener('keydown', enableAudioContext);
    };
  }, [isPlaying]);

  const handleMouseEnter = () => {
    setHover(true);
    play(); // Play the sound when hovered
  };

  const handleMouseLeave = () => {
    setHover(false);
    stop(); // Stop the sound when mouse leaves
  };

  return (
    <div className="mx-auto max-w-[1200px] h-screen relative flex justify-center items-center" >
      <div
        className="inline-block transition-transform duration-100 relative"
   
      >
        <Image
          src="/hh.png"
          width={500}
          height={500}
          alt="Rotating image"
          className={`transition-transform duration-300 ${hover ? "animate-rotateY" : ""}`}
        />
      </div>
      <div className=" absolute top-0 w-full h-full"      onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >
        <Cats/>
      </div>
    </div>
  );
};

export default Hero;

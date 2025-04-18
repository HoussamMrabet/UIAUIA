'use client';

import { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import styles from "./LyricsPlayer.module.css";

type Lyric = {
  time: number;
  text: string;
};

type LyricsPlayerProps = {
  audioSrc: string;
  lyrics: Lyric[];
  onPlayPauseToggle: (isPlaying: boolean) => void;
};

const LyricsPlayer: React.FC<LyricsPlayerProps> = ({ audioSrc, lyrics, onPlayPauseToggle }) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update current time when player progress changes
  const handleProgress = (state: { playedSeconds: number }) => {
    setCurrentTime(state.playedSeconds);
  };

  // Handle when the audio ends
  const handleEnded = () => {
    setIsPlaying(false); // Optionally, stop the player
    onPlayPauseToggle(false); // Update parent component if needed
  };

  // Find and update the current lyric index based on the audio time
  useEffect(() => {
    const currentLyric = lyrics.find((line, index) => {
      return currentTime >= line.time && (lyrics[index + 1] ? currentTime < lyrics[index + 1].time : true);
    });

    if (currentLyric) {
      const currentIndex = lyrics.indexOf(currentLyric);
      if (currentIndex !== currentLine) {
        setCurrentLine(currentIndex);
      }
    }
  }, [currentTime, currentLine, lyrics]);

  // Toggle play/pause and reset when stopping
  const togglePlayPause = () => {
    if (isPlaying) {
      playerRef.current?.seekTo(0); // Seek to the beginning if stopping
      setCurrentLine(0); // Reset lyric index
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
    onPlayPauseToggle(!isPlaying); // Update parent component with new state
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={`${styles.container} gap-20`}>
      <div className={styles.lyrics}>
        <ReactPlayer
          ref={playerRef}
          url={audioSrc}
          controls={false} // Disable default controls
          onProgress={handleProgress}
          onEnded={handleEnded} // Handle when the audio ends
          playing={isPlaying} // Control play/pause with state
          width="100%"
          height="50px"
        />
        {lyrics.length > 0 && (
          <p key={currentLine} className={`${styles.active} font-black`}>
            {lyrics[currentLine].text}
          </p>
        )}
      </div>

      <div className={styles.controlButton}>
        {isPlaying ? (
          <button onClick={togglePlayPause} className={styles.stopButton}>
            Stop
          </button>
        ) : (
          <button onClick={togglePlayPause} className={styles.playButton}>
            Play
          </button>
        )}
      </div>
    </div>
  );
};

export default LyricsPlayer;

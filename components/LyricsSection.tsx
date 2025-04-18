'use client';

import LyricsPlayer from './LyricsPlayer';

type LyricsSectionProps = {
  onPlayPauseToggle: (isPlaying: boolean) => void;
};

const lyricsData = [
  { time: 0, text: "Alright" },
  { time: 1, text: "We can go O I A" },
  { time: 2, text: "F*ck that, we can go O A I" },
  { time: 4, text: "Quarter mil' for the maybach truck" },
  { time: 6, text: "O I A, O I A, A I" }
];

const LyricsSection: React.FC<LyricsSectionProps> = ({ onPlayPauseToggle }) => {
  return (
    <div>
      <LyricsPlayer
        audioSrc="audio/ReelCat.mp3"
        lyrics={lyricsData}
        onPlayPauseToggle={onPlayPauseToggle} // Pass down the callback
      />
    </div>
  );
};

export default LyricsSection;

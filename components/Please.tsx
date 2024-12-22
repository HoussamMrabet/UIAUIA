"use client";
import { useState } from "react";

const Please = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [rejectCount, setRejectCount] = useState(0);
  const MAX_REJECTS = 10;

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const handleReject = () => {
    if (rejectCount < MAX_REJECTS) {
      setRejectCount(rejectCount + 1);
    }
  };

  const resetState = () => {
    setIsAccepted(false);
    setRejectCount(0);
  };

  const generateMessage = (count: number) => {
    const messages = [
      "No",
      "Are you sure? 🌟",
      "Really sure? 🤔",
      "Think about it! 🧠",
      "It could be fun! 🎉",
      "You'll never know if you don't try! 🚀",
      "This might be your moment! 🌈",
      "What if it’s amazing? ✨",
      "You might just love it! ❤️",
      "Don't miss out! 🌟",
      "Last chance to try something new! 🔥",
    ];

    return messages[Math.min(count, messages.length - 1)];
  };

  return (
    <section className="flex flex-col items-center justify-center h-auto py-5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
      <h1 className="text-5xl font-black my-5 text-yellow-300">RANDOM SHIT</h1>
      {!isAccepted ? (
        <>
          <img
            src={`/cat-${rejectCount}.jpg`}
            alt="Picture of a cat"
            className="w-60 h-60 mb-6"
          />
          <p className="text-4xl text-white text-center mb-4">
            Try me please?
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              className="px-6 py-3 bg-yellow-500 text-black text-lg font-semibold rounded hover:bg-yellow-600 transition-all"
              onClick={handleAccept}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-6 py-3 bg-gray-600 text-white text-lg font-semibold rounded hover:bg-gray-500 transition-all ${
                rejectCount >= MAX_REJECTS ? "hidden" : ""
              }`}
              style={{ transform: `scale(${1 - rejectCount * 0.1})` }}
              onClick={handleReject}
            >
              {generateMessage(rejectCount)}
            </button>
          </div>
        </>
      ) : (
        <div className="relative">
          <video
            src="/vid.mp4"
            className="w-80 h-80"
            autoPlay
            loop={false}
            onEnded={resetState}
          />
        </div>
      )}
    </section>
  );
};

export default Please;

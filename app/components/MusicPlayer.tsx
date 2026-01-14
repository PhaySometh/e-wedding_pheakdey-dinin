"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasTriedAutoplay = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to autoplay when component mounts
    const playAudio = async () => {
      if (hasTriedAutoplay.current) return;
      hasTriedAutoplay.current = true;

      try {
        // Start muted to allow autoplay, then unmute
        audio.muted = true;
        await audio.play();
        // Unmute after successful play
        audio.muted = false;
        setIsPlaying(true);
      } catch (error) {
        // Autoplay was prevented by browser, user needs to interact first
        console.log("Autoplay prevented, waiting for user interaction");
        setIsPlaying(false);
        audio.muted = false;
      }
    };

    // Wait a bit for the audio to load
    const handleCanPlay = () => {
      setIsLoaded(true);
      playAudio();
    };

    audio.addEventListener("canplay", handleCanPlay);

    // Handle audio ended (shouldn't happen with loop, but just in case)
    const handleEnded = () => {
      audio.play();
    };

    audio.addEventListener("ended", handleEnded);

    // Try to play on any user interaction if autoplay was blocked
    const handleFirstInteraction = () => {
      if (audio.paused) {
        audio.muted = false;
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            console.log("Could not start playback");
          });
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });
    document.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    return () => {
      audio.pause();
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error toggling music:", error);
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/music/Neena_Goh_-_Beautiful_in_White_Instrumental_(mp3.pm).mp3"
        loop
        preload="auto"
      />

      {/* Music control button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-24 right-8 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center border-2 border-white"
        aria-label={isPlaying ? "Mute music" : "Play music"}
        title={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          // Music rhythm/equalizer bars icon (playing)
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="flex items-end justify-center"
          >
            <rect x="2" y="8" width="3" height="8" rx="1.5">
              <animate
                attributeName="height"
                values="8;16;8"
                dur="0.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="8;4;8"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="7" y="4" width="3" height="16" rx="1.5">
              <animate
                attributeName="height"
                values="16;8;16"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="4;8;4"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="12" y="2" width="3" height="20" rx="1.5">
              <animate
                attributeName="height"
                values="20;12;20"
                dur="0.9s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="2;6;2"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="17" y="6" width="3" height="12" rx="1.5">
              <animate
                attributeName="height"
                values="12;18;12"
                dur="0.7s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="6;3;6"
                dur="0.7s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        ) : (
          // Muted music rhythm bars icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative"
          >
            <rect x="2" y="10" width="3" height="4" rx="1.5" opacity="0.5" />
            <rect x="7" y="8" width="3" height="8" rx="1.5" opacity="0.5" />
            <rect x="12" y="6" width="3" height="12" rx="1.5" opacity="0.5" />
            <rect x="17" y="9" width="3" height="6" rx="1.5" opacity="0.5" />
            {/* Slash (/) over the bars to indicate muted */}
            <line
              x1="3"
              y1="21"
              x2="21"
              y2="3"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </>
  );
}

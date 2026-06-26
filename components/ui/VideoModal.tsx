"use client";

import { useEffect } from "react";

interface VideoModalProps {
  src: string;
  onClose: () => void;
}

const VideoModal = ({ src, onClose }: VideoModalProps) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative inline-block max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white text-lg hover:bg-purple"
          aria-label="Close video"
        >
          ✕
        </button>
        <video
          controls
          autoPlay
          className="block w-auto h-auto max-w-[90vw] max-h-[85vh] rounded-xl"
        >
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;

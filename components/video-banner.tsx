'use client';

import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRef, useState } from 'react';

const VideoBanner = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (video?.paused) {
      video.play();
    } else {
      video?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMutedVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <section className="relative mx-auto my-20 h-[600px] max-w-screen-2xl rounded-3xl px-2 xl:h-[800px]">
      <div className="relative h-full w-full rounded-3xl bg-black">
        <video
          className="h-full w-full rounded-3xl object-cover opacity-80"
          playsInline
          loop
          ref={videoRef}
          src="/bg-video.mp4"
          autoPlay
          muted={isMuted}
        ></video>
        <div className="absolute bottom-10 flex w-full justify-between px-4 md:px-20">
          <button
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-white text-black"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <PauseIcon className="w-5 group-hover:scale-110" />
            ) : (
              <PlayIcon className="w-5 group-hover:scale-110" />
            )}
          </button>
          <div className="text-center">
            <h1 className="mb-5 text-sm font-medium text-white md:text-xl">
              Want your own design, we provide the best
            </h1>
            <Link href={'/search'} className="group">
              <button className="rounded-full border border-white px-6 py-3 text-white">
                Discover more
              </button>
            </Link>
          </div>
          <button
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-white text-black"
            onClick={toggleMutedVideo}
          >
            {isMuted ? <SpeakerWaveIcon className="w-5" /> : <SpeakerXMarkIcon className="w-5" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;

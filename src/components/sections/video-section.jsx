"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(error => console.error("Video play failed:", error));
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <section>
      <div className="relative w-full aspect-video">
        <video
          ref={videoRef}
          src="https://uploads-ssl.webflow.com/65642838c9018bf978a0ef82/65686076c0ec7713fdafa0ae_add-video-transcode.mp4"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/images/65686076c0ec7713fdafa0ae_add-video-poster-00001-28.jpg?"
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-end pr-[5%]">
          <button
            onClick={togglePlay}
            className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/65685d634b5f48427b34048b_icon-10-5.svg?"
                alt="Pause video icon"
                width={30}
                height={36}
                unoptimized
              />
            ) : (
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/65685d638de6697d7667d389_icon-9.svg?"
                alt="Play video icon"
                width={31}
                height={36}
                className="translate-x-1"
                unoptimized
              />
            )}
          </button>
        </div>
      </div>
      {/* Icon row under the video */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/65685d638de6697d7667d389_icon-9.svg?"
          alt="Play icon"
          width={28}
          height={28}
          unoptimized
        />
        <span className="text-primary text-lg">Watch how it's made</span>
      </div>
    </section>
  );
};

export default VideoSection;
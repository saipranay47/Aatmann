import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import video1 from "../images/testimonials/1.mp4";
import video2 from "../images/testimonials/2.mp4";
import video4 from "../images/testimonials/4.mp4";

function VideoTestimonials() {
  const videos = [video2, video4, video1];
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loadingVideos, setLoadingVideos] = useState(
    videos.map(() => true)
  );

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  const handleVideoLoaded = (index) => {
    setLoadingVideos((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <section className="flex justify-center items-center flex-col w-full">
      <div className="vidmasonry sm:vidmasonry-sm md:vidmasonry-md w-full">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-lg pb-4 break-inside relative cursor-pointer w-full"
            tabIndex={0}
            onClick={() => handleVideoClick(video)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleVideoClick(video);
              }
            }}
          >
            {loadingVideos[index] && (
              <div className="w-full">
                <Skeleton height={index == 0 ? 500 : 200} width="100%" baseColor="#32533c" highlightColor="#31573d" />
              </div>
            )}
            <video
              className={`rounded-md ${window.innerWidth > 768 ? "hover:opacity-75" : ""
                }`}
              loop={!selectedVideo}
              muted
              playsInline
              onLoadedData={() => handleVideoLoaded(index)}
              style={{ display: loadingVideos[index] ? "none" : "block" }}
            >
              <source src={video} type="video/mp4" loading="lazy" />
            </video>
          </div>
        ))}
      </div>

      {
        selectedVideo && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center p-10"
            style={{ background: "rgba(0, 0, 0, 0.6)" }}
            onClick={handleClose}
          >
            <div className="relative max-w-6xl">
              <video
                className="rounded-md"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        )
      }
    </section >
  );
}

export default VideoTestimonials;

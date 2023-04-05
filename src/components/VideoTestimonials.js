import React, { useState } from "react";
import video1 from "../images/testimonials/1.mp4";
import video2 from "../images/testimonials/2.mp4";
import video4 from "../images/testimonials/4.mp4";

function VideoTestimonials() {
  const videos = [video1, video2, video4];
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url(/background.jpg)",
      }}
    >
      <div className="masonry sm:masonry-sm md:masonry-md ">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-lg p-4 break-inside relative cursor-pointer"
            tabIndex={0}
            onClick={() => handleVideoClick(video)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleVideoClick(video);
              }
            }}
          >
            <video
              className="rounded-md"
              loop
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            >
              <source src={video} type="video/mp4" />
            </video>
            
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center p-10"
          style={{ background: "rgba(0, 0, 0, 0.6)" }}
        >
            <button
              className="absolute top-2 right-2 rounded-full h-8 w-8 flex justify-center items-center text-white bg-red-500 hover:bg-red-700"
              onClick={handleClose}
              tabIndex={1}
            >
              X
            </button>
          <div className="relative max-w-6xl">
            <video className="rounded-md" controls autoPlay tabIndex={0}>
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoTestimonials;

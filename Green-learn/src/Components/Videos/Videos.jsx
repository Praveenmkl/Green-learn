import React from "react";
import { useInView } from "react-intersection-observer";

// List of Firebase-hosted videos
const videos = [
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2F0424(1).mp4?alt=media&token=46d7580d-3429-4a45-95bb-35a08c2b32d0",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2F0424.mp4?alt=media&token=a12c979a-83d3-4db0-ba81-50d4b39af193",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FCan%20We%20Stop%20Climate%20Change_%20_%20Global%20Warming%20_%20The%20Dr%20Binocs%20Show%20_%20Peekaboo%20Kidz.mp4?alt=media&token=53ad017e-bd26-42a9-8605-61bf093c6705",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FClean%20and%20Green%20Neighbourhood%20-%20Good%20Habits%20Bedtime%20Stories%20%26%20Moral%20Stories%20for%20Kids%20-%20ChuChu%20TV.mp4?alt=media&token=4c3aa1a3-8ef7-45e9-91b9-c5a2ba86ee50",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FEco-Friendly%20Habits%20_%20What%20Is%20Sustainable%20Living_%20_%20The%20Dr%20Binocs%20Show%20_%20Peekaboo%20Kidz.mp4?alt=media&token=1d8fdbbc-6c5a-4541-ae3d-63a2cb1c9727",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FGlobal%20Warming%20-%20The%20End%20Game%20_%20The%20Dr.%20Binocs%20Show%20_%20Best%20Learning%20Videos%20For%20Kids%20_%20Peekaboo%20Kidz.mp4?alt=media&token=a31c6df5-e46c-46a7-8ee1-2ba0ed7a36c6",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FGlobal%20Warming%20-%20video%20for%20kids%20-%20Learning%20Junction.mp4?alt=media&token=3ee7ea98-9fd9-4f10-ba2e-50bba0b5d8fa",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FWhat%20If%20All%20The%20World's%20Ice%20melt_%20_%20Dr%20Binocs%20Show%20_%20Peekaboo%20Kidz.mp4?alt=media&token=eeee89f0-98d6-4c4b-ae3c-3b18a89d96c1",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FWhat%20Is%20PLASTIC%20POLLUTION%20%20_%20What%20Causes%20Plastic%20Pollution%20%20_%20The%20Dr%20Binocs%20Show%20_%20Peekaboo%20Kidz%20(1).mp4?alt=media&token=6426e7e6-7498-495b-9148-43ad92a216ec",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FWhat%20Is%20PLASTIC%20POLLUTION%20%20_%20What%20Causes%20Plastic%20Pollution%20%20_%20The%20Dr%20Binocs%20Show%20_%20Peekaboo%20Kidz.mp4?alt=media&token=7171e360-c57e-4048-8542-a979082b4ad7",
  "https://firebasestorage.googleapis.com/v0/b/greenlearn-220e5.firebasestorage.app/o/Videos%2FWhat%20if%20Ice%20Age%20Returns_%20_%20Effects%20of%20Ice%20Age%20on%20Human%20Civilization%20_%20The%20Dr.%20Binocs%20Show.mp4?alt=media&token=87d8661b-2c92-48c7-b92f-f109d192b568"
];

// Lazy loading wrapper
const LazyVideo = ({ src }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} style={{ marginBottom: "30px", textAlign: "center" }}>
      {inView ? (
        <video width="480" controls preload="none">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div style={{ height: "270px", width: "480px", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span>Loading video...</span>
        </div>
      )}
    </div>
  );
};

// Main component
const Video = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Educational Videos</h2>
      {videos.map((url, idx) => (
        <LazyVideo key={idx} src={url} />
      ))}
    </div>
  );
};

export default Video;

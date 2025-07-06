import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BedtimeStories.css';
import story1 from '../../assets/story-pic/Benny the Polar Bear’s Big Adventure/2.png';
import story2 from '../../assets/story-pic/Lila and the Talking Tree/3.png';
import story3 from '../../assets/story-pic/Ravi’s Rainforest Rescue/3.png';
import story4 from '../../assets/story-pic/The Little Solar Panel That Could/4.png';

export default function BedtimeStories() {
  const navigate = useNavigate();

  const stories = [
    { id: 1, title: "Benny the Polar Bear’s Big Adventure", image: story1, path: "/stories/benny" },
    { id: 2, title: "Lila and the Talking Tree", image: story2, path: "/stories/lila" },
    { id: 3, title: "Ravi’s Rainforest Rescue", image: story3, path: "/stories/ravi" },
    { id: 4, title: "The Little Solar Panel That Could", image: story4, path: "/stories/solar" },
  ];

  return (
    <div className="bedtime-stories-container">
      <h2 className="bedtime-heading">Bedtime Stories</h2>
      <div className="stories-grid">
        {stories.map((story) => (
          <div
            className="story-card"
            key={story.id}
            onClick={() => navigate(story.path)}
          >
            <img src={story.image} alt={story.title} />
            <h3>{story.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import './VideoCards.css'; // You'll create this CSS file for styling
import thumbnail from '../../assets/video-thumbnail.png'; // Example thumbnail image
import thumb2 from '../../assets/thumb2.png'
import thumb3 from '../../assets/thumb3.png'
import thumb4 from '../../assets/thumb4.png'
import thumb5 from '../../assets/thumb5.png'
import thumb6 from '../../assets/thumb6.png'
import thumb7 from '../../assets/thumb7.png'

import { useNavigate } from 'react-router-dom';

const videoData = [
  { id: 1, title: 'Globale Warming', thumbnail: thumbnail },
  { id: 2, title: 'Clean and Green Neighborhood', thumbnail: thumb2 },
  { id: 3, title: 'Climate Change', thumbnail: thumb3 },
  { id: 4, title: 'Tree Facts', thumbnail: thumb4 },
  { id: 5, title: 'Sustainable Living', thumbnail: thumb5 },
  { id: 6, title: 'Rainforest Adventure', thumbnail: thumb6 },
  { id: 7, title: 'Globale Warming', thumbnail: thumbnail },
  { id: 8, title: 'Climate Change Basics', thumbnail: thumb3 },
  { id: 9, title: 'Plastic Pollution', thumbnail: thumb7 },
  { id: 10, title: 'Why Trees Matter', thumbnail: thumb4 },
];

const VideoCards = () => {
  const navigate = useNavigate();

  const handleCardClick = (videoId) => {
    // Navigate to a specific video page if needed
     navigate(`/video/${videoId}`);
    // Example: navigate(`/video/${videoId}`);
  };

  return (
    <div className="video-cards-container">
      <h1 className="video-cards-title">Our Nature Video Collection</h1>
      <br/>
      <div className="video-cards-grid">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="video-card"
            onClick={() => handleCardClick(video.id)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;

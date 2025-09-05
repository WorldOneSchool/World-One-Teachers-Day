import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import playbut from '../assets/images/playbut.png';

// Example YouTube links and thumbnails (replace with real links/thumbs)
import video1thumb from '../assets/images/Video-thumbs/video1-thumb.jpg';
import video2thumb from '../assets/images/Video-thumbs/video2-thumb.jpg';
import video3thumb from '../assets/images/Video-thumbs/video3-thumb.jpg';
import video4thumb from '../assets/images/Video-thumbs/video4-thumb.jpg';
import video5thumb from '../assets/images/Video-thumbs/video5-thumb.jpg';
import video6thumb from '../assets/images/Video-thumbs/video6-thumb.jpg';
import video7thumb from '../assets/images/Video-thumbs/video7-thumb.jpg';
import video8thumb from '../assets/images/Video-thumbs/video8-thumb.jpg';

// Replace these YouTube URLs with your actual uploaded video links
const videoData = [
  {
    id: 1,
    title: "Teaching at World One: A Journey of Growth",
    description: "“Here, I am more than an educator—I am a mentor, a learner, and part of a family that celebrates each step.” — Mrs. Sharma",
    thumbnail: video1thumb,
    videoUrl: "https://www.youtube.com/embed/nvGy2V-7Qx0",
    duration: "03:12",
  },
  {
    id: 2,
    title: "Inspiring Young Minds Every Day",
    description: "“Every day brings a new opportunity to spark curiosity and empower my students. World One School makes this possible.” — Mr. Verma",
    thumbnail: video2thumb,
    videoUrl: "https://www.youtube.com/embed/nvGy2V-7Qx0",
    duration: "02:47",
  },
  {
    id: 3,
    title: "Supportive, Innovative, Unforgettable",
    description: "“I’ve grown as a person and teacher thanks to the supportive culture and innovative spirit here.” — Ms. D’Souza",
    thumbnail: video3thumb,
    videoUrl: "https://www.youtube.com/embed/nvGy2V-7Qx0",
    duration: "04:05",
  },
  {
    id: 4,
    title: "Teaching With Heart",
    description: "“What sets World One apart is the genuine care for both teachers and students. It’s a place I’m proud to call home.” — Mr. Singh",
    thumbnail: video4thumb,
    videoUrl: "https://www.youtube.com/embed/nvGy2V-7Qx0",
    duration: "03:38",
  },
  {
    id: 5,
    title: "Shaping Futures Together",
    description: "“Teaching here means making a difference every day, together with my colleagues.” — Mrs. Patel",
    thumbnail: video5thumb,
    videoUrl: "https://www.youtube.com/embed/nvGy2V-7Qx0",
    duration: "02:54",
  },
  {
  id: 6,
  title: "Learning Beyond Books",
  description: "“At World One, we encourage learning that goes beyond textbooks.” — Mr. Rao",
  thumbnail: video6thumb,
  videoUrl: "https://youtu.be/nvGy2V-7Qx0?si=TrbUhIwSMrAfJ0Ha",
  duration: "03:07",
},

  {
    id: 7,
    title: "Celebrating Success",
    description: "“Every achievement, big or small, is celebrated together!” — Ms. Mehta",
    thumbnail: video7thumb,
    videoUrl: "https://www.youtube.com/embed/nvGy2V-7Qx0",
    duration: "02:42",
  },
  {
    id: 8,
    title: "Building Lifelong Connections",
    description: "“The bonds we form here last a lifetime.” — Mr. Iyer",
    thumbnail: video8thumb,
    videoUrl: "https://www.youtube.com/embed/nvGy2V-7Qx0",
    duration: "03:20",
  }
];

  // Add more videos here as needed, following the same structure

const PageWrap = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 110px 2.5vw 3rem 2.5vw;
`;

const Title = styled(motion.h1)`
  font-size: 2.6rem;
  color: #00A0E3;
  letter-spacing: -1px;
  font-weight: 800;
  margin-bottom: 1.1rem;
  text-shadow: 0 1px 8px #0005;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(340px,1fr));
  gap: 2.4rem;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 14px;
  box-shadow: 0 8px 32px #0004;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
  cursor: pointer;
  border: 2.5px solid transparent;
  position: relative;

  &:hover, &.active {
    border-color: #00A0E3;
    box-shadow: 0 0 0 3px #00A0E3cc, 0 14px 40px #00A0E370;
    transform: translateY(-8px) scale(1.04);
    z-index: 2;
  }
`;

const ThumbWrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  background: #10121c;
  overflow: hidden;
`;

const Thumb = styled.img`
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  filter: grayscale(0.12) brightness(0.93) contrast(1.05);
  transition: filter 0.3s;
  ${Card}:hover & { filter: grayscale(0) brightness(1.08) contrast(1.1); }
`;

const Duration = styled.div`
  position: absolute; bottom: 14px; right: 16px;
  background: #000b; color: #fff; font-size: 1rem; padding: 0.3rem 0.8rem;
  border-radius: 5px; font-weight: bold; letter-spacing: 0.04em;
  z-index: 2;
`;

const Play = styled.div`
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 64px; height: 64px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  opacity: 0.86; transition: opacity 0.18s;
  z-index: 2;
  ${Card}:hover & { opacity: 1; }
`;

const Info = styled.div`
  padding: 1.6rem 1.3rem;
  h3 { color: ${({ theme }) => theme.colors.primary}; font-size: 1.2rem; margin-bottom: 0.7rem;}
  p { color: ${({ theme }) => theme.colors.textSecondary}; font-size: 1rem; }
`;

function VideoGridCustom({ videos, onVideoSelect, activeId }) {
  return (
    <Grid>
      {videos.map((v, i) => (
        <Card
          className={activeId === v.id ? 'active' : ''}
          key={v.id}
          layout
          whileHover={{ scale: 1.04, y: -10, boxShadow: "0 12px 44px #00A0E380" }}
          transition={{ type: 'spring', stiffness: 320, damping: 22, delay: i * 0.07 }}
          onClick={() => onVideoSelect(v)}
        >
          <ThumbWrap>
            <Thumb src={v.thumbnail} alt={v.title} />
            <Duration>{v.duration}</Duration>
            <Play>
              <img src={playbut} alt="Play Button" style={{ width: "44px", height: "44px" }} />
            </Play>
          </ThumbWrap>
          <Info>
            <h3>{v.title}</h3>
            <p>{v.description}</p>
          </Info>
        </Card>
      ))}
    </Grid>
  );
}

const YoutubePlayer = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 2rem auto 2.8rem auto;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px #00A0E3aa;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  return (
    <PageWrap
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
    >
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Teachers at World One School
      </Title>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        style={{
          color: "#e0e6f7",
          fontSize: "1.24rem",
          marginBottom: "2.2rem",
          fontWeight: "500",
          textAlign: "center",
          textShadow: "0 2px 14px #00A0E3cc"
        }}
      >
        Real stories from our teachers at World One School.<br/>
        Discover what makes teaching here truly special.
      </motion.p>
      {/* Show the selected YouTube video */}
      <YoutubePlayer>
        <iframe
          src={selectedVideo.videoUrl}
          title={selectedVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </YoutubePlayer>
      <VideoGridCustom
        videos={videoData}
        onVideoSelect={setSelectedVideo}
        activeId={selectedVideo.id}
      />
    </PageWrap>
  );
}
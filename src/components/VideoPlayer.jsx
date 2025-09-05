import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PlayerWrap = styled(motion.div)`
  position: relative; width: 100%; margin-bottom: 2.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 18px; box-shadow: 0 7px 32px #0003;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%; max-height: 60vh; display: block;
  background: #000;
`;

const Info = styled(motion.div)`
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 2rem 2.5rem 1.3rem 2.5rem;
  background: linear-gradient(transparent,rgba(0,0,0,0.9) 75%);
  color: #fff;
  h2 { font-size: 2.1rem; margin-bottom: 0.2em; }
  p { font-size: 1.08rem; color: #cfcfcf; }
  @media (max-width: 600px) {
    padding: 1rem 1.2rem 0.7rem 1.2rem;
    h2 { font-size: 1.2rem;}
    p { font-size: 0.9rem;}
  }
`;

export default function VideoPlayer({ video }) {
  return (
    <PlayerWrap
      key={video.id}
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -30 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <Video controls poster={video.thumbnail}>
        <source src={video.videoUrl} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </Video>
      <AnimatePresence>
        <Info
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </Info>
      </AnimatePresence>
    </PlayerWrap>
  );
}
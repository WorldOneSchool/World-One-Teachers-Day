import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import playbut from '../assets/images/playbut.png'; // import your play button image

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
  border: 2px solid transparent;
  position: relative;

  &:hover, &.active {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 10px 40px #00A0E370;
    transform: translateY(-8px) scale(1.025);
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

export default function VideoGrid({ videos, onVideoSelect, activeId }) {
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
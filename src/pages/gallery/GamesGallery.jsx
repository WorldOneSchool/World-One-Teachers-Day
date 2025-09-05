import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import all images and videos from the Class Campus pics folder
function importAll(r) {
  return r.keys().map(r);
}

// Accept jpg, png, webp, mp4 (for video), etc.
const campusMedia = importAll(
  require.context("../../assets/images/Games Gallary", false, /\.(jpe?g|png|webp|mp4)$/)
);

const PageWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 110px 2vw 3rem 2vw;
`;

const HeroSection = styled(motion.div)`
  background: linear-gradient(120deg, #00A0E3 18%, #fff 100%);
  box-shadow: 0 8px 48px #00A0E320, 0 2px 18px #0003;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.6rem 2rem;
  margin-bottom: 2.5rem;
`;

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.2rem;
  margin-bottom: 2.8rem;
  width: 100%;
  justify-content: center;
`;

const MediaWrap = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eaf7ff;
  border-radius: 20px;
  box-shadow: 0 2px 24px #00a0e3b8;
  border: 4px solid #00A0E3;
  overflow: hidden;
  transition: box-shadow 0.22s, transform 0.22s;
  &:hover {
    box-shadow: 0 8px 40px #00A0E370, 0 2px 18px #0003;
    transform: scale(1.05) translateY(-6px);
    z-index: 2;
  }
`;

const MediaImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
`;

const MediaVideo = styled.video`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
  background: #000;
`;

export default function ClassCampusGallery() {
  return (
    <PageWrap>
      <HeroSection
        initial={{ opacity: 0, scale: 0.97, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.89, type: "spring", stiffness: 120 }}
      >
        <PhotosGrid>
          {campusMedia.map((src, i) => {
            const isVideo = typeof src === "string" && src.match(/\.(mp4)$/i);
            return (
              <MediaWrap
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.07, type: "spring", stiffness: 140 }}
              >
                {isVideo ? (
                  <MediaVideo src={src} controls playsInline />
                ) : (
                  <MediaImg src={src} alt={`Class Campus Media ${i + 1}`} />
                )}
              </MediaWrap>
            );
          })}
        </PhotosGrid>
      </HeroSection>
    </PageWrap>
  );
}
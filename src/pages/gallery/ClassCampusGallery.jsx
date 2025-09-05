import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Bulk import all class campus images from the folder
function importAll(r) {
  return r.keys().map(r);
}

// Adjust the path below to your actual structure (relative to this file)
const campusImages = importAll(
  require.context("../../assets/images/Class Campus pics", false, /\.(jpe?g|png|webp)$/)
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.2rem;
  margin-bottom: 2.8rem;
  width: 100%;
  justify-content: center;
`;

const HeroPicWrap = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
`;

const HeroPic = styled(motion.img)`
  width: 100%;
  max-width: 360px;
  height: 260px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 2px 24px #00a0e3b8, 0 1px 12px #0002;
  border: 4px solid #00A0E3;
  background: #eaf7ff;
  transition: box-shadow 0.22s, transform 0.22s;
  &:hover {
    box-shadow: 0 8px 40px #00A0E370, 0 2px 18px #0003;
    transform: scale(1.05) translateY(-6px);
    z-index: 2;
  }
`;

const Glow = styled(motion.div)`
  position: absolute;
  top: -10px; left: -10px; right: -10px; bottom: -10px;
  border-radius: 24px;
  box-shadow: 0 0 60px 12px #00A0E3bb;
  pointer-events: none;
  opacity: 0.6;
`;

const HeroTitle = styled(motion.h2)`
  font-size: 2.6rem;
  font-weight: 900;
  color: #00A0E3;
  text-shadow: 0 2px 14px #00A0E3bb;
  margin-bottom: 0.9rem;
  letter-spacing: -1px;
`;

const Subtitle = styled(motion.div)`
  font-size: 1.22rem;
  color: #17427a;
  font-weight: 500;
  margin-bottom: 1.1rem;
  text-align: center;
  text-shadow: 0 1px 8px #00A0E355;
`;

const FunFact = styled(motion.div)`
  font-size: 1.07rem;
  color: #fff;
  background: #00A0E3;
  padding: 0.6em 1.2em;
  border-radius: 8px;
  margin-bottom: 1.1rem;
  font-weight: 700;
  box-shadow: 0 2px 14px #00A0E3cc;
  display: inline-block;
`;

const Quote = styled(motion.blockquote)`
  font-size: 1.14rem;
  color: #1d355e;
  font-style: italic;
  margin-bottom: 1.3rem;
  margin-top: 0.9rem;
  border-left: 5px solid #00A0E3;
  padding-left: 1.1em;
  background: #eaf7ff;
  border-radius: 0 11px 11px 0;
  box-shadow: 0 1px 8px #00A0E322;
`;

export default function ClassCampusGallery() {
  return (
    <PageWrap>
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
        style={{
          textAlign: "center",
          margin: "2rem 0 0.7rem 0",
          color: "#00A0E3",
          fontWeight: 800,
          fontSize: "2.1rem",
          letterSpacing: "-1px",
          textShadow: "0 2px 12px #00A0E3bb"
        }}
      >
        Class Campus – World One School
      </motion.div>
      <HeroSection
        initial={{ opacity: 0, scale: 0.97, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.89, type: "spring", stiffness: 120 }}
      >
        <PhotosGrid>
          {campusImages.map((src, i) => (
            <HeroPicWrap
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07, type: "spring", stiffness: 140 }}
            >
              <Glow
                initial={{ opacity: 0, scale: 0.90 }}
                animate={{ opacity: 0.7, scale: 1.09 }}
                transition={{ duration: 1.2, delay: 0.14 }}
              />
              <HeroPic
                src={src}
                alt={`Class Campus Photo ${i + 1}`}
                initial={{ scale: 0.96, rotate: -2, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 140,
                  delay: 0.15 + i * 0.07
                }}
              />
            </HeroPicWrap>
          ))}
        </PhotosGrid>
        <HeroTitle
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, type: "spring", stiffness: 110 }}
        >
          Memories Made Together
        </HeroTitle>
        <Subtitle
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          The vibrant energy, laughter, and unity of our classes is unmatched.<br/>
          Our classroom is a true reflection of the spirit of World One School.
        </Subtitle>
        <Quote
          initial={{ opacity: 0, x: -26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          “Every day is a new adventure. We learn, we grow, and we support each other like a family.”
        </Quote>
        <Subtitle
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <span style={{color:"#00A0E3",fontWeight:700}}>Teachers</span> foster creativity and encourage us to be our best selves.<br/>
          Here, everyone leaves a mark, creating unforgettable moments together.
        </Subtitle>
      </HeroSection>
    </PageWrap>
  );
}
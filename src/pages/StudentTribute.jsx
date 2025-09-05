import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import your audio and video files
import Audio1 from "../assets/audios/rec2.mp3";
import Video1 from "../assets/audios/rec3.mp4";

const PageWrap = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 110px 2vw 3rem 2vw;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: #00A0E3;
  font-weight: 800;
  margin-bottom: 2.8rem;
  text-shadow: 0 2px 16px #00A0E3bb;
  letter-spacing: -1px;
`;

const Section = styled(motion.section)`
  margin-bottom: 2.6rem;
`;

const MediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-bottom: 2rem;
`;

const MediaBox = styled(motion.div)`
  background: linear-gradient(110deg, #eaf7ff 40%, #fff 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px #00A0E322, 0 2px 18px #0002;
  padding: 1.6rem 2.1rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const MediaLabel = styled.div`
  font-size: 1.2rem;
  color: #00A0E3;
  font-weight: 700;
  min-width: 120px;
`;

const AudioPlayer = styled.audio`
  width: 300px;
`;

const VideoPlayer = styled.video`
  width: 300px;
  background: #000;
  border-radius: 6px;
`;

const Description = styled(motion.div)`
  margin-top: 2.2rem;
  font-size: 1.19rem;
  color: #263c62;
  background: #eaf7ff;
  padding: 1.7rem 2.3rem;
  border-radius: 18px;
  box-shadow: 0 2px 16px #00a0e322;
  line-height: 1.7;
  font-weight: 500;
`;

export default function StudentTribute() {
  return (
    <PageWrap
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
    >
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Student Tribute
      </Title>
      <Section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{color: "#00A0E3", fontWeight: 700, fontSize: "1.5rem", marginBottom: "1.4rem"}}>
          Voice & Video Messages from Students
        </h2>
        <MediaWrap>
          <MediaBox
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MediaLabel>Student 1 (Voice)</MediaLabel>
            <AudioPlayer controls src={Audio1} />
          </MediaBox>
          <MediaBox
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MediaLabel>Student 2 (Video)</MediaLabel>
            <VideoPlayer controls src={Video1} />
          </MediaBox>
        </MediaWrap>
      </Section>
      <Description
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.33 }}
      >
        These heartfelt voice and video messages from our students are a testimony to the gratitude and respect they hold for their teachers. Their words reflect encouragement, inspiration, and the special bonds formed in the classroom. Through their voices, we hear stories of support, learning, and growth, reminding us of the lasting impact teachers have on young lives. <br /><br />
        On this special day, we honor both the dedication of our teachers and the appreciation shown by their students. Whether through spoken messages or thoughtful tributes, the spirit of World One School shines through every note and every word shared by our students.
      </Description>
    </PageWrap>
  );
}
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import your 3 letter images:
import Letter1 from "../../assets/letters/teacher letter1.jpg";
import Letter2 from "../../assets/letters/teacher letter2.jpg";
import Letter3 from "../../assets/letters/teacher letter3.jpg";

const PageWrap = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  padding: 110px 2vw 3rem 2vw;
`;

const Title = styled(motion.h1)`
  font-size: 2.2rem;
  color: #00A0E3;
  font-weight: 800;
  margin-bottom: 2rem;
  text-shadow: 0 2px 16px #00A0E3bb;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.3rem;
  margin-bottom: 2rem;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px #00A0E340, 0 1px 8px #0002;
  padding: 1.6rem 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LetterImg = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 14px;
  box-shadow: 0 2px 14px #00A0E3bb;
  background: #eaf7ff;
`;

const LetterLabel = styled.div`
  font-weight: 700;
  color: #00A0E3;
  font-size: 1.08rem;
  margin-top: 1.2rem;
  text-align: center;
`;

export default function StudentLitreature() {
  const letters = [
    { src: Letter1, label: "Letter from Sawti 5B" },
    { src: Letter2, label: "Letter from Student 2" },
    { src: Letter3, label: "Letter from Student 3" }
  ];
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
        Student Literature Corner
      </Title>
      <Grid>
        {letters.map((l, i) => (
          <Card
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.09 }}
          >
            <ImgWrap>
              <LetterImg src={l.src} alt={l.label} />
            </ImgWrap>
            <LetterLabel>{l.label}</LetterLabel>
          </Card>
        ))}
      </Grid>
    </PageWrap>
  );
}
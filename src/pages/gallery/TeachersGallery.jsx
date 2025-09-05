import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Correct path: from pages/gallery to assets/teachers
function importAll(r) {
  return r.keys().map(r);
}

const teacherImages = importAll(require.context('../../assets/teachers', false, /\.(png|jpe?g|webp)$/));

const PageWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 110px 2vw 3rem 2vw;
`;

const Title = styled(motion.h1)`
  font-size: 2.4rem;
  color: #00A0E3;
  font-weight: 800;
  margin-bottom: 2.2rem;
  text-align: center;
  text-shadow: 0 2px 14px #00A0E3bb;
  letter-spacing: -1px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2.2rem;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: linear-gradient(120deg, #eaf7ff 25%, #fff 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px #00A0E340, 0 1px 8px #0002;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.22s, transform 0.22s;
  &:hover {
    box-shadow: 0 8px 40px #00A0E370, 0 2px 18px #0003;
    transform: scale(1.05) translateY(-6px);
    z-index: 2;
  }
`;

const Pic = styled(motion.img)`
  width: 100%;
  max-width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 14px #00A0E3bb;
  background: #eaf7ff;
`;

export default function TeachersGallery() {
  return (
    <PageWrap>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Teachers Gallery
      </Title>
      <Grid>
        {teacherImages.map((src, i) => (
          <Card
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.04 * i }}
            whileHover={{ scale: 1.08, y: -7, boxShadow: "0 12px 44px #00A0E3bb" }}
          >
            <Pic src={src} alt={`Teacher ${i+1}`} />
          </Card>
        ))}
      </Grid>
    </PageWrap>
  );
}
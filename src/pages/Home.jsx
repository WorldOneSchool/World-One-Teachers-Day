import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bg from '../assets/images/background.jpg';
// ADD THESE IMAGE IMPORTS:
import vandanaImg from '../assets/images/vandana.png';
import spandanaImg from '../assets/images/spandana.png';
import raniImg from '../assets/images/Rani.png';

const Hero = styled.section`
  min-height: 85vh;
  width: 100vw;
  position: relative;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  padding: 7rem 2rem 3rem 2rem;
  overflow: hidden;
  background: url(${bg}) center center/cover no-repeat;

  @media (max-width: 600px) { min-height: 70vh; padding-top: 6rem; }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(180deg, rgba(0,48,100,0.25) 0%, rgba(255,255,255,0.74) 88%);
  z-index: 1;
  pointer-events: none;
`;

const FadeBottom = styled.div`
  position: absolute;
  left: 0; bottom: 0; width: 100%; height: 120px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #23243a 100%);
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: #23243a;
  text-shadow: 0 1px 12px #fff7, 0 2px 8px #00A0E330;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -1.2px;
  color: #263c62;
  @media (max-width: 600px) { font-size: 2.2rem; }
`;

const Sub = styled(motion.p)`
  font-size: 1.32rem;
  font-weight: 400;
  margin-bottom: 2.2rem;
  color: #23243a;
  text-shadow: 0 2px 10px #fff9;
  @media (max-width: 600px) { font-size: 1.07rem; }
`;

const CTA = styled(Link)`
  display: inline-block;
  padding: 1.1rem 2.7rem;
  border-radius: 40px;
  background: #fff;
  color: #00A0E3;
  font-weight: 700;
  letter-spacing: 0.03em;
  font-size: 1.09rem;
  box-shadow: 0 4px 18px #00A0E350;
  transition: all 0.23s cubic-bezier(.4,1.6,.5,1);
  margin-top: 10px;
  border: none;
  outline: none;
  &:hover {
    background: #C4D600;
    color: #23243a;
    transform: scale(1.07) translateY(-3px);
    box-shadow: 0 8px 28px #C4D60088;
  }
`;

const Section = styled.section`
  max-width: 1000px; margin: 0 auto 3.5rem auto; padding: 2rem 1rem;
  h2 { color: #00A0E3; font-size: 2.3rem; margin-bottom: 1.7rem;}
  p { color: #23243a; font-size: 1.13rem; margin-bottom: 0.7rem; }
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px #00A0E330;
  position: relative;
  z-index: 4;
`;

const TeamSection = styled.section`
  max-width: 1100px;
  margin: 0 auto 3rem auto;
  padding: 0 2vw 40px 2vw;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.5rem;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TeamCard = styled.div`
  background: #0a3d54;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px #00000022;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  min-width: 320px;
  max-width: 350px;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 340px;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.div`
  width: 180px; height: 240px;
  background: #c2c2c2;
  border-radius: 16px;
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const MemberImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  display: block;
`;

const Name = styled.div`
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 1.6rem 0 0.5rem 0;
`;

const Role = styled.div`
  font-size: 1.08rem;
  color: #b8eaff;
  text-align: center;
  margin-bottom: 1.3rem;
`;

const MessageBtn = styled.button`
  margin-top: 8px;
  padding: 8px 22px;
  border-radius: 20px;
  background: #fff;
  color: #0a3d54;
  font-size: 1.08rem;
  font-weight: 600;
  border: none;
  box-shadow: 0 2px 8px #00a0e333;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #00a0e3;
    color: #fff;
  }
`;

const MessageModalBg = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(30,40,70,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(3px);
`;

const MessageModalWrap = styled.div`
  position: relative;
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 40px rgba(40,150,255,0.18);
  padding: 28px 28px 22px 28px;
  min-width: 300px;
  max-width: 90vw;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageModalTitle = styled.div`
  font-size: 1.35rem;
  font-weight: 700;
  color: #00A0E3;
  margin-bottom: 0.45rem;
  text-align: center;
`;

const MessageModalRole = styled.div`
  font-size: 1.08rem;
  color: #263c62;
  text-align: center;
  margin-bottom: 1.3rem;
`;

const MessageMsg = styled.div`
  background: #fff;
  color: #263c62;
  border-radius: 12px;
  padding: 16px 18px;
  font-size: 1.09rem;
  font-style: italic;
  box-shadow: 0 2px 12px #00a0e322;
  text-align: center;
`;

const MessageCloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 22px;
  font-size: 1.6rem;
  background: none;
  border: none;
  color: #263c62;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.2s;
  &:hover { color: #ff3333; }
`;

// UPDATE THIS FUNCTION TO ACCEPT AND DISPLAY IMAGE:
function TeamMemberCard({ name, role, message, imgSrc, onMessageClick }) {
  return (
    <TeamCard>
      <ImgWrap>
        <Img>
          {imgSrc ? (
            <MemberImg src={imgSrc} alt={name} />
          ) : null}
        </Img>
      </ImgWrap>
      <Name>{name}</Name>
      <Role>{role}</Role>
      <MessageBtn onClick={onMessageClick}>
        Message
      </MessageBtn>
    </TeamCard>
  );
}

export default function Home() {
  const members = [
    {
      name: "Smt. S. Vandana",
      role: "Principal",
      message: "this is blank for now",
      imgSrc: vandanaImg
    },
    {
      name: "Smt. N. Spandana",
      role: "Vice-Principal",
      message: "this is blank for now",
      imgSrc: spandanaImg
    },
    {
      name: "Smt. Rani Rudrama Devi",
      role: "Vice-Chairperson",
      message: "this is blank for now",
      imgSrc: raniImg
    }
  ];

  const [messageIdx, setMessageIdx] = useState(null);

  return (
    <>
      <Hero>
        <GradientOverlay />
        <FadeBottom />
        <Content>
          <Title
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            Teachers Day Celebration 2025
          </Title>
          <Sub
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Honoring those who shape our future. Join us in celebrating our amazing teachers with special events, videos, and more!
          </Sub>
          <CTA to="/videos">Watch Videos</CTA>
        </Content>
      </Hero>
      {/* REPLACE ONLY THIS SECTION BELOW! */}
      <Section as={motion.section}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <h2>Why We Celebrate Teachers' Day</h2>
        <p>
          Teachers’ Day is celebrated every year on 5th September in India to honor the contribution of teachers in our lives. This date marks the birth anniversary of Dr. Sarvepalli Radhakrishnan, a great scholar, philosopher, and the second President of India. He believed that teachers are the true nation-builders and should be respected for their service.
        </p>
        <p>
          We celebrate Teachers’ Day to recognize the hard work and dedication of our teachers. They are not only responsible for giving us knowledge but also for shaping our character, values, and future. A good teacher inspires students to dream, work hard, and achieve success in life.
        </p>
        <p>
          Teachers’ Day also reminds us of the importance of education in building a strong nation. By honoring teachers, we express our gratitude and encourage them to continue their noble work with passion. For students, this day is a chance to show respect, love, and appreciation towards their mentors.
        </p>
        <p>
          In Indian culture, a teacher or “Guru” is considered even greater than God because they guide us from ignorance to knowledge. Therefore, celebrating Teachers’ Day is essential to keep this tradition alive and to remind us that without teachers, no society can progress.
        </p>
      </Section>
      {/* END OF REPLACEMENT SECTION */}
      <TeamSection>
        <h2 style={{ color: "#00A0E3", textAlign: "center", marginBottom: "2rem" }}>
          Our Management Team
        </h2>
        <TeamGrid>
          {members.map((m, i) => (
            <TeamMemberCard
              key={i}
              name={m.name}
              role={m.role}
              message={m.message}
              imgSrc={m.imgSrc}
              onMessageClick={() => setMessageIdx(i)}
            />
          ))}
        </TeamGrid>
      </TeamSection>
      {messageIdx !== null && (
        <MessageModalBg onClick={() => setMessageIdx(null)}>
          <MessageModalWrap onClick={e => e.stopPropagation()}>
            <MessageCloseBtn onClick={() => setMessageIdx(null)}>&times;</MessageCloseBtn>
            <MessageModalTitle>{members[messageIdx].name}</MessageModalTitle>
            <MessageModalRole>{members[messageIdx].role}</MessageModalRole>
            <MessageMsg>{members[messageIdx].message}</MessageMsg>
          </MessageModalWrap>
        </MessageModalBg>
      )}
    </>
  );
}
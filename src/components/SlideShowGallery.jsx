import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NAVBAR_HEIGHT = 80;

const SlideshowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 540px;
  width: 100%;
  padding-top: ${NAVBAR_HEIGHT + 24}px;
  padding-bottom: 32px;
  box-sizing: border-box;
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 850px;
  min-height: 440px;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 8px 36px #0004;
  background: linear-gradient(120deg, #1f2235 70%, #263c62 100%);
  display: flex;
  align-items: center;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 440px;
  object-fit: cover;
  border-radius: 24px;
  transition: opacity 0.7s cubic-bezier(.55,0,.1,1);
  opacity: ${props => props.$active ? 1 : 0};
  position: absolute;
  left: 0; top: 0;
`;

const ArrowBase = css`
  position: absolute;
  top: 50%;
  z-index: 3;
  background: rgba(30,38,54,0.75);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px #0003;
  transform: translateY(-50%);
  transition: background 0.2s;
  &:hover { background: #00a0e3; }
`;

const LeftArrow = styled.button`
  ${ArrowBase}
  left: 22px;
`;

const RightArrow = styled.button`
  ${ArrowBase}
  right: 22px;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
`;

const Dot = styled.span`
  display: inline-block;
  width: 13px; height: 13px;
  margin: 0 7px;
  border-radius: 50%;
  background: ${p => p.$active ? "#00a0e3" : "#fff8"};
  border: 2px solid #fff5;
  box-shadow: 0 2px 10px #0002;
  cursor: pointer;
  transition: all .2s;
`;

export default function SlideshowGallery({ slides }) {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!hovered) {
      timer.current = setTimeout(() => {
        setIdx(idx === slides.length - 1 ? 0 : idx + 1);
      }, 3000);
    }
    return () => clearTimeout(timer.current);
  }, [idx, hovered, slides.length]);

  function prev() { setIdx(idx === 0 ? slides.length - 1 : idx - 1); }
  function next() { setIdx(idx === slides.length - 1 ? 0 : idx + 1); }
  function goTo(i) { setIdx(i); }
  function handleMouseEnter() { setHovered(true); }
  function handleMouseLeave() { setHovered(false); }

  if (!slides || slides.length === 0) return <div>No photos found!</div>;

  return (
    <SlideshowWrapper>
      <SlideContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {slides.map((slide, i) => (
          <SlideImg
            key={i}
            src={slide.img}
            alt={slide.name || "Gallery Image"}
            $active={i === idx}
            style={{zIndex: i === idx ? 1 : 0}}
          />
        ))}
        <LeftArrow onClick={prev}><FaChevronLeft /></LeftArrow>
        <RightArrow onClick={next}><FaChevronRight /></RightArrow>
        <Dots>
          {slides.map((s, i) => (
            <Dot key={i} $active={i === idx} onClick={() => goTo(i)} />
          ))}
        </Dots>
      </SlideContainer>
    </SlideshowWrapper>
  );
}
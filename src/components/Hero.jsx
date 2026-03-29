import React from 'react';
import styled, { keyframes } from 'styled-components';

const revealUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


const HeroSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  max-width: 100vw;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center top;
  z-index: 0;
  pointer-events: none;
  max-width: 100vw;
`;

const HeroTextBlock = styled.div`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding-bottom: 1.5rem;
  }
`;

const HeroTextInner = styled.div`
  font-family: 'OCR-B Std', 'OCR B Std', monospace;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #222;
  line-height: 1.2;
  padding: 1.1rem 0 1.2rem 2.5vw;
  text-align: left;
  max-width: none;
  margin: 0;
  box-sizing: border-box;
  @media (max-width: 900px) {
    padding-left: 4vw;
    padding-right: 2vw;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
    padding-left: 4vw;
    padding-right: 2vw;
    padding-bottom: 0.5rem;
  }
`;

const TextLine = styled.span`
  display: block;
  overflow: hidden;
`;

const TextReveal = styled.span`
  display: block;
  animation: ${revealUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
`;

const Hero = () => {
  return (
    <HeroSection>
      <VideoBackground
        src="https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/index/Landing%20header%20MOV%20to%20MP4.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Hero video"
      />
      <HeroTextBlock>
        <HeroTextInner>
          <TextLine>
            <TextReveal delay="0.2s">The Infrastructure Beneath</TextReveal>
          </TextLine>
          <TextLine>
            <TextReveal delay="0.4s">Digital Trust</TextReveal>
          </TextLine>
        </HeroTextInner>
      </HeroTextBlock>
    </HeroSection>
  );
};

export default Hero; 
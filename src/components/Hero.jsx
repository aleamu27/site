import React from 'react';
import styled from 'styled-components';


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
  font-family: 'Inter', 'system-ui', 'Arial', sans-serif;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #222;
  line-height: 1.13;
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

const HeroSubText = styled.span`
  color: #b3b3b3;
`;

const Hero = () => {
  return (
    <HeroSection>
      <VideoBackground
        src="https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Landing%20header.mov"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Hero video"
      />
      <HeroTextBlock>
        <HeroTextInner>
          Hepta builds private software, custom interfaces, and local AI systems. <HeroSubText>Made for you.</HeroSubText>
        </HeroTextInner>
      </HeroTextBlock>
    </HeroSection>
  );
};

export default Hero; 
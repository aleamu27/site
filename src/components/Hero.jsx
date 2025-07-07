import React, { useRef, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

// Colors for the stripes (approximate to Bakken & Bæck)
const STRIPES = [
  '#4A90E2', // blue
  '#F5D547', // yellow
  '#E6E3F7', // light purple
  '#F44F3B', // orange
  '#2D2553', // dark purple
  '#FFFCCB', // pale yellow
  '#5FC39B', // green
  '#F7D6DE', // pink
];

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
  z-index: 1;
`;

const Stripe = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  top: ${props => props.top}%;
  background: ${props => props.color};
  z-index: 3;
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
  line-height: 1.1;
  color: #184B54;
  letter-spacing: -0.02em;
  width: calc(100vw - 4rem);
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 600px) {
    width: calc(100vw - 2rem);
    padding: 1rem;
    font-size: clamp(1.8rem, 6vw, 2.5rem);
  }
`;

const BrandSpan = styled.span`
  font-weight: 600;
`;

const AmpersandSpan = styled.span`
  font-weight: 300;
  color: #666;
`;

// Navbar height for positioning calculations
const NAVBAR_HEIGHT = 80; // Adjust based on your navbar

function Hero() {
  return (
    <HeroSection>
      <VideoBackground
        src="https://abjqpsfntaj87pig3vhz92t21alieh.blob.vercel-storage.com/hero-video-abjQPSfntaj87pIG3VHZ92T21alIeh.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <HeroTextBlock>
        <HeroTextInner>
          We make, move & think
        </HeroTextInner>
      </HeroTextBlock>
    </HeroSection>
  );
}

export default Hero; 
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { COLORS } from '../styles/colors';

const HeroTextBlock = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 4vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 2.5rem 0;
`;

const HeroTextInner = styled.div`
  font-family: 'Inter', 'system-ui', 'Arial', sans-serif;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #222;
  line-height: 1.13;
  padding: 1.1rem 0 1.2rem 0;
  text-align: left;
  max-width: 1200px;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const HeroSubText = styled.span`
  color: #b3b3b3;
`;

const Section = styled.section`
  max-width: 700px;
  margin: 12rem auto 0 auto;
  padding: 0 15px;
`;

const SectionHeading = styled.h2`
  font-size: 1.35rem;
  font-weight: 500;
  color: #222;
  margin: 0 0 1.2rem 0;
`;

const SectionText = styled.p`
  font-size: 1.18rem;
  color: #b3b3b3;
  margin: 0 0 2.2rem 0;
  line-height: 1.6;
`;

const WorkGridWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40vh;
  margin-bottom: 5rem;
  @media (max-width: 700px) {
    margin-top: 30vh;
    margin-bottom: 2.5rem;
  }
`;

const WorkGridSection = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ImagePlaceholderBox = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 60vh;
  min-height: 400px;
  background: ${COLORS.green};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 1.3rem;
  font-weight: 500;
  margin-left: 0;
  margin-bottom: 2.5rem;
  box-sizing: border-box;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pushUp = keyframes`
  from {
    transform: translateY(18px);
  }
  to {
    transform: translateY(0);
  }
`;

const CapabilitiesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 4vw;
  box-sizing: border-box;
  margin: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 900px) {
    margin: 4rem 0;
  }
`;

const CapabilitiesHeaderFragment = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.3rem);
  font-weight: 400;
  color: #222;
  line-height: 1.3;
  text-align: left;
  max-width: 800px;
  margin-bottom: 6rem;
  margin-left: 35%;
  @media (max-width: 900px) {
    margin-left: 0;
    margin-bottom: 4rem;
  }
`;

const CapabilitiesSub = styled.span`
  color: #b3b3b3;
`;

const StrategyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 35%;
  max-width: 550px;
  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

const StrategyTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 1.5rem 0;
`;

const StrategyDescription = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  color: #333;
  margin: 0 0 2rem 0;
`;

const StrategyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StrategyItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #222;
  
  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid #ccc;
    border-radius: 50%;
    margin-right: 15px;
    flex-shrink: 0;
  }
`;

const STRATEGY_ITEMS = [
  "Product Strategy",
  "Brand + Content Strategy",
  "Insight Development",
  "Customer validation",
  "Emerging Tech Discovery",
  "Rapid Prototyping"
];

const About = () => {
  return (
    <>
      <WorkGridWrapper>
        <WorkGridSection>
          <HeroTextBlock>
            <HeroTextInner>
              <HeroSubText>About.</HeroSubText> Using tech and design as our tools, we help companies break new grounds.
            </HeroTextInner>
            <ImagePlaceholderBox />
          </HeroTextBlock>
        </WorkGridSection>

        <CapabilitiesContainer>
          <CapabilitiesHeaderFragment>
            <CapabilitiesSub>Capabilities.</CapabilitiesSub> From design systems to full stack development, we do what it takes to build the best products.
          </CapabilitiesHeaderFragment>

          <StrategyContainer>
            <StrategyTitle>Strategy</StrategyTitle>
            <StrategyDescription>
              Combining our hands-on knowledge of emerging technologies with our experience building new businesses and products, we help companies grow into new markets.
            </StrategyDescription>
            <StrategyList>
              {STRATEGY_ITEMS.map((item, idx) => (
                <StrategyItem key={idx}>{item}</StrategyItem>
              ))}
            </StrategyList>
          </StrategyContainer>
        </CapabilitiesContainer>
      </WorkGridWrapper>
    </>
  );
};

export default About;
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

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0 auto 7rem auto;
  max-width: 600px;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background: ${({ active }) => (active ? COLORS.green : '#F5F5F5')};
  border-radius: 2px;
  padding: 2.2rem 2.5rem;
  height: 135px;
  box-sizing: border-box;
  transition: background 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
  margin: 0.2rem 0 0 0;
  cursor: pointer;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.2rem 1rem;
    height: 160px;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-size: 1.13rem;
  font-weight: 600;
  margin: 0 0 0.7rem 0;
  ${({ active }) =>
    active &&
    css`
      animation: ${pushUp} 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
    `}
`;

const CardDesc = styled.p`
  font-size: 1rem;
  margin: 0;
  min-height: 3.6em;
  max-height: 3.6em;
  overflow: hidden;
  transition: color 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
  animation: ${fadeInUp} 0.22s cubic-bezier(0.4, 0.2, 0.2, 1);
`;

const ABOUT_CARDS = [
  {
    title: 'AI Team',
    desc: 'Our AI specialists and data scientists design, build, and deploy custom models for your business.'
  },
  {
    title: 'Developers',
    desc: 'Full-stack engineers and architects deliver robust, scalable software and web solutions.'
  },
  {
    title: 'Automation Experts',
    desc: 'Automation engineers and workflow specialists streamline your processes and integrate your tools.'
  },
  {
    title: 'Production Crew',
    desc: 'Producers, editors, and creatives bring your content and video projects to life.'
  },
  {
    title: 'Designers',
    desc: 'UI/UX and brand designers craft beautiful, intuitive digital experiences for your users.'
  },
];

const SECTION_TITLES = [
  'Custom AI',
  'Development',
  'Automation',
  'Production',
  'Design',
];

const SECTION_PARAGRAPHS = [
  'We design and build AI solutions tailored to your business, giving you full control over your data, models, and deployment. From private LLMs to workflow automation, we help you unlock the power of AI on your terms.',
  'Our engineering team delivers robust, scalable web and software solutions. We handle everything from backend APIs to modern frontends, ensuring your product is fast, secure, and ready to grow.',
  'We automate repetitive tasks and complex workflows, integrating your tools and data so you can focus on what matters. Our automations are reliable, secure, and built to fit your unique needs.',
  'From video to digital content, we help you create, launch, and scale your brand\'s story. Our production team brings ideas to life with creativity, speed, and technical excellence.',
  'We craft digital experiences that are beautiful, intuitive, and effective. Our design team works closely with you to turn ideas into products people love to use.'
];

const About = () => {
  const [openCard, setOpenCard] = React.useState(0);
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
      </WorkGridWrapper>
      <CardGrid>
        {[0, 1, 2, 3, 4].map((idx) => (
          <React.Fragment key={idx}>
            <Section>
              <SectionHeading>{SECTION_TITLES[idx]}</SectionHeading>
              <SectionText>{SECTION_PARAGRAPHS[idx]}</SectionText>
            </Section>
            <Card
              active={openCard === idx}
              onMouseEnter={() => setOpenCard(idx)}
              onFocus={() => setOpenCard(idx)}
              tabIndex={0}
              aria-label={ABOUT_CARDS[idx].title}
            >
              <CardContent>
                <CardTitle active={openCard === idx}>{ABOUT_CARDS[idx].title}</CardTitle>
                {openCard === idx && <CardDesc>{ABOUT_CARDS[idx].desc}</CardDesc>}
              </CardContent>
            </Card>
          </React.Fragment>
        ))}
      </CardGrid>
    </>
  );
};

export default About;
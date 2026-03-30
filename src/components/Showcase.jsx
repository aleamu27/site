import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const INTERVAL_DURATION = 5000; // 5 seconds

const progressFill = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const ShowcaseWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 0 15px;
`;

const Tab = styled.button`
  position: relative;
  background: transparent;
  border: 1px solid ${props => props.$active ? '#222' : '#ddd'};
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  font-family: 'Menlo', 'Monaco', monospace;
  font-size: 0.9rem;
  color: ${props => props.$active ? '#222' : '#999'};
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    border-color: #222;
    color: #222;
  }
`;

const TabProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #222;
  animation: ${progressFill} ${INTERVAL_DURATION}ms linear forwards;
`;

const ShowcaseCard = styled.div`
  background: #1a1a1a;
  border-radius: 8px;
  margin: 0 15px;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const CardContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

const ProjectLabel = styled.div`
  font-family: 'Menlo', 'Monaco', monospace;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
`;

const ProjectTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 400;
  color: #fff;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: opacity 0.2s ease;

  &:after {
    content: '↗';
    font-size: 1.2rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #1a1a1a;

  @media (max-width: 900px) {
    min-height: 300px;
    padding: 1.5rem;
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 4px;

  @media (max-width: 900px) {
    max-height: 280px;
  }
`;

const DetailsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: #1a1a1a;

  @media (max-width: 900px) {
    padding: 1.5rem 2rem;
    gap: 1.5rem;
  }
`;

const DetailItem = styled.div``;

const DetailLabel = styled.div`
  font-family: 'Menlo', 'Monaco', monospace;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`;

const DetailText = styled.div`
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.5;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailListItem = styled.li`
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.6;

  &:before {
    content: '→ ';
    opacity: 0.5;
  }
`;

// Showcase data
const SHOWCASE_DATA = [
  {
    id: 'silmaril',
    tabName: 'Silmaril',
    label: 'SILMARIL',
    title: 'Surveillance That Watches, Wherever, Whenever.',
    link: '/silmaril',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Silmaril%20fra%20Alex%20Bolgen%20Amundsen.png',
    details: {
      tagline: 'DEFINING THE WAY OF SECURING SYSTEMS AND SOFTWARE.',
      builtTo: [
        'Monitor without interruption',
        'Surface what matters',
        'Keep you informed'
      ],
      description: 'Enhances situational awareness. Knowing exactly what your digital surface looks like at any given moment, before someone else finds out for you.'
    }
  },
  {
    id: 'development',
    tabName: 'Development',
    label: 'DEVELOPMENT',
    title: 'Building Digital Products That Scale.',
    link: '/development',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Silmaril%20fra%20Alex%20Bolgen%20Amundsen.png',
    details: {
      tagline: 'FROM CONCEPT TO PRODUCTION.',
      builtTo: [
        'Move fast without breaking things',
        'Scale with confidence',
        'Iterate based on data'
      ],
      description: 'End-to-end development services that turn your vision into reality with modern technology stacks.'
    }
  },
  {
    id: 'client1',
    tabName: 'Client.1',
    label: 'CLIENT PROJECT',
    title: 'Transforming Operations Through Automation.',
    link: '/work',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Silmaril%20fra%20Alex%20Bolgen%20Amundsen.png',
    details: {
      tagline: 'ENTERPRISE AUTOMATION.',
      builtTo: [
        'Reduce manual processes',
        'Increase efficiency',
        'Enable scale'
      ],
      description: 'Custom automation solutions that free your team to focus on what matters most.'
    }
  },
  {
    id: 'client2',
    tabName: 'Client.2',
    label: 'CLIENT PROJECT',
    title: 'Design Systems That Unify Experience.',
    link: '/work',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Silmaril%20fra%20Alex%20Bolgen%20Amundsen.png',
    details: {
      tagline: 'DESIGN + DEVELOPMENT.',
      builtTo: [
        'Create consistency',
        'Accelerate development',
        'Enhance user experience'
      ],
      description: 'Comprehensive design systems that bring cohesion to complex product ecosystems.'
    }
  }
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const goToNext = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % SHOWCASE_DATA.length);
      setIsAnimating(true);
    }, 50);
  }, []);

  const handleTabClick = (index) => {
    setIsAnimating(false);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(true);
    }, 50);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, INTERVAL_DURATION);
    return () => clearInterval(timer);
  }, [goToNext]);

  const activeShowcase = SHOWCASE_DATA[activeIndex];

  return (
    <ShowcaseWrapper>
      <TabsContainer>
        {SHOWCASE_DATA.map((item, index) => (
          <Tab
            key={item.id}
            $active={index === activeIndex}
            onClick={() => handleTabClick(index)}
          >
            {item.tabName}
            {index === activeIndex && isAnimating && (
              <TabProgress key={`progress-${activeIndex}`} />
            )}
          </Tab>
        ))}
      </TabsContainer>

      <ShowcaseCard>
        <CardContent>
          <ProjectLabel>{activeShowcase.label}</ProjectLabel>
          <ProjectTitle>{activeShowcase.title}</ProjectTitle>
          <ProjectLink to={activeShowcase.link}>
            Learn more
          </ProjectLink>
        </CardContent>
        <CardImageContainer>
          <CardImage
            src={activeShowcase.image}
            alt={activeShowcase.tabName}
          />
        </CardImageContainer>
      </ShowcaseCard>

      <div style={{ margin: '0 15px', borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
        <DetailsBar>
          <DetailItem>
            <DetailLabel>About</DetailLabel>
            <DetailText>{activeShowcase.details.tagline}</DetailText>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Built to</DetailLabel>
            <DetailList>
              {activeShowcase.details.builtTo.map((item, i) => (
                <DetailListItem key={i}>{item}</DetailListItem>
              ))}
            </DetailList>
          </DetailItem>
          <DetailItem>
            <DetailText>{activeShowcase.details.description}</DetailText>
          </DetailItem>
        </DetailsBar>
      </div>
    </ShowcaseWrapper>
  );
};

export default Showcase;

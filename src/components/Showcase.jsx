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
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  padding: 4rem 0;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 0 2rem;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
`;

const Tab = styled.button`
  position: relative;
  background: transparent;
  border: 1px solid ${props => props.$active ? '#222' : '#ddd'};
  border-radius: 4px;
  padding: 0.7rem 1.4rem;
  font-family: 'Menlo', 'Monaco', monospace;
  font-size: 0.95rem;
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

const ShowcaseCard = styled(Link)`
  display: block;
  margin: 0 2rem;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.003);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    margin: 0 1rem;
    border-radius: 8px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

// Showcase data - each item has an image that represents the full card
const SHOWCASE_DATA = [
  {
    id: 'silmaril',
    tabName: 'Silmaril',
    link: '/silmaril',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Silmaril%20fra%20Alex%20Bolgen%20Amundsen.png',
  },
  {
    id: 'development',
    tabName: 'Development',
    link: '/development',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Alternativer%20til%20nettside.png',
  },
  {
    id: 'client1',
    tabName: 'Client.1',
    link: '/work',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Silmaril%20fra%20Alex%20Bolgen%20Amundsen.png',
  },
  {
    id: 'client2',
    tabName: 'Client.2',
    link: '/work',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Silmaril%20fra%20Alex%20Bolgen%20Amundsen.png',
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

      <ShowcaseCard to={activeShowcase.link}>
        <CardImage
          src={activeShowcase.image}
          alt={activeShowcase.tabName}
        />
      </ShowcaseCard>
    </ShowcaseWrapper>
  );
};

export default Showcase;

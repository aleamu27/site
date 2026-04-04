import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ClientShowcaseCard from './ClientShowcaseCard';

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

const ClientCardWrapper = styled.div`
  margin: 0 2rem;
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

// Showcase data
const SHOWCASE_DATA = [
  {
    id: 'silmaril',
    tabName: 'Silmaril',
    type: 'image',
    link: '/silmaril',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Silmaril%20fra%20Alex%20Bolgen%20Amundsen.png',
  },
  {
    id: 'development',
    tabName: 'Development',
    type: 'image',
    link: '/development',
    image: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Alternativer%20til%20nettside.png',
  },
  {
    id: 'client1',
    tabName: 'Client.1',
    type: 'client',
    label: 'Client.1',
    title: 'A Look at What We Have Built for Criterion.',
    videoSrc: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Client.mov',
    sections: [
      {
        title: 'The story',
        content: 'Criterion Property Group is a real estate team operating in the Austin, Texas area. They needed a digital presence that matched their professionalism and made it easy for clients to explore properties and connect with the team.',
        author: null
      },
      {
        title: 'The problem',
        content: 'Their existing website was outdated, slow, and didn\'t reflect the quality of their work. Property listings were hard to manage, and the site wasn\'t optimized for the way modern buyers search for homes.',
        author: null
      },
      {
        title: 'The solution',
        content: 'Hepta designed and built a full web platform tailored to how Criterion actually operates. Custom property search, MLS integration, dedicated golf community pages, and a clean team presence delivered in a system that is fast, maintainable, and built to grow with them.',
        author: 'Alexander Amundsen'
      }
    ],
    externalLink: 'https://criterionpropertygroup.com',
    externalLinkText: 'CRITERIONPROPERTYGROUP.COM'
  }
];

const Showcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const activeShowcase = SHOWCASE_DATA[activeIndex];

  const renderShowcaseContent = () => {
    if (activeShowcase.type === 'client') {
      return (
        <ClientCardWrapper>
          <ClientShowcaseCard
            label={activeShowcase.label}
            title={activeShowcase.title}
            videoSrc={activeShowcase.videoSrc}
            sections={activeShowcase.sections}
            externalLink={activeShowcase.externalLink}
            externalLinkText={activeShowcase.externalLinkText}
          />
        </ClientCardWrapper>
      );
    }

    return (
      <ShowcaseCard to={activeShowcase.link}>
        <CardImage
          src={activeShowcase.image}
          alt={activeShowcase.tabName}
        />
      </ShowcaseCard>
    );
  };

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
          </Tab>
        ))}
      </TabsContainer>

      {renderShowcaseContent()}
    </ShowcaseWrapper>
  );
};

export default Showcase;

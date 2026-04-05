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
  padding: 0 2.5vw;
`;

const Tab = styled.button`
  position: relative;
  background: transparent;
  border: 1px solid ${props => props.$active ? '#222' : '#ddd'};
  border-radius: 4px;
  padding: 0.7rem 1.4rem;
  font-family: 'OCR-B', 'OCR B', monospace;
  font-size: 0.95rem;
  color: ${props => props.$active ? '#222' : '#999'};
  cursor: pointer;
`;

const ShowcaseCard = styled(Link)`
  display: block;
  margin: 0 2.5vw;
  text-decoration: none;
`;

const CardImage = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
  display: block;
  border-radius: 0.3vw;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const ClientCardWrapper = styled.div`
  margin: 0 2.5vw;
`;

// Showcase data
const SHOWCASE_DATA = [
  {
    id: 'development',
    tabName: 'Development',
    type: 'client',
    label: 'Development',
    title: 'Infrastructure Built to Last, Engineered to Perform.',
    imageSrc: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Alternativer%20til%20nettside.png',
    sections: [
      {
        title: 'Websites',
        content: 'Custom-built web platforms designed for performance, security, and scale. No templates, no shortcuts.',
        author: null
      },
      {
        title: 'Systems',
        content: 'Backend infrastructure, APIs, and integrations that power your business operations reliably.',
        author: null
      },
      {
        title: 'Security',
        content: 'Security-first development practices ensuring your digital assets are protected from day one.',
        author: null
      }
    ],
    externalLink: '/development',
    externalLinkText: 'LEARN MORE'
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
  },
  {
    id: 'client2',
    tabName: 'Client.2',
    type: 'client',
    label: 'Client.2',
    title: 'A Look at What We Have Built for BE:RG.',
    imageSrc: 'https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/Showcase/Gloin.png',
    sections: [
      {
        title: 'The story',
        content: 'BE:RG is a private equity firm focused on industrial technology and scalable business models. Their engagements span from marine and maritime sectors to software and digital solutions.',
        author: null
      },
      {
        title: 'The problem',
        content: 'Håkon André Berg had spent nearly two decades building expertise across private equity, aquaculture, maritime technology, and industrial software. The credibility was there. The track record was there. What was missing was a digital presence that could communicate it. Something that gave potential partners and portfolio companies a clear, authoritative first impression before any conversation began.',
        author: null
      },
      {
        title: 'The solution',
        content: 'Hepta designed and built a web presence that reflects the depth and seriousness of BE:RG\'s work. Clean, structured, and built to present their portfolio and engagements with clarity.',
        author: 'Alexander Amundsen'
      }
    ],
    externalLink: 'https://be-rg.com',
    externalLinkText: 'BE:RG.COM'
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
            imageSrc={activeShowcase.imageSrc}
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

import React, { useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const CardHeader = styled.div`
  padding: 2.5rem 3rem;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }
`;

const ClientLabel = styled.div`
  font-family: 'Menlo', 'Monaco', monospace;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ClientTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 400;
  color: #222;
  line-height: 1.2;
  margin: 0;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  &:after {
    content: '↗';
    font-size: 0.8em;
    opacity: 0.6;
  }
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  min-height: 500px;
  gap: 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 350px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  background: #1a1a1a;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  @media (max-width: 900px) {
    min-height: 300px;
  }
`;

const PlayPauseButton = styled.button`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    transform: scale(1.05);
  }

  svg {
    width: 18px;
    height: 18px;
    fill: #222;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    border-top: 1px solid #eee;
  }
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #eee;

  &:last-of-type {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: ${props => props.$isOpen ? '#fafafa' : '#fff'};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 500;
  color: #222;
  text-align: left;
  transition: background 0.2s ease;

  &:hover {
    background: #fafafa;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

const AccordionIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(90deg)' : 'rotate(0)'};
`;

const AccordionContent = styled.div`
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const AccordionInner = styled.div`
  padding: 0 2rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
`;

const AccordionText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin: 0 0 1.5rem 0;
`;

const AccordionAuthor = styled.div`
  font-family: 'Georgia', serif;
  font-style: italic;
  font-size: 0.95rem;
  color: #888;
`;

const ExternalLink = styled.a`
  display: block;
  padding: 1.5rem 2rem;
  background: #222;
  color: #fff;
  text-decoration: none;
  font-family: 'Menlo', 'Monaco', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-align: center;
  transition: background 0.2s ease;
  margin-top: auto;

  &:hover {
    background: #333;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

const ClientShowcaseCard = ({
  label = "Client.1",
  title = "A Look at What We Have Built for Criterion.",
  videoSrc,
  sections = [],
  externalLink,
  externalLinkText
}) => {
  const [openSection, setOpenSection] = useState(2); // Default to "The solution" (index 2)
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = React.useRef(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <CardWrapper>
      <CardHeader>
        <ClientLabel>{label}</ClientLabel>
        <ClientTitle>{title}</ClientTitle>
      </CardHeader>

      <CardContent>
        <VideoContainer>
          <Video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          <PlayPauseButton onClick={togglePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </PlayPauseButton>
        </VideoContainer>

        <Sidebar>
          {sections.map((section, index) => (
            <AccordionItem key={index}>
              <AccordionHeader
                $isOpen={openSection === index}
                onClick={() => toggleSection(index)}
              >
                {section.title}
                <AccordionIcon $isOpen={openSection === index}>↗</AccordionIcon>
              </AccordionHeader>
              <AccordionContent $isOpen={openSection === index}>
                <AccordionInner>
                  <AccordionText>{section.content}</AccordionText>
                  {section.author && (
                    <AccordionAuthor>– {section.author}</AccordionAuthor>
                  )}
                </AccordionInner>
              </AccordionContent>
            </AccordionItem>
          ))}

          {externalLink && (
            <ExternalLink href={externalLink} target="_blank" rel="noopener noreferrer">
              {externalLinkText || externalLink}
            </ExternalLink>
          )}
        </Sidebar>
      </CardContent>
    </CardWrapper>
  );
};

export default ClientShowcaseCard;

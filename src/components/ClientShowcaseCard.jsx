import React, { useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #FEFEFE;
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 16px 20px;
  background: #F5F5F5;
  border-radius: 5px;
  margin: 0 0 16px 0;
  width: fit-content;

  @media (max-width: 768px) {
    padding: 12px 16px;
    margin: 16px 12px 16px 12px;
  }
`;

const ClientLabel = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #1B1C1E;
  letter-spacing: 0.11em;
  margin-bottom: 1rem;
`;

const ClientTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 38px;
  font-weight: 300;
  color: #1B1C1E;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0;
  max-width: 520px;
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  height: 560px;
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 350px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding: 0 0 16px 0;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 900px) {
    min-height: 350px;
    padding: 0 0 12px 0;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% -8px;
  display: block;
  border-radius: 8px;

  @media (max-width: 900px) {
    min-height: 300px;
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  border-radius: 8px;

  @media (max-width: 900px) {
    min-height: 300px;
  }
`;

const PlayPauseButton = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
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
    width: 14px;
    height: 14px;
    fill: #222;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
  padding-bottom: 16px;

  @media (max-width: 900px) {
    padding-bottom: 12px;
  }
`;

const AccordionItem = styled.div`
  background: #F5F5F5;
  border-radius: 6px;
  overflow: hidden;
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 1rem 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1B1C1E;
  text-align: left;
`;

const AccordionIcon = styled.span`
  font-size: 1.1rem;
  line-height: 1;
  color: #1B1C1E;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
`;

const AccordionContent = styled.div`
  overflow: hidden;
  transition: height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const AccordionInner = styled.div`
  padding: 0 1.25rem 1.25rem 1.25rem;
`;

const AccordionText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.337;
  letter-spacing: 0;
  color: #000000;
  margin: 0 0 1rem 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const AccordionAuthor = styled.div`
  font-family: 'Georgia', serif;
  font-style: italic;
  font-size: 0.9rem;
  color: #888;
  margin-top: 0.75rem;
`;

const LinkRow = styled.div`
  padding-top: 6px;
`;

const ExternalLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #1B1C1E;
  color: #fff;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: #333;
  }
`;

const AccordionItemAnimated = ({ section, index, isOpen, onToggle }) => {
  const innerRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (innerRef.current) {
      setHeight(innerRef.current.scrollHeight);
    }
  }, [section.content]);

  return (
    <AccordionItem>
      <AccordionHeader onClick={() => onToggle(index)}>
        {section.title}
        <AccordionIcon>{isOpen ? '⊗' : '⊕'}</AccordionIcon>
      </AccordionHeader>
      <AccordionContent style={{ height: isOpen ? height : 0 }}>
        <AccordionInner ref={innerRef}>
          {section.content.split('\n\n').map((para, i) => (
            <AccordionText key={i}>{para}</AccordionText>
          ))}
          {section.author && (
            <AccordionAuthor>– {section.author}</AccordionAuthor>
          )}
        </AccordionInner>
      </AccordionContent>
    </AccordionItem>
  );
};

const ClientShowcaseCard = ({
  label = "Client.1",
  title = "A Look at What We Have Built for Criterion.",
  videoSrc,
  imageSrc,
  sections = [],
  externalLink,
  externalLinkText
}) => {
  const [openSection, setOpenSection] = useState(0);
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
        <ClientTitle>
          <span>{title}</span>
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px' }}>
            <line x1="2" y1="18" x2="17" y2="3" stroke="#1B1C1E" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="17" y1="3" x2="6" y2="3" stroke="#1B1C1E" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="17" y1="3" x2="17" y2="14" stroke="#1B1C1E" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </ClientTitle>
      </CardHeader>

      <CardContent>
        <VideoContainer>
          {videoSrc ? (
            <>
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
            </>
          ) : (
            <MediaImage src={imageSrc} alt={label} />
          )}
        </VideoContainer>

        <Sidebar>
          {sections.map((section, index) => (
            <AccordionItemAnimated
              key={index}
              section={section}
              index={index}
              isOpen={openSection === index}
              onToggle={toggleSection}
            />
          ))}

          {externalLink && (
            <LinkRow>
              <ExternalLink href={externalLink} target="_blank" rel="noopener noreferrer">
                {externalLinkText || externalLink}
              </ExternalLink>
            </LinkRow>
          )}
        </Sidebar>
      </CardContent>
    </CardWrapper>
  );
};

export default ClientShowcaseCard;

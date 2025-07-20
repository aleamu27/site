import React from 'react';
import styled from 'styled-components';
import VideoPlaceholder from '../components/VideoPlaceholder';
import { COLORS } from '../styles/colors';
import { Link } from 'react-router-dom';

const WorkGridWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 5rem;
  @media (max-width: 700px) {
    margin-top: 6rem;
    margin-bottom: 2.5rem;
  }
`;

const WorkGridSection = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  width: 100vw;
  max-width: 100vw;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  justify-content: center;
  margin-bottom: 4rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 0.75rem;
  }
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const VideoPlaceholderBox = styled.div`
  flex: 1;
  aspect-ratio: 4 / 5;
  min-width: 336px;
  min-height: 420px;
  background: #eee;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 1.3rem;
  font-weight: 500;
`;

const VideoLabel = styled.div`
  text-align: left;
  font-size: 1.22rem;
  color: #b3b3b3;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const CTASectionWrapper = styled.section`
  width: 100%;
  padding: 2rem 15px;
  background: ${COLORS.green};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 2.5rem;
  margin: 0 auto 0 auto;
  max-width: 100vw;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
`;

const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const CTAHeading = styled.h2`
  color: #222;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 0.7rem 0;
  line-height: 1.1;
`;

const CTASubheading = styled.div`
  color: #222;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2.2rem;
`;

const CTAButton = styled(Link)`
  background: #222;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 1.1rem 2.5rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 0.5rem;
`;

const CTAImage = styled.div`
  width: 370px;
  height: 260px;
  background: #eee;
  border-radius: 3px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #bbb;
  @media (max-width: 700px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-width: 0;
  }
`;

const HeroTextBlock = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 0 2.5rem 0;
`;

const HeroTextInner = styled.div`
  font-family: 'Inter', 'system-ui', 'Arial', sans-serif;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #222;
  line-height: 1.13;
  padding: 1.1rem 0 1.2rem 2.5vw;
  text-align: left;
  max-width: 1200px;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    padding-left: 4vw;
    padding-right: 2vw;
  }
`;

const HeroSubText = styled.span`
  color: #b3b3b3;
`;

const videoLabels = [
  'Dashboard', 'App', 'Website',
  'Game', 'Landing Page', 'Demo',
  'Webapp', 'Automation', 'Production'
];

const CTAImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
`;

const Work = () => (
  <>
    <WorkGridWrapper>
      <WorkGridSection>
        <HeroTextBlock>
          <HeroTextInner>
            A quick look at what we've <HeroSubText>built</HeroSubText>, how we <HeroSubText>work</HeroSubText>, and where we're <HeroSubText>headed</HeroSubText>.
          </HeroTextInner>
        </HeroTextBlock>
        <VideoGrid>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-dashboard-DObhOMr87tQ2jCK3sTQ4vj8qNhqPyM.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>Dashboard</VideoLabel>
          </VideoItem>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-app-Te6qBTjygsEZsVgyXd7rw77M0Z2Fii.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>App</VideoLabel>
          </VideoItem>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-website-QNBdE8wnQSAV9Ge4ctXmqvY6Z2cVfA.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>Website</VideoLabel>
          </VideoItem>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-game-vCCzpSsM9zQDXwewR2YieljQi45b9g.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>Game</VideoLabel>
          </VideoItem>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-landing-page-yAhWVFz2GOS7xltyTjYOwJTeFtkaSe.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>Landing Page</VideoLabel>
          </VideoItem>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-demo-3NiOB5ays19lrZsc6nRpbfMMDQH9OU.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>Demo</VideoLabel>
          </VideoItem>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-webapp-3Zp1qYmioA5X1MU5ktJYqxLYfnAtIr.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>Webapp</VideoLabel>
          </VideoItem>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-automation-mcXT2iReQf8iA2oH8mI6oMT8Pu6vRz.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>Automation</VideoLabel>
          </VideoItem>
          <VideoItem>
            <VideoPlaceholderBox as="video"
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-production-G4yhn9Efgvt6hahrt76e6SNevicLiZ.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
            />
            <VideoLabel>Production</VideoLabel>
          </VideoItem>
        </VideoGrid>
      </WorkGridSection>
    </WorkGridWrapper>
    <CTASectionWrapper>
      <CTAImageContainer>
        <CTAContent>
          <CTAHeading>Want to work with us?</CTAHeading>
          <CTASubheading>We'd love to hear your ideas!</CTASubheading>
          <CTAButton to="/contact">Get in touch</CTAButton>
        </CTAContent>
        <CTAImage>
          <img src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/cta-image-rcmDlRliiqF8KckKKnj5vOTiTtsSOJ.jpg" alt="CTA" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '3px' }} />
        </CTAImage>
      </CTAImageContainer>
    </CTASectionWrapper>
  </>
);

export default Work; 
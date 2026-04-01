import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';
import { Link, useNavigate } from 'react-router-dom';

const VideoGridWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: 700px) {
    margin-bottom: 2.5rem;
  }
`;

const VideoGridSection = styled.section`
  margin: calc(7rem + 70px) 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  width: 100vw;
  max-width: 100vw;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }
`;

const VideoPlaceholderBox = styled.div`
  flex: 1;
  aspect-ratio: 4 / 5;
  min-width: 0;
  width: 100%;
  min-height: 220px;
  background: #eee;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bbb;
  font-size: 1.3rem;
  font-weight: 500;
  @media (max-width: 900px) {
    min-width: 0;
    min-height: 160px;
    font-size: 1.1rem;
  }
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 220px;
  @media (max-width: 900px) {
    min-height: 160px;
  }
`;

const VideoLabel = styled.div`
  text-align: left;
  font-size: 1.22rem;
  color: #b3b3b3;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const VideoSectionHeadingWrapper = styled.div`
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;
`;

const VideoSectionHeading = styled.h2`
  font-size: 1.8rem;
  color: #222;
  font-weight: 700;
  margin: 0 0 1.1rem 0;
  text-align: left;
  line-height: 1.15;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    margin: 0 0 0.7rem 0;
  }
`;

const CTASectionWrapper = styled.section`
  width: calc(100% - 30px); /* 15px left + 15px right */
  margin: 4.5rem auto;
  padding: 2rem;
  background: ${COLORS.green};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 2.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
`;

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

const StatementSection = styled.div`
  background: #fff;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const StatementText = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 400;
  color: #1a1a1a;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin: 0;
  letter-spacing: -0.01em;
`;

const GrayText = styled.span`
  color: #999;
`;

const ServicesSection = styled.div`
  background: #fff;
  padding: 4rem 2rem 5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 2rem 1rem 3rem;
  }
`;

const ServicesHeader = styled.h2`
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  margin: 0 0 2rem 0;
  letter-spacing: 0.1em;
`;

const ServicesHeaderLight = styled.span`
  color: #999;
`;

const ServicesHeaderBold = styled.span`
  color: #1a1a1a;
  font-weight: 700;
`;

const ServicesDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #1a1a1a;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #f5f5f5;
  padding: 2rem;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #e0e0e0 50%, #f5f5f5 50%);
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const ServiceDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const BottomDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #1a1a1a;
  margin-top: 3rem;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <Layout>
        <Showcase />

        <StatementSection>
          <StatementText>
            Our software monitors, protects, and builds
            the <GrayText>digital surface</GrayText> of organizations that
            operate where exposure isn't an option.
          </StatementText>
        </StatementSection>

        <ServicesSection>
          <ServicesHeader>
            <ServicesHeaderLight>We are </ServicesHeaderLight>
            <ServicesHeaderBold>HEPTA</ServicesHeaderBold>
          </ServicesHeader>
          <ServicesDivider />
          <ServicesGrid>
            <ServiceCard>
              <ServiceTitle>Silmaril</ServiceTitle>
              <ServiceDescription>
                Silmaril continuously scans and monitors the web infrastructure of domains you manage, surfacing security findings across SSL, DNS, headers, and more.
                <br /><br />
                Built as a distributed system, it runs parallel scans on schedule and delivers structured results your team can act on.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Development</ServiceTitle>
              <ServiceDescription>
                Clean architecture, production-ready code, and nothing you don't need. We design and ship web systems that will not need to be rebuilt.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Consulting</ServiceTitle>
              <ServiceDescription>
                We work with organizations to assess, plan, and improve their digital presence. From infrastructure decisions to platform strategy, we give you a clear picture of where you are and a concrete path to where you need to be.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>White-label</ServiceTitle>
              <ServiceDescription>
                Deploy Silmaril under your own brand. Your clients get enterprise-grade security monitoring.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
          <BottomDivider />
        </ServicesSection>

        <VideoGridWrapper>
          <VideoGridSection>
            <VideoSectionHeadingWrapper>
              <VideoSectionHeading>Work</VideoSectionHeading>
            </VideoSectionHeadingWrapper>
            <VideoGrid>
              <VideoItem>
                <VideoPlaceholderBox as="video"
                  src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/video-dashboard-DObhOMr87tQ2jCK3sTQ4vj8qNhqPyM.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', border: 'none', background: '#eee', borderRadius: '3px' }}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/work')}
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/work'); }}
                  aria-label="Go to Work page"
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
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/work')}
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/work'); }}
                  aria-label="Go to Work page"
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
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/work')}
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/work'); }}
                  aria-label="Go to Work page"
                />
                <VideoLabel>Website</VideoLabel>
              </VideoItem>
            </VideoGrid>
          </VideoGridSection>
        </VideoGridWrapper>
      </Layout>
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
};

export default Home; 

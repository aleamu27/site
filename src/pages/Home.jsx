import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import styled from 'styled-components';

const StatementSection = styled.div`
  background: #fff;
  padding: 12rem 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const StatementText = styled.p`
  font-family: 'OCR-B', 'OCR B', monospace;
  font-size: clamp(1.1rem, 2.2vw, 2rem);
  font-weight: 400;
  color: #1a1a1a;
  text-align: center;
  max-width: 1100px;
  line-height: 1.35;
  margin: 0;
  letter-spacing: -0.02em;
`;

const GrayText = styled.span`
  color: #999;
`;

const ServicesSection = styled.div`
  background: #fff;
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  padding: 6rem 2.5vw 7rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 3rem 4vw 4rem;
  }
`;

const ServicesHeader = styled.h2`
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  font-weight: 400;
  margin: 0 0 2.5rem 0;
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
  background: #ECECEC;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #F3F3F3;
  padding: 2.5rem;
  min-height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  clip-path: polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%);
`;

const ServiceTitle = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #1F2124;
  margin: 0;
  letter-spacing: 0.09em;
  line-height: normal;
  text-transform: uppercase;
`;

const ServiceDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  line-height: 1.6;
  letter-spacing: 0.04em;
  margin: 0;
`;

const ServiceDescriptionParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  line-height: 1.6;
  letter-spacing: 0.04em;
  margin: 0 0 1.8rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BottomDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #ECECEC;
  margin-top: 3rem;
`;

const ContactSection = styled.section`
  background: #f0f0f0;
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5vw;
  padding: 5vh 2.5vw;
  min-height: 75vh;
  margin-bottom: 7rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    margin-bottom: 4rem;
  }
`;

const ContactImage = styled.div`
  border-radius: 0.3vw;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    min-height: 65vh;
  }

  @media (max-width: 900px) {
    img {
      min-height: 40vh;
    }
  }
`;

const ContactCard = styled.div`
  background: #fff;
  border-radius: 0.3vw;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 5vw;
  }
`;

const ContactHeading = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const ContactSubtext = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 2rem 0;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ContactInput = styled.input`
  width: 200px;
  padding: 0.5rem 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  border: none;
  border-bottom: 1px solid #1a1a1a;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #1a1a1a;
  }
`;

const ContactTextarea = styled.textarea`
  width: 200px;
  padding: 0.5rem 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  border: none;
  border-bottom: 1px solid #1a1a1a;
  background: transparent;
  outline: none;
  resize: none;
  min-height: 24px;

  &::placeholder {
    color: #1a1a1a;
  }
`;

const ContactButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #1a1a1a;
  background: transparent;
  border: 1px solid #1a1a1a;
  border-radius: 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #1a1a1a;
    color: #fff;
  }
`;

const Home = () => {
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
              <ServiceTitle>SILMARIL</ServiceTitle>
              <div>
                <ServiceDescriptionParagraph>
                  Silmaril continuously scans and monitors the web infrastructure of domains you manage, surfacing security findings across SSL, DNS, headers, and more.
                </ServiceDescriptionParagraph>
                <ServiceDescriptionParagraph>
                  Built as a distributed system, it runs parallel scans on schedule and delivers structured results your team can act on.
                </ServiceDescriptionParagraph>
              </div>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Development</ServiceTitle>
              <ServiceDescription>
                Clean architecture, production-ready code, and nothing you don't need. We design and ship web systems that will not need to be rebuilt.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Consulting</ServiceTitle>
              <div>
                <ServiceDescriptionParagraph>
                  We work with organizations to assess, plan, and improve their digital presence.
                </ServiceDescriptionParagraph>
                <ServiceDescriptionParagraph>
                  From infrastructure decisions to platform strategy, we give you a clear picture of where you are and a concrete path to where you need to be.
                </ServiceDescriptionParagraph>
              </div>
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

        <ContactSection>
          <ContactImage>
            <img
              src="https://pub-df7490c3dde14db78697e37c03e6622f.r2.dev/CTAP/CTA%20Image%20fra%20Alt%20til%20nettside.png"
              alt="Mountain coastline"
            />
          </ContactImage>
          <ContactCard>
            <ContactHeading>Ready for the next step?</ContactHeading>
            <ContactSubtext>
              Hepta delivers solutions for organizations that take their digital presence seriously.
            </ContactSubtext>
            <ContactForm>
              <ContactInput type="email" placeholder="Email" />
              <ContactTextarea placeholder="Message" rows={1} />
              <ContactButton type="submit">Send</ContactButton>
            </ContactForm>
          </ContactCard>
        </ContactSection>
      </Layout>
    </>
  );
};

export default Home; 

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
  will-change: opacity, transform;
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
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.2rem, 1.5vw, 1.45rem);
  font-weight: 400;
  margin: 5rem 0 5rem 0;
  letter-spacing: 0.1em;
  text-align: left;
`;

const ServicesHeaderLight = styled.span`
  color: #444;
`;

const ServicesHeaderBold = styled.span`
  color: #444;
  font-weight: 400;
`;

const ServicesDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #ECECEC;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ServiceCard = styled.div`
  background: #F3F3F3;
  padding: 1.75rem 1.5rem 1.25rem;
  min-height: 420px;
  flex: 0 0 295px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  scroll-snap-align: start;
  clip-path: polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%);
  overflow: hidden;
  cursor: pointer;

  &:hover .card-bottom {
    transform: translateY(-36px);
  }

  &:hover .card-learn-more {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
`;

const CardLearnMore = styled(Link)`
  position: absolute;
  bottom: 1.25rem;
  left: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #1F2124;
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;

  &:after {
    content: ' →';
  }
`;

const CardCoverLink = styled(Link)`
  position: absolute;
  inset: 0;
  z-index: 1;
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
  font-size: 16px;
  font-weight: 500;
  color: #767676;
  line-height: 1.6;
  letter-spacing: 0.04em;
  margin: 0;
`;

const ServiceDescriptionParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
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
  margin-top: 9rem;
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
  min-height: 40vh;
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
    min-height: 38vh;
  }

  @media (max-width: 900px) {
    img {
      min-height: 30vh;
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
  margin: 0 auto 2rem;
  line-height: 1.5;
  max-width: 480px;
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
  const statementRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [lightText, setLightText] = useState('WE ARE ');
  const [boldText, setBoldText] = useState('HEPTA');
  const headerAnimated = useRef(false);

  useEffect(() => {
    const el = statementRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // progress 0 = element bottom just entered viewport, 1 = fully in view
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 0.55), 0), 1);
      el.style.opacity = progress;
      el.style.transform = `translateY(${14 * (1 - progress)}px) scale(${0.96 + 0.04 * progress})`;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const target = 'WE ARE HEPTA';

    const runScramble = () => {
      if (headerAnimated.current) return;
      headerAnimated.current = true;

      const resolved = target.split('').map(c => c === ' ');
      let nonSpaceIndex = 0;

      // Schedule each non-space character to resolve sequentially
      target.split('').forEach((char, i) => {
        if (char === ' ') return;
        const delay = nonSpaceIndex * 55 + 60;
        nonSpaceIndex++;
        setTimeout(() => { resolved[i] = true; }, delay);
      });

      // Rapidly update display, scrambling unresolved chars
      const timer = setInterval(() => {
        const result = target.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (resolved[i]) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        setLightText(result.slice(0, 7));
        setBoldText(result.slice(7));
        if (resolved.every(r => r)) {
          clearInterval(timer);
          setLightText('WE ARE ');
          setBoldText('HEPTA');
        }
      }, 30);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        runScramble();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    let isDown = false;
    let startX, scrollLeft;
    const onMouseDown = e => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; };
    const onMouseLeave = () => { isDown = false; };
    const onMouseUp = () => { isDown = false; };
    const onMouseMove = e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - el.offsetLeft; el.scrollLeft = scrollLeft - (x - startX); };
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);
    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <Hero />
      <Layout>
        <Showcase />

        <StatementSection>
          <StatementText ref={statementRef}>
            Our software monitors, protects, and builds
            the <GrayText>digital surface</GrayText> of organizations that
            operate where exposure isn't an option.
          </StatementText>
        </StatementSection>

        <ServicesSection>
          <ServicesDivider />
          <ServicesHeader ref={headerRef}>
            <ServicesHeaderLight>{lightText}</ServicesHeaderLight>
            <ServicesHeaderBold>{boldText}</ServicesHeaderBold>
          </ServicesHeader>
          <ServicesGrid ref={gridRef}>
            <ServiceCard>
              <CardCoverLink to="/silmaril" />
              <ServiceTitle>SILMARIL</ServiceTitle>
              <CardBottom className="card-bottom">
                <ServiceDescriptionParagraph>
                  Silmaril continuously scans and monitors the web infrastructure of domains you manage, surfacing security findings across SSL, DNS, headers, and more.
                </ServiceDescriptionParagraph>
                <ServiceDescriptionParagraph>
                  Built as a distributed system, it runs parallel scans on schedule and delivers structured results your team can act on.
                </ServiceDescriptionParagraph>
              </CardBottom>
              <CardLearnMore to="/silmaril" className="card-learn-more">Learn more</CardLearnMore>
            </ServiceCard>
            <ServiceCard>
              <CardCoverLink to="/calar-os" />
              <ServiceTitle>Calar OS</ServiceTitle>
              <CardBottom className="card-bottom">
                <ServiceDescription>Coming soon.</ServiceDescription>
              </CardBottom>
              <CardLearnMore to="/calar-os" className="card-learn-more">Learn more</CardLearnMore>
            </ServiceCard>
            <ServiceCard>
              <CardCoverLink to="/development" />
              <ServiceTitle>Development</ServiceTitle>
              <CardBottom className="card-bottom">
                <ServiceDescription>
                  Clean architecture, production-ready code, and nothing you don't need. We design and ship web systems that will not need to be rebuilt.
                </ServiceDescription>
              </CardBottom>
              <CardLearnMore to="/development" className="card-learn-more">Learn more</CardLearnMore>
            </ServiceCard>
            <ServiceCard>
              <CardCoverLink to="/about" />
              <ServiceTitle>About Us</ServiceTitle>
              <CardBottom className="card-bottom">
                <ServiceDescription>
                  We are a small team that builds serious digital infrastructure. We care about the work and the people we work with.
                </ServiceDescription>
              </CardBottom>
              <CardLearnMore to="/about" className="card-learn-more">Learn more</CardLearnMore>
            </ServiceCard>
            <ServiceCard>
              <CardCoverLink to="/consulting" />
              <ServiceTitle>Consulting</ServiceTitle>
              <CardBottom className="card-bottom">
                <ServiceDescriptionParagraph>
                  We work with organizations to assess, plan, and improve their digital presence.
                </ServiceDescriptionParagraph>
                <ServiceDescriptionParagraph>
                  From infrastructure decisions to platform strategy, we give you a clear picture of where you are and a concrete path to where you need to be.
                </ServiceDescriptionParagraph>
              </CardBottom>
              <CardLearnMore to="/consulting" className="card-learn-more">Learn more</CardLearnMore>
            </ServiceCard>
          </ServicesGrid>
          <BottomDivider />
        </ServicesSection>

        <ContactSection>
          <ContactImage>
            <img
              src="/cta-image.png"
              alt="Mountain coastline"
            />
          </ContactImage>
          <ContactCard>
            <ContactHeading>Ready for the next step?</ContactHeading>
            <ContactSubtext>
              Hepta delivers solutions for organizations that take their<br />digital presence seriously.
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

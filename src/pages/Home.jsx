import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import LandingContactSection from '../components/LandingContactSection';
import styled from 'styled-components';

const StatementSection = styled.div`
  background: #fff;
  padding: 12rem 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  @media (max-width: 768px) {
    padding: 6rem 4vw 7rem;
  }
`;

const StatementText = styled.p`
  font-family: 'OCR-B', 'OCR B', monospace;
  font-size: clamp(0.95rem, 1.85vw, 1.72rem);
  font-weight: 400;
  color: #1a1a1a;
  text-align: center;
  max-width: 1100px;
  line-height: 1.35;
  margin: 0;
  letter-spacing: -0.02em;
  will-change: opacity, transform;

  @media (max-width: 768px) {
    font-size: clamp(1.02rem, 2.35vw, 1.22rem);
    line-height: 1.38;
    max-width: 100%;
  }
`;

/* Grey → blue + highlight; position updated from scroll in JS (data-shine). */
const StatementGradientWord = styled.span.attrs({ 'data-shine': '' })`
  background: linear-gradient(
    118deg,
    #bdbdbd 0%,
    #d0d0d0 22%,
    #e8f4fc 42%,
    #7ebfe8 52%,
    #72b3dc 78%,
    #c8c8c8 100%
  );
  background-size: 280% 280%;
  background-position: 0% 40%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media (prefers-reduced-motion: reduce) {
    background: linear-gradient(180deg, #c4c4c4 0%, #7ebfe8 100%);
    background-size: 100% 100%;
  }
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

    const reduceMotion = () =>
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // progress 0 = element bottom just entered viewport, 1 = fully in view
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 0.55), 0), 1);
      el.style.opacity = progress;
      el.style.transform = `translateY(${14 * (1 - progress)}px) scale(${0.96 + 0.04 * progress})`;

      /* One-way grey → blue with scroll: driven by same progress as fade (no scrollY wrap). */
      if (!reduceMotion()) {
        const px = progress * 100;
        const py = 40 + progress * 20;
        el.querySelectorAll('[data-shine]').forEach(node => {
          node.style.backgroundPosition = `${px}% ${py}%`;
        });
      }
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
            We build to <StatementGradientWord>outlast,</StatementGradientWord>{' '}
            <StatementGradientWord>outperform,</StatementGradientWord> and <StatementGradientWord>win.</StatementGradientWord>
            <br />
            Every decision we make is the decision
            <br />
            of someone who refuses to ship second place.
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
              <CardCoverLink to="/calar-os" />
              <ServiceTitle>Calar OS</ServiceTitle>
              <CardBottom className="card-bottom">
                <ServiceDescriptionParagraph>
                  Calar OS shows you who is on your site and how they move through your funnel. It connects visits back to the channels and campaigns that drove them.
                </ServiceDescriptionParagraph>
                <ServiceDescriptionParagraph>
                  Leads are scored from on-site behavior in real time.
                </ServiceDescriptionParagraph>
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
              <CardCoverLink to="/visual-identity" />
              <ServiceTitle>Visual identity</ServiceTitle>
              <CardBottom className="card-bottom">
                <ServiceDescriptionParagraph>
                  Brand systems, typography, colour, and art direction so your product and marketing feel like one coherent story.
                </ServiceDescriptionParagraph>
                <ServiceDescriptionParagraph>
                  We align visuals with how you actually operate: clear guidelines your team can ship with, not a deck that sits in a folder.
                </ServiceDescriptionParagraph>
              </CardBottom>
              <CardLearnMore to="/visual-identity" className="card-learn-more">Learn more</CardLearnMore>
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

        <LandingContactSection
          inquirySource="Home page contact"
          heading="Ready for the next step?"
          subtext={
            <>
              Hepta delivers solutions for organizations that take their
              <br />
              digital presence seriously.
            </>
          }
          imageSrc="/cta-image.png"
          imageAlt="Mountain coastline"
        />
      </Layout>
    </>
  );
};

export default Home; 

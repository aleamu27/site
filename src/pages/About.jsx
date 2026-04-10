import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// ── Typewriter component ───────────────────────────────────────────────────────

const TypewriterText = ({ text, as: Tag = 'span', speed = 18, delay = 0, style, className }) => {
  const [displayed, setDisplayed] = useState('');
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true;
        let i = 0;
        setTimeout(() => {
          const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) clearInterval(interval);
          }, speed);
        }, delay);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text, speed, delay]);

  // Pad the current partial word with transparent chars so it never jumps lines
  const typed = displayed;
  let wordEnd = typed.length;
  while (wordEnd < text.length && text[wordEnd] !== ' ') wordEnd++;
  const transparentPad = text.slice(typed.length, wordEnd);

  return (
    <Tag ref={ref} style={{ ...style, position: 'relative' }} className={className}>
      {/* Full text invisible — holds height so nothing shifts */}
      <span style={{ visibility: 'hidden', display: 'block' }}>{text}</span>
      {/* Typewriter overlaid — transparent pad keeps current word on correct line */}
      <span style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        {typed}<span style={{ color: 'transparent' }}>{transparentPad}</span>
      </span>
    </Tag>
  );
};

// ── Animated line component ────────────────────────────────────────────────────

const AnimLine = styled.div`
  height: 1px;
  background: #C8C7C3;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    transform: scaleX(1);
  }
`;

const AnimatedLine = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <AnimLine ref={ref} />;
};

// ── Styled components ─────────────────────────────────────────────────────────

const HeroSection = styled.section`
  background: #F2F1ED;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5vw;
  box-sizing: border-box;
`;

const HeroLabel = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const HeroText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 500;
  color: #1a1a1a;
  text-align: left;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0;
  max-width: 900px;
`;

const MissionSection = styled.section`
  background: #F2F1ED;
  width: 100%;
  padding: 5rem 5vw 6rem;
  box-sizing: border-box;
`;

const MissionLabel = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const MissionTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: none;
  margin: 0;
  min-height: 1.2em;
`;

const RowsSection = styled.section`
  width: 100%;
  padding: 0 5vw;
  box-sizing: border-box;
  background: #F2F1ED;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4vw;
  padding: 3.5rem 0;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const RowHeading = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.02em;
  min-height: 1em;
`;

const RowTagline = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.5;
  min-height: 1em;
  white-space: pre-wrap;
`;

const RowBody = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #555;
  line-height: 1.75;
  margin: 0;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  transition-delay: 0.4s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SmallFooter = styled.footer`
  background: #F2F1ED;
  padding: 2rem 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterLeft = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  color: #888;
  letter-spacing: 0.05em;
`;

const FooterRight = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  color: #888;
  letter-spacing: 0.05em;
  text-decoration: none;
  &:hover { color: #1a1a1a; }
`;

// ── RowWithAnimations ─────────────────────────────────────────────────────────

const RowBlock = ({ heading, tagline, body, headingDelay = 0, taglineDelay = 0 }) => {
  const bodyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (bodyRef.current) observer.observe(bodyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatedLine />
      <Row>
        <TypewriterText as={RowHeading} text={heading} speed={22} delay={headingDelay} />
        <TypewriterText as={RowTagline} text={tagline} speed={15} delay={taglineDelay} />
        <RowBody ref={bodyRef}>{body}</RowBody>
      </Row>
    </>
  );
};

// ── About ─────────────────────────────────────────────────────────────────────

const About = () => {
  useEffect(() => {
    document.title = 'About Hepta | Web Development & Security Monitoring Agency';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Hepta is a software development and digital infrastructure company specializing in web development, security monitoring, and custom software for organizations that cannot afford to get it wrong.';
    document.head.appendChild(meta);
  }, []);

  return (
    <>
      <HeroSection>
        <div>
          <HeroLabel>About</HeroLabel>
          <HeroText>Web Development &amp; Security Monitoring for Organizations That Cannot Afford to Get It Wrong.</HeroText>
        </div>
      </HeroSection>

      <AnimatedLine />

      <MissionSection>
        <MissionLabel>Mission</MissionLabel>
        <TypewriterText
          as={MissionTitle}
          text="We design and develop web infrastructure, security monitoring systems, and custom software for organizations where digital performance is mission-critical."
          speed={10}
        />
      </MissionSection>

      <RowsSection>
        <RowBlock
          heading="Our Work"
          tagline="End-to-end web development and digital infrastructure."
          body="We build custom websites, web applications, and backend systems that are fast, secure, and built to scale. From frontend development to server architecture, API integrations, and cloud deployment, we deliver production-ready software. We also develop and operate Silmaril, a security monitoring platform that continuously scans SSL certificates, DNS records, and HTTP headers across the domains our clients manage."
          headingDelay={0}
          taglineDelay={150}
        />
        <RowBlock
          heading="Our Standards"
          tagline={"We work with organizations that take\ndigital security seriously."}
          body="Hepta works with a deliberately small number of clients. We specialize in web security monitoring, vulnerability detection, and digital infrastructure for organizations operating in high-exposure environments. We do not work with everyone. We look for clients who understand what they are building and are ready to move. A focused client list means better work across the board."
          headingDelay={0}
          taglineDelay={150}
        />
        <RowBlock
          heading="Our Team"
          tagline="Experienced engineers. No overhead."
          body="Our team consists of experienced software engineers and security specialists. We have built web platforms, security monitoring tools, and custom software products across multiple industries. We move fast, we care about the details, and we are not trying to be everything to everyone. The team is small by design, not by accident."
          headingDelay={0}
          taglineDelay={150}
        />
        <AnimatedLine />
      </RowsSection>

      <SmallFooter>
        <FooterLeft>The Infrastructure Beneath Digital Trust</FooterLeft>
        <FooterRight>© {new Date().getFullYear()} Hepta</FooterRight>
      </SmallFooter>
    </>
  );
};

export default About;

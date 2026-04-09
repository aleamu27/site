import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const revealStyles = css`
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  &.vis {
    opacity: 1;
    transform: translateY(0);
  }
`;

const lineRevealStyles = css`
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.vis {
    transform: scaleX(1);
  }
`;

const ScrollContainer = styled.section`
  position: relative;
  height: 350vh;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #1a1a1a;
  transition: background-color 0.35s ease;

  &.flipped {
    background-color: #F2F1ED;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: nowrap;
  color: #F2F1ED;
  transition: color 0.35s ease;

  &.flipped {
    color: #1a1a1a;
  }
`;

const Section = styled.section`
  background: #F2F1ED;
  padding: 8rem 5vw;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  ${revealStyles}
`;

const SectionLabel = styled.span`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  white-space: nowrap;
`;

const SectionLine = styled.div`
  flex: 1;
  height: 1px;
  background: #C8C7C3;
  ${lineRevealStyles}
`;

const SectionNumber = styled.span`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.1em;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 2px;
  background: #C8C7C3;
  margin-bottom: 5rem;
  ${lineRevealStyles}
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6vw;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ColLeft = styled.div``;
const ColRight = styled.div``;

const OutcomesLabel = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  ${revealStyles}
`;

const OutcomesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OutcomesItem = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.6;
  padding: 1.25rem 0;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px solid #C8C7C3;
  ${revealStyles}

  &:first-child {
    border-top: 1px solid #C8C7C3;
  }

  &::before {
    content: '';
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #1a1a1a;
    margin-top: 0.55em;
  }
`;

const QuoteRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;
  padding-top: 1rem;
  ${revealStyles}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const QuoteMark = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 5rem;
  font-weight: 300;
  color: #1a1a1a;
  line-height: 0.8;
`;

const QuoteContent = styled.div`
  padding-top: 0.5rem;
`;

const QuoteText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.3rem, 2.2vw, 1.8rem);
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.4;
  letter-spacing: -0.02em;
  margin: 0 0 2rem;
  max-width: 700px;
`;

const QuoteAttribution = styled.span`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const SectionBody = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.4rem, 2.8vw, 2.4rem);
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.35;
  letter-spacing: -0.02em;
  margin: 0;
  max-width: 900px;
  ${revealStyles}
  transition-delay: 0.15s;
`;

const ColBody = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.1rem, 1.8vw, 1.6rem);
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.45;
  letter-spacing: -0.01em;
  margin: 0;
  max-width: 650px;
  ${revealStyles}
`;

const ProgressSection = styled.section`
  background: #F2F1ED;
  padding: 8rem 5vw 10rem;
`;

const ProgressTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 7vw, 7rem);
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 1rem 0 3rem;
  text-transform: uppercase;
  ${revealStyles}
  transition-delay: 0.1s;
`;

const ProgressDivider = styled.div`
  width: 100%;
  height: 2px;
  background: #C8C7C3;
  margin-bottom: 3rem;
  ${lineRevealStyles}
`;

const ProgressQuoteRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;
  margin-bottom: 4rem;
  ${revealStyles}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProgressQuoteText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  color: #333;
  line-height: 1.7;
  margin: 0 0 1.5rem;
  max-width: 650px;
`;

const BarSection = styled.div`
  margin-top: 3rem;
  ${revealStyles}
  transition-delay: 0.2s;
`;

const BarGraphic = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 80px;
  margin-bottom: 1.5rem;
`;

const Bar = styled.div`
  flex: 1;
  background: #1a1a1a;
  min-width: 2px;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: bottom center;
  transition:
    opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--bar-delay, 0s);

  ${BarSection}.vis & {
    opacity: var(--bar-opacity, 1);
    transform: scaleY(1);
  }
`;

const BarStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StatBlock = styled.div``;

const StatLabel = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.55rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const StatNumber = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  letter-spacing: -0.03em;
`;

const StatDesc = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #888;
  margin-top: 0.25rem;
`;

const HowItWorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  padding: 2rem 0;
  ${revealStyles}
`;

const StepNumber = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  color: #aaa;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
`;

const StepTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
`;

const StepBody = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #666;
  line-height: 1.65;
  margin: 0;
`;

const StepLine = styled.div`
  width: 100%;
  height: 1px;
  background: #C8C7C3;
  margin-bottom: 1.5rem;
  ${lineRevealStyles}
`;

const clamp01 = v => Math.min(Math.max(v, 0), 1);
const lerp = (a, b, t) => a + (b - a) * clamp01(t);

const words = [
  { first: 'C', rest: 'alar' },
  { first: 'O', rest: 'perating' },
  { first: 'S', rest: 'ystem' },
];

const CalarOS = () => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const rowRef = useRef(null);
  const fadeRefs = useRef([]);
  const gapRefs = useRef([]);
  const naturalWidths = useRef([]);

  useEffect(() => {
    document.title = 'Calar OS | Hepta';
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vis');
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const row = rowRef.current;
    if (!section || !sticky || !row) return;

    const faders = fadeRefs.current;
    const gaps = gapRefs.current;

    // Measure natural widths after fonts load
    naturalWidths.current = faders.map(el => el ? el.scrollWidth : 0);

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = clamp01(-rect.top / scrollable);

        // Phase 1 (0 → 0.35): sequential letter fade, last-to-first per word
        const fadePhase = clamp01(progress / 0.35);

        // Phase 2 (0.35 → 0.65): collapse + scale together
        const collapsePhase = clamp01((progress - 0.35) / 0.3);

        // Apply sequential fade + collapse to non-first letters
        for (let i = 0; i < faders.length; i++) {
          const el = faders[i];
          if (!el) continue;
          const ri = parseInt(el.dataset.ri);
          const wlen = parseInt(el.dataset.wlen);

          // Stagger: last letter (ri=0) starts fading immediately,
          // second letter (ri=wlen-1) starts fading last
          const staggerTotal = 0.6;
          const staggerDelay = (ri / Math.max(wlen - 1, 1)) * staggerTotal;
          const letterFade = clamp01((fadePhase - staggerDelay) / (1 - staggerTotal));

          el.style.opacity = 1 - letterFade;
          const nw = naturalWidths.current[i] || 40;
          el.style.maxWidth = `${(1 - collapsePhase) * nw}px`;
        }

        // Collapse word gaps
        for (let i = 0; i < gaps.length; i++) {
          const el = gaps[i];
          if (!el) continue;
          el.style.width = `${(1 - collapsePhase) * 0.55}em`;
        }

        // Grow only the first letters (C, O, S)
        const baseFontSize = window.innerWidth * 0.04;
        const grownFontSize = lerp(baseFontSize, baseFontSize * 2.3, collapsePhase);
        const firsts = row.querySelectorAll('[data-first]');
        for (let i = 0; i < firsts.length; i++) {
          firsts[i].style.fontSize = `${grownFontSize}px`;
        }


        // Background: trigger right when collapse finishes
        const flipped = progress > 0.65;
        sticky.classList.toggle('flipped', flipped);
        row.classList.toggle('flipped', flipped);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const letterStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: `${(typeof window !== 'undefined' ? window.innerWidth : 1024) * 0.04}px`,
    lineHeight: 1,
    letterSpacing: '-0.03em',
    display: 'inline-block',
    color: 'inherit',
  };

  let fadeIndex = 0;
  let gapIndex = 0;

  return (
    <>
      <ScrollContainer ref={sectionRef}>
          <Sticky ref={stickyRef}>
          <TextContainer ref={rowRef}>
            {words.map((word, wi) => {
              const elements = [];
              const restLen = word.rest.length;

              elements.push(
                <span key={`first-${wi}`} data-first="true" style={letterStyle}>
                  {word.first}
                </span>
              );

              for (let ci = 0; ci < restLen; ci++) {
                const reverseIndex = restLen - 1 - ci;
                const idx = fadeIndex++;
                elements.push(
                  <span
                    key={`fade-${wi}-${ci}`}
                    ref={el => fadeRefs.current[idx] = el}
                    data-ri={reverseIndex}
                    data-wlen={restLen}
                    style={{
                      display: 'inline-block',
                      maxWidth: '60px',
                      verticalAlign: 'baseline',
                      lineHeight: 1,
                      clipPath: 'inset(-0.4em 0 -0.4em 0)',
                    }}
                  >
                    <span data-letter="true" style={letterStyle}>{word.rest[ci]}</span>
                  </span>
                );
              }

              if (wi < words.length - 1) {
                const gi = gapIndex++;
                elements.push(
                  <span
                    key={`gap-${wi}`}
                    ref={el => gapRefs.current[gi] = el}
                    style={{ display: 'inline-block', width: '0.55em' }}
                  />
                );
              }

              return elements;
            })}
          </TextContainer>
        </Sticky>
      </ScrollContainer>

      <Section>
        <SectionHeader data-anim>
          <SectionLabel>Introduction</SectionLabel>
          <SectionLine data-anim />
          <SectionNumber>01</SectionNumber>
        </SectionHeader>
        <SectionBody data-anim>
          Marketing teams spend millions on campaigns without knowing which channels actually drive revenue. Calar OS tracks every touchpoint, scores every lead automatically, and alerts your sales team the moment a prospect shows buying intent.
        </SectionBody>
      </Section>

      <Section>
        <SectionHeader data-anim>
          <SectionLabel>How it works</SectionLabel>
          <SectionLine data-anim />
          <SectionNumber>02</SectionNumber>
        </SectionHeader>
        <HowItWorksGrid>
          <StepCard data-anim style={{ transitionDelay: '0s' }}>
            <StepNumber>01</StepNumber>
            <StepLine data-anim />
            <StepTitle>Track</StepTitle>
            <StepBody>One line of code on your site. Calar OS captures UTM parameters, referrer data, landing pages, and visitor behavior automatically.</StepBody>
          </StepCard>
          <StepCard data-anim style={{ transitionDelay: '0.1s' }}>
            <StepNumber>02</StepNumber>
            <StepLine data-anim />
            <StepTitle>Attribute</StepTitle>
            <StepBody>Every lead is connected to the campaign that brought them in. First-touch, multi-touch, and full journey mapping across all your channels.</StepBody>
          </StepCard>
          <StepCard data-anim style={{ transitionDelay: '0.2s' }}>
            <StepNumber>03</StepNumber>
            <StepLine data-anim />
            <StepTitle>Score</StepTitle>
            <StepBody>Leads are scored in real time based on page views, pricing page visits, return frequency, and email type. Configurable thresholds, zero guesswork.</StepBody>
          </StepCard>
          <StepCard data-anim style={{ transitionDelay: '0.3s' }}>
            <StepNumber>04</StepNumber>
            <StepLine data-anim />
            <StepTitle>Alert</StepTitle>
            <StepBody>Score crosses 50? Slack notification, email alert, and auto-push to HubSpot. Your sales team calls while the lead is still warm.</StepBody>
          </StepCard>
        </HowItWorksGrid>
      </Section>

      <Section>
        <SectionDivider data-anim />
        <TwoCol>
          <ColLeft>
            <ColBody data-anim>
              Calar OS is built for B2B teams that need to connect marketing spend to actual revenue. One line of code on your site and within five minutes you have full attribution, automated lead scoring, and real-time alerts flowing to your sales team.
            </ColBody>
          </ColLeft>
          <ColRight>
            <OutcomesLabel data-anim>Capabilities</OutcomesLabel>
            <OutcomesList>
              <OutcomesItem data-anim style={{ transitionDelay: '0.05s' }}>First-touch and multi-touch attribution across every channel</OutcomesItem>
              <OutcomesItem data-anim style={{ transitionDelay: '0.1s' }}>Automatic lead scoring based on page views, pricing visits, and return behavior</OutcomesItem>
              <OutcomesItem data-anim style={{ transitionDelay: '0.15s' }}>Real-time Slack and email alerts when a lead crosses your score threshold</OutcomesItem>
              <OutcomesItem data-anim style={{ transitionDelay: '0.2s' }}>HubSpot auto-sync for qualified leads above score 75</OutcomesItem>
              <OutcomesItem data-anim style={{ transitionDelay: '0.25s' }}>Full ROI dashboard broken down by channel, campaign, and time period</OutcomesItem>
              <OutcomesItem data-anim style={{ transitionDelay: '0.3s' }}>100% GDPR compliant with first-party cookies and a 30-day attribution window</OutcomesItem>
            </OutcomesList>
          </ColRight>
        </TwoCol>
      </Section>

      <Section>
        <SectionDivider data-anim />
        <QuoteRow data-anim>
          <QuoteMark>"</QuoteMark>
          <QuoteContent>
            <QuoteText>
              Stop guessing which channel actually sells. See the full customer journey from first click to signed deal.
            </QuoteText>
            <QuoteAttribution>→ Jonathan Berg / Hepta</QuoteAttribution>
          </QuoteContent>
        </QuoteRow>
      </Section>

      <ProgressSection>
        <SectionHeader data-anim>
          <SectionLabel>Progress</SectionLabel>
          <SectionLine data-anim />
          <SectionNumber>03</SectionNumber>
        </SectionHeader>
        <ProgressTitle data-anim>Lead Attribution<br />Intelligence</ProgressTitle>


        <ProgressDivider data-anim />

        <ProgressQuoteRow data-anim>
          <QuoteMark style={{ color: '#1a1a1a' }}>"</QuoteMark>
          <QuoteContent>
            <ProgressQuoteText>
              Every marketing dollar your organization spends should be traceable to revenue. Calar OS exists because the tools that claim to do this either cost too much, require too many integrations, or give you data you cannot act on. We built a single platform that handles attribution, scoring, and sales alerts in one place.
            </ProgressQuoteText>
            <QuoteAttribution>→ Alexander Amundsen / Hepta</QuoteAttribution>
          </QuoteContent>
        </ProgressQuoteRow>

        <BarSection data-anim>
          <BarGraphic>
            {Array.from({ length: 60 }).map((_, i) => (
              <Bar
                key={i}
                style={{
                  height: `${20 + (i / 59) * 60}px`,
                  '--bar-opacity': 0.15 + (i / 59) * 0.85,
                  '--bar-delay': `${i * 0.022}s`,
                }}
              />
            ))}
          </BarGraphic>
          <BarStats>
            <StatBlock>
              <StatLabel>Setup Time</StatLabel>
              <StatNumber>&lt; 5</StatNumber>
              <StatDesc>Minutes to first tracked lead</StatDesc>
            </StatBlock>
            <StatBlock style={{ textAlign: 'right' }}>
              <StatLabel>Attribution Window</StatLabel>
              <StatNumber>30</StatNumber>
              <StatDesc>Days of full touchpoint history</StatDesc>
            </StatBlock>
          </BarStats>
        </BarSection>
      </ProgressSection>
    </>
  );
};

export default CalarOS;

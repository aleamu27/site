import React, { useEffect, useRef, useState } from 'react';
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

const clamp01 = v => Math.min(Math.max(v, 0), 1);

const HeroScroll = styled.section`
  position: relative;
  height: 240vh;
`;

const HeroSticky = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 clamp(1.25rem, 5vw, 4rem) clamp(2rem, 8vh, 5rem);
  background-color: #0a0a0a;
  color: rgba(242, 241, 237, 0.92);
  transition: background-color 0.4s ease, color 0.4s ease;
  overflow: hidden;
  box-sizing: border-box;

  &.light {
    background-color: #ffffff;
    color: #1a1a1a;
  }
`;

const MetaRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${p => (p.$light ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)')};
  transition: border-color 0.4s ease;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
  }
`;

const MetaCell = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.55rem, 1.1vw, 0.65rem);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.5;
  color: ${p => (p.$light ? 'rgba(26,26,26,0.55)' : 'rgba(242,241,237,0.45)')};
  padding-right: 1.5rem;
  border-right: 1px solid ${p => (p.$light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)')};
  transition: color 0.4s ease, border-color 0.4s ease;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 900px) {
    &:nth-child(2n) {
      border-right: none;
    }
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: clamp(3.2rem, 14vw, 9.5rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin: 0;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  color: ${p => (p.$light ? '#1a1a1a' : 'rgba(242, 241, 237, 0.95)')};
  transition: color 0.4s ease;
`;

const PageBody = styled.div`
  background: #ffffff;
  color: #1a1a1a;
`;

const Section = styled.section`
  padding: clamp(4rem, 10vw, 8rem) clamp(1.25rem, 5vw, 4rem);
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #e8e8e8;
  max-width: 1400px;
  margin: 0 auto;
  ${lineRevealStyles}
`;

const SplitHero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: end;
  padding-bottom: clamp(3rem, 8vw, 6rem);
  ${revealStyles}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

const SplitHeroTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.75rem, 3.8vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 0;
  max-width: 18ch;
`;

const SplitHeroBody = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  font-weight: 400;
  color: #666;
  line-height: 1.65;
  margin: 0;
  max-width: 42ch;
  justify-self: end;

  @media (max-width: 768px) {
    justify-self: start;
  }
`;

const UploadCard = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  min-height: min(70vh, 720px);
  overflow: hidden;
  ${revealStyles}

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: unset;
  }
`;

const UploadVisual = styled.div`
  position: relative;
  border-right: 1px solid #e5e5e5;
  padding: clamp(1.5rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: min(52vh, 520px);
  overflow: hidden;
  background-color: #fafafa;
  background-image: url('/development-stack-diagram.png');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(250, 250, 250, 0.82) 22%,
      rgba(250, 250, 250, 0.45) 45%,
      rgba(250, 250, 250, 0.08) 78%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
    min-height: 300px;
  }
`;

const UploadVisualCopy = styled.div`
  position: relative;
  z-index: 1;
`;

const UploadVisualTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0 0 0.75rem;
  max-width: 20ch;
`;

const UploadVisualLead = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  max-width: 36ch;
`;

const UploadStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const UploadStackItem = styled.div`
  flex: 1;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:last-child {
    border-bottom: none;
  }
`;

const UploadStackTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.6rem;
  letter-spacing: -0.01em;
`;

const UploadStackBody = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.65;
  margin: 0;
  max-width: 42ch;
`;

const AdaptGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  gap: 0;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  overflow: hidden;
  min-height: min(65vh, 640px);
  ${revealStyles}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: unset;
  }
`;

const AdaptNav = styled.nav`
  border-right: 1px solid #e5e5e5;
  background: #fafafa;
  padding: 0;

  & > button + button {
    border-top: 1px solid #e5e5e5;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
  }
`;

const AdaptNavButton = styled.button`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${p => (p.$active ? '#1a1a1a' : '#999')};
  padding: 1.25rem 1.25rem;
  margin: 0;
  border: none;
  width: 100%;
  text-align: left;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.15s ease;
  appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${p => (p.$active ? '#1a1a1a' : '#666')};
  }

  &:focus,
  &:focus:active,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    background: rgba(26, 26, 26, 0.06);
  }
`;

const AdaptMain = styled.div`
  padding: clamp(1.5rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  background: #fff;
`;

const AdaptPanelCopy = styled.div`
  flex: 0 1 auto;
  margin-bottom: 1.25rem;
  min-width: 0;
`;

const AdaptMainTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.35;
  margin: 0 0 0.75rem;
  max-width: 100%;
`;

const AdaptMainLead = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.65;
  margin: 0;
  max-width: 100%;
`;

const ScreenshotPlaceholder = styled.div`
  flex: 1;
  min-height: 220px;
  background: linear-gradient(180deg, #f0f0f0 0%, #e8e8e8 100%);
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #999;
  text-align: center;
  padding: 1rem;
`;

const AdaptPanelMediaSlot = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: clamp(260px, 32vw, 380px);
  position: relative;
  overflow: hidden;
  border: 1px solid #e8e8e8;
  background: #fafafa;
  box-sizing: border-box;
`;

const AdaptStepImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const AdaptMediaPlaceholder = styled(ScreenshotPlaceholder)`
  flex: none;
  min-height: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
`;

const AdaptPanelInner = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  justify-content: flex-start;
`;

const CapabilitiesSection = styled.div`
  border-top: 1px solid #e8e8e8;
  padding: clamp(4rem, 10vw, 7rem) 0 clamp(6rem, 12vw, 10rem);
  ${revealStyles}
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 5vw, 4rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CapabilitiesTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.6rem, 3.2vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 0;
  max-width: 16ch;
`;

const CapabilitiesCopy = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.7;

  p {
    margin: 0 0 1.25rem;
  }

  p:last-child {
    margin-bottom: 2rem;
  }
`;

const CapabilitiesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const CapabilityLink = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 1rem 0;
  border-top: 1px solid #e8e8e8;
  color: #1a1a1a;
`;

const DEV_STICKY_TOP = '6rem';

const CapabilitiesStickyCol = styled.div`
  position: sticky;
  top: ${DEV_STICKY_TOP};
  align-self: start;
`;

const DevContactBlock = styled.div`
  margin-top: clamp(2.5rem, 5vw, 4rem);
`;

const DevContactBody = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.7;

  p {
    margin: 0 0 1.25rem;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

const DevContactMail = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-bottom-color: #1a1a1a;
  }
`;

const ADAPT_PANELS = [
  {
    id: 'idea',
    navLabel: 'Idea ^01',
    title: 'It starts with a real conversation.',
    lead:
      'You bring the problem, who it is for, and what success should feel like. We listen, ask direct questions, and agree on scope and success criteria before design or code.',
    imageSrc: '/development-idea.png',
    imageAlt: 'Conversation and discovery',
    surfaceLabel: 'Add public/development-idea.png (conversation)',
  },
  {
    id: 'plan',
    navLabel: 'Plan ^02',
    title: 'Turn the idea into a sequence you can see and approve.',
    lead:
      'We break work into clear steps: information architecture, UX direction, technical approach, and milestones. You always know what ships next, what depends on what, and where you can give input.',
    imageSrc: '/development-plan.png',
    imageAlt: 'Sketches and structure in Figma',
    surfaceLabel: 'Add public/development-plan.png (Figma / blueprint)',
  },
  {
    id: 'build',
    navLabel: 'Build ^03',
    title: 'Prototype in the browser. Design and code stay in sync.',
    lead:
      'We move from Figma frames into working UI you can click through, then harden it for production. You see the product on real breakpoints and on device, not only in mockups.',
    imageSrc: '/development-build.png',
    imageAlt: 'Development environment with product preview on phone',
    surfaceLabel: 'Add public/development-build.png (code + device)',
  },
  {
    id: 'launch',
    navLabel: 'Launch ^04',
    title: 'Your site or web app goes live on the web.',
    lead:
      'We run cutover, DNS, SSL, and performance checks, then stay close while real traffic arrives. You get documentation and a handoff your team can operate.',
    imageSrc: '/development-launch.png',
    imageAlt: 'Live website or web application in the browser',
    surfaceLabel: 'Add public/development-launch.png (live product)',
  },
];

const ADAPT_STEP_COUNT = ADAPT_PANELS.length;
const ADAPT_SCROLL_GAP_REM = 0.55;
const ADAPT_SCROLL_GAPS_TOTAL_REM = (ADAPT_STEP_COUNT - 1) * ADAPT_SCROLL_GAP_REM;

const AdaptScrollViewport = styled.div`
  flex: 1 1 0;
  min-height: 280px;
  overflow: hidden;
  position: relative;
`;

const AdaptScrollStrip = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ADAPT_SCROLL_GAP_REM}rem;
  width: 100%;
  height: calc(${ADAPT_STEP_COUNT * 100}% + ${ADAPT_SCROLL_GAPS_TOTAL_REM}rem);
  transition: transform 0.65s cubic-bezier(0.32, 0.72, 0, 1);
  will-change: transform;
  transform: translateY(
    ${p =>
      `calc(${-p.$index} * (((100% - ${ADAPT_SCROLL_GAPS_TOTAL_REM}rem) / ${ADAPT_STEP_COUNT}) + ${ADAPT_SCROLL_GAP_REM}rem))`}
  );
`;

const AdaptScrollPage = styled.div`
  flex: 0 0 calc((100% - ${ADAPT_SCROLL_GAPS_TOTAL_REM}rem) / ${ADAPT_STEP_COUNT});
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function AdaptStepMedia({ imageSrc, imageAlt, fallbackLabel }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [imageSrc]);

  return (
    <AdaptPanelMediaSlot>
      {!imageSrc || failed ? (
        <AdaptMediaPlaceholder>{fallbackLabel}</AdaptMediaPlaceholder>
      ) : (
        <AdaptStepImage src={imageSrc} alt={imageAlt} onError={() => setFailed(true)} loading="lazy" decoding="async" />
      )}
    </AdaptPanelMediaSlot>
  );
}

const Development = () => {
  const heroScrollRef = useRef(null);
  const [heroLight, setHeroLight] = useState(false);
  const [adaptIndex, setAdaptIndex] = useState(0);

  useEffect(() => {
    document.title = 'Development | Hepta';
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
    const section = heroScrollRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = clamp01(-rect.top / scrollable);
      setHeroLight(progress > 0.48);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <HeroScroll ref={heroScrollRef}>
        <HeroSticky className={heroLight ? 'light' : ''}>
          <MetaRow $light={heroLight}>
            <MetaCell $light={heroLight}>Web experiences built to last</MetaCell>
            <MetaCell $light={heroLight}>Scroll to explore</MetaCell>
            <MetaCell $light={heroLight}>Sites, apps, and internal tools</MetaCell>
            <MetaCell $light={heroLight}>Hepta</MetaCell>
          </MetaRow>
          <HeroTitle $light={heroLight}>Development</HeroTitle>
        </HeroSticky>
      </HeroScroll>

      <PageBody>
        <Section>
          <SplitHero data-anim>
            <SplitHeroTitle>Ship products your team and customers will trust.</SplitHeroTitle>
            <SplitHeroBody>
              We design and build fast, accessible interfaces and the systems behind them. From marketing sites to complex web apps, everything is engineered for clarity,
              performance, and long-term maintainability.
            </SplitHeroBody>
          </SplitHero>
        </Section>

        <SectionDivider data-anim />

        <Section>
          <UploadCard data-anim style={{ transitionDelay: '0.05s' }}>
            <UploadVisual>
              <UploadVisualCopy>
                <UploadVisualTitle>One coherent stack from concept to production.</UploadVisualTitle>
                <UploadVisualLead>
                  Strategy, design, and engineering stay aligned so you are not juggling mismatched handoffs or fragile shortcuts.
                </UploadVisualLead>
              </UploadVisualCopy>
            </UploadVisual>
            <UploadStack>
              <UploadStackItem>
                <UploadStackTitle>Design systems that scale</UploadStackTitle>
                <UploadStackBody>
                  Typography, components, and motion are defined once and reused everywhere. Your brand stays consistent as the product grows.
                </UploadStackBody>
              </UploadStackItem>
              <UploadStackItem>
                <UploadStackTitle>APIs and data you can build on</UploadStackTitle>
                <UploadStackBody>
                  We structure backends and integrations so features are additive, not rewrites. Your roadmap stays feasible.
                </UploadStackBody>
              </UploadStackItem>
              <UploadStackItem>
                <UploadStackTitle>Observable and operable</UploadStackTitle>
                <UploadStackBody>
                  Hosting, monitoring, and release workflows are part of the deliverable, not an afterthought.
                </UploadStackBody>
              </UploadStackItem>
            </UploadStack>
          </UploadCard>
        </Section>

        <Section style={{ paddingTop: 'clamp(3rem, 8vw, 5rem)' }}>
          <AdaptGrid data-anim style={{ transitionDelay: '0.08s' }}>
            <AdaptNav role="tablist" aria-label="How we build">
              {ADAPT_PANELS.map((panel, i) => (
                <AdaptNavButton
                  key={panel.id}
                  type="button"
                  role="tab"
                  id={`adapt-tab-${panel.id}`}
                  aria-selected={adaptIndex === i}
                  aria-controls="adapt-panel"
                  tabIndex={adaptIndex === i ? 0 : -1}
                  $active={adaptIndex === i}
                  onClick={() => setAdaptIndex(i)}
                >
                  {panel.navLabel}
                </AdaptNavButton>
              ))}
            </AdaptNav>
            <AdaptMain
              id="adapt-panel"
              role="tabpanel"
              aria-labelledby={`adapt-tab-${ADAPT_PANELS[adaptIndex].id}`}
            >
              <AdaptScrollViewport>
                <AdaptScrollStrip $index={adaptIndex}>
                  {ADAPT_PANELS.map(panel => (
                    <AdaptScrollPage key={panel.id}>
                      <AdaptPanelInner>
                        <AdaptPanelCopy>
                          <AdaptMainTitle>{panel.title}</AdaptMainTitle>
                          <AdaptMainLead>{panel.lead}</AdaptMainLead>
                        </AdaptPanelCopy>
                        <AdaptStepMedia
                          imageSrc={panel.imageSrc}
                          imageAlt={panel.imageAlt}
                          fallbackLabel={panel.surfaceLabel}
                        />
                      </AdaptPanelInner>
                    </AdaptScrollPage>
                  ))}
                </AdaptScrollStrip>
              </AdaptScrollViewport>
            </AdaptMain>
          </AdaptGrid>
        </Section>

        <CapabilitiesSection data-anim style={{ transitionDelay: '0.06s' }}>
          <CapabilitiesGrid>
            <CapabilitiesStickyCol>
              <CapabilitiesTitle>Engineering-led delivery across the stack.</CapabilitiesTitle>
            </CapabilitiesStickyCol>
            <div>
              <CapabilitiesCopy>
                <p>
                  We work with organizations that need more than a template. Every project gets senior attention from architecture through launch, with documentation your
                  team can own.
                </p>
                <p>
                  Whether you need a flagship site, a customer portal, or internal software, we bring the same discipline: clear scope, honest timelines, and code you are not
                  afraid to open later.
                </p>
              </CapabilitiesCopy>
              <CapabilitiesList>
                <div>
                  <CapabilityLink>Marketing &amp; brand sites</CapabilityLink>
                  <CapabilityLink>Customer-facing web apps</CapabilityLink>
                  <CapabilityLink>Dashboards &amp; admin tools</CapabilityLink>
                  <CapabilityLink>Integrations &amp; APIs</CapabilityLink>
                </div>
                <div>
                  <CapabilityLink>Performance &amp; accessibility</CapabilityLink>
                  <CapabilityLink>Cloud deployment</CapabilityLink>
                  <CapabilityLink>Ongoing support</CapabilityLink>
                  <CapabilityLink>Discovery &amp; roadmap</CapabilityLink>
                </div>
              </CapabilitiesList>
              <DevContactBlock>
                <DevContactBody>
                  <p>
                    If you are planning a site, a product, or an internal tool and want engineering that holds up after launch, send a short note. We read every message and
                    reply personally when there is a fit.
                  </p>
                  <p>Share context, timeline, and what you need built. No pitch deck required.</p>
                  <DevContactMail href="mailto:hello@hepta.io">hello@hepta.io</DevContactMail>
                </DevContactBody>
              </DevContactBlock>
            </div>
          </CapabilitiesGrid>
        </CapabilitiesSection>
      </PageBody>
    </>
  );
};

export default Development;

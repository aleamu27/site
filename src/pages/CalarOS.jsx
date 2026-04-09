import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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

const BelowSection = styled.section`
  background: #F2F1ED;
  padding: 10rem 5vw;
  border-top: 1px solid #C8C7C3;
  min-height: 50vh;
  display: flex;
  align-items: center;
`;

const BelowText = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  color: #888;
  letter-spacing: -0.02em;
  margin: 0;
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

      <BelowSection>
        <BelowText>More about Calar OS coming soon.</BelowText>
      </BelowSection>
    </>
  );
};

export default CalarOS;

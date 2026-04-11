import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 8rem 2.5vw 8rem;
  display: grid;
  grid-template-columns: 44% 1fr;
  gap: 3vw;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 1.5rem 6rem;
  }
`;

const LeftCol = styled.div`
  position: sticky;
  top: 6rem;

  @media (max-width: 900px) {
    position: static;
  }
`;

const Label = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #999;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.55rem, 2.4vw, 2.15rem);
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
`;

const RightCol = styled.div`
  padding-top: 0.25rem;
`;

const Section = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ECECEC;
  margin-bottom: 2rem;
`;

const Body = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  line-height: 1.8;
  margin: 0 0 1.25rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Consulting = () => {
  return (
    <Page>
      <LeftCol>
        <Label>03 / 14 / 2025</Label>
        <Title>Strategy and digital consulting for organizations that operate where exposure is not an option.</Title>
      </LeftCol>

      <RightCol>
        <Section>
          <SectionTitle>What we do</SectionTitle>
          <Divider />
          <Body>
            We work with organizations to assess, plan, and improve their digital presence. From infrastructure decisions to platform strategy, we give you a clear picture of where you are and a concrete path to where you need to be.
          </Body>
          <Body>
            Our consulting work is not advisory in the abstract sense. We get into the details, review what exists, and tell you what needs to change and why. The output is a plan you can act on, not a report that sits on a shelf.
          </Body>
        </Section>

        <Section>
          <SectionTitle>Who we work with</SectionTitle>
          <Divider />
          <Body>
            We work with organizations that take their digital infrastructure seriously. That includes companies building critical internal systems, businesses that depend on their web presence to operate, and teams that need an outside perspective on decisions with long-term consequences.
          </Body>
          <Body>
            We do not work on small projects or with clients who are not ready to move. Our engagements are focused and time-bound. We come in, do the work, and hand off something your team can build on.
          </Body>
        </Section>

        <Section>
          <SectionTitle>How an engagement works</SectionTitle>
          <Divider />
          <Body>
            Every engagement starts with a structured review of your current stack, processes, and goals. We ask the questions most teams avoid and map the gap between where you are and where you need to be.
          </Body>
          <Body>
            From there we produce a clear set of recommendations with prioritization, estimated effort, and rationale. If you want us to stay involved through execution, we can do that too.
          </Body>
          <Body>
            Typical engagements run two to six weeks. Larger transformation work can run longer, but we keep scope tight to protect the quality of the output.
          </Body>
        </Section>

        <Section>
          <SectionTitle>Get in touch</SectionTitle>
          <Divider />
          <Body>
            If you are considering a consulting engagement, reach out at{' '}
            <a href="mailto:j@hepta.no">j@hepta.no</a>. Tell us briefly what you are working on and what kind of help you need. We will respond within one business day.
          </Body>
        </Section>
      </RightCol>
    </Page>
  );
};

export default Consulting;

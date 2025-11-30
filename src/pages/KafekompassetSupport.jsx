import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const SupportContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SupportTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #222;
  margin: 0 0 3rem 0;
  line-height: 1.2;
`;

const SupportSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
`;

const FAQItem = styled.div`
  margin-bottom: 2.5rem;
`;

const FAQQuestion = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

const FAQAnswer = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  
  p {
    margin: 0 0 1rem 0;
  }
  
  ul {
    margin: 0 0 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const ContactSection = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 3rem;
`;

const ContactTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 0.5rem 0;
`;

const EmailLink = styled.a`
  color: #184B54;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const KafekompassetSupport = () => {
  return (
    <Layout>
      <SupportContainer>
        <SupportTitle>Support og Hjelp – Kafekompasset</SupportTitle>

        <SupportSection>
          <SectionTitle>Ofte stilte spørsmål (FAQ)</SectionTitle>

          <FAQItem>
            <FAQQuestion>Hvorfor virker ikke kompasset?</FAQQuestion>
            <FAQAnswer>
              <p>
                For at kompasset skal peke riktig, må du være i bevegelse eller holde telefonen flatt. Sjekk også at du har gitt appen tilgang til posisjonen din. Gå til <strong>Innstillinger → Kafekompasset → Sted</strong> og sørg for at den står på "Når appen er i bruk".
              </p>
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Hvorfor finner ikke appen noen kafeer?</FAQQuestion>
            <FAQAnswer>
              <p>Dette kan skyldes to ting:</p>
              <ul>
                <li>
                  <strong>Filtre:</strong> Du har kanskje valgt for mange filtre samtidig. Prøv å slå av krav som "Må være åpen nå" eller "Vegetarvennlig" i filtermenyen (knappen øverst til venstre).
                </li>
                <li>
                  <strong>Dekning:</strong> Sjekk at du har internettilgang. Appen trenger nett for å hente informasjon om kafeer i nærheten.
                </li>
              </ul>
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Hvordan endrer jeg søkekriterier?</FAQQuestion>
            <FAQAnswer>
              <p>
                Trykk på filter-ikonet (tre linjer) øverst i venstre hjørne på skjermen. Her kan du velge om du vil ha steder med god wifi, uteservering, eller justere minimum rating.
              </p>
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Lagrer dere hvor jeg har vært?</FAQQuestion>
            <FAQAnswer>
              <p>
                Nei. Vi bruker kun posisjonen din for å finne nærmeste kaffe der og da. Ingen historikk lagres hos oss.
              </p>
            </FAQAnswer>
          </FAQItem>
        </SupportSection>

        <ContactSection>
          <ContactTitle>Kontakt Support</ContactTitle>
          <ContactText>
            Opplever du feil i appen eller har forslag til forbedringer? Send oss en e-post, så svarer vi så raskt som mulig!
          </ContactText>
          <ContactText>
            📧 E-post: <EmailLink href="mailto:a@hepta.no">a@hepta.no</EmailLink>
          </ContactText>
        </ContactSection>
      </SupportContainer>
    </Layout>
  );
};

export default KafekompassetSupport;


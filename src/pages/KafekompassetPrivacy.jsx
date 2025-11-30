import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PrivacyTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #222;
  margin: 0 0 3rem 0;
  line-height: 1.2;
`;

const PrivacySection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
`;

const List = styled.ul`
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ContactInfo = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
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

const LastUpdated = styled.div`
  font-size: 0.9rem;
  color: #999;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  text-align: center;
`;

const KafekompassetPrivacy = () => {
  return (
    <Layout>
      <PrivacyContainer>
        <PrivacyTitle>Personvernerklæring for Kafekompasset</PrivacyTitle>
        <LastUpdated>Sist oppdatert: 30. november 2025</LastUpdated>

        <PrivacySection>
          <SectionTitle>Introduksjon</SectionTitle>
          <SectionText>
            Denne personvernerklæringen beskriver hvordan Kafekompasset ("vi", "oss" eller "appen") samler inn, bruker og beskytter informasjonen din. Vi tar personvernet ditt på alvor. Kafekompasset er utviklet for å hjelpe deg å finne nærmeste kaffebar uten å lagre unødvendig informasjon om deg.
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>Innsamling og bruk av data</SectionTitle>
          
          <SectionTitle style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>1. Posisjonsdata (Stedsdata)</SectionTitle>
          <SectionText>
            Appens kjernefunksjon er å vise retningen og avstanden til nærmeste kaffebar. For å gjøre dette, ber appen om tilgang til enhetens posisjon ("Når appen er i bruk").
          </SectionText>
          <SectionText>
            <strong>Hva samles inn:</strong> Dine GPS-koordinater (breddegrad og lengdegrad).
          </SectionText>
          <SectionText>
            <strong>Hvordan det brukes:</strong> Koordinatene sendes midlertidig til vår server for å beregne hvilken kafé som er nærmest deg basert på dine valgte filtre (f.eks. om du ønsker uteservering eller wifi).
          </SectionText>
          <SectionText>
            <strong>Lagring:</strong> Vi lagrer ikke din historiske posisjon. Posisjonsdataene brukes kun i det øyeblikket du utfører et søk og forkastes etter at resultatet er levert tilbake til appen.
          </SectionText>

          <SectionTitle style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>2. Brukergenererte data og preferanser</SectionTitle>
          <SectionText>
            Appen lar deg filtrere søk basert på kriterier som "Åpen nå", "Uteservering", "Vegetarvennlig" og "Wifi". Disse preferansene lagres lokalt på enheten din for å huske valgene dine til neste gang, og sendes til serveren kun for å filtrere søkeresultatene.
          </SectionText>

          <SectionTitle style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>3. Ingen personlig identifiserbar informasjon</SectionTitle>
          <SectionText>Vi samler ikke inn:</SectionText>
          <List>
            <ListItem>Navn, e-postadresse eller telefonnummer.</ListItem>
            <ListItem>Bruksmønstre eller reklame-ID-er.</ListItem>
            <ListItem>Data som kan knyttes direkte til deg som person utenfor bruken av appen.</ListItem>
          </List>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>Tredjeparter</SectionTitle>
          <SectionText>
            Appen bruker ingen tredjeparts analyseverktøy (som Google Analytics eller Facebook Pixel) og viser ingen reklame. Posisjonsdata behandles kun av våre egne systemer og Apples innebygde lokasjonstjenester (CoreLocation) på telefonen din.
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>Dine rettigheter</SectionTitle>
          <SectionText>
            Du kan når som helst trekke tilbake tillatelsen for stedsdata ved å gå til innstillingene på din iPhone:
          </SectionText>
          <SectionText>
            <strong>Innstillinger → Kafekompasset → Sted → Velg "Aldri".</strong>
          </SectionText>
          <SectionText>
            Vær oppmerksom på at appen ikke vil fungere som tiltenkt uten tilgang til posisjon.
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>Kontakt oss</SectionTitle>
          <SectionText>
            Hvis du har spørsmål om denne personvernerklæringen, vennligst kontakt oss på:
          </SectionText>
          
          <ContactInfo>
            <ContactTitle>Kontaktinformasjon</ContactTitle>
            <ContactText>E-post: hei@alexanderamundsen.no</ContactText>
          </ContactInfo>
        </PrivacySection>
      </PrivacyContainer>
    </Layout>
  );
};

export default KafekompassetPrivacy;


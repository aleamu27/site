import React from 'react';
import styled from 'styled-components';

const TermContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const AccountBasedMarketingPage = () => {
  return (
    <TermContainer>
      <Title>Account-Based Marketing (ABM): Presisjonsmarkedsføring mot høyverdi-kunder</Title>
      <Content>
        <p>
          Account-Based Marketing (ABM) er en strategisk tilnærming der markedsføring- og salgsavdelinger jobber sammen for å rette seg mot en spesifikk liste med høyverdi-kontoer (bedrifter), i stedet for å kaste et bredt nett. Tenk på det som å fiske med harpun i stedet for med garn. Du identifiserer dine drømmekunder og skreddersyr all kommunikasjon og markedsføring direkte til dem.
        </p>
        <p>
          Dette oppnås ved å utvikle en Ideal Customer Profile (ICP), som definerer kjennetegnene til dine mest verdifulle kunder. Med en klar ICP kan du identifisere lignende selskaper og behandle hver av dem som et eget marked. Tilnærmingen er svært effektiv for B2B-selskaper med komplekse salgssykluser og høy kundeverdi.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> Ideal Customer Profile (ICP), Customer Lifetime Value (LTV), Salgstrakt.
        </p>
      </Content>
    </TermContainer>
  );
};

export default AccountBasedMarketingPage;

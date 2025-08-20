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

const NewsletterPage = () => {
  return (
    <TermContainer>
      <Title>Newsletter (Nyhetsbrev): Bygg lojalitet gjennom e-post</Title>
      <Content>
        <p>
          Et nyhetsbrev er en e-post som sendes jevnlig til en liste med abonnenter som har meldt seg på for å motta oppdateringer fra en bedrift. Det er en sentral del av e-postmarkedsføring og en effektiv måte å bygge og vedlikeholde relasjoner med kunder på.
        </p>
        <p>
          Innholdet i et nyhetsbrev kan variere fra bedriftsnyheter og produktoppdateringer til verdifulle tips, artikler og eksklusive tilbud. Et godt nyhetsbrev gir verdi til leseren og holder merkevaren din "top of mind". Det er en direkte kommunikasjonskanal du eier selv, uavhengig av algoritmer i sosiale medier.
        </p>
        <p>
          <strong>Relaterte uttrykk:</strong> E-postmarkedsføring, Abonnent, CRM.
        </p>
      </Content>
    </TermContainer>
  );
};

export default NewsletterPage;

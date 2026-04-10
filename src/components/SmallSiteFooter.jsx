import React from 'react';
import styled from 'styled-components';

const SmallFooter = styled.footer`
  background: ${p => (p.$surface === 'white' ? '#ffffff' : '#f2f1ed')};
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

const FooterRight = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  color: #888;
  letter-spacing: 0.05em;
`;

const SmallSiteFooter = ({ surface = 'warm' }) => (
  <SmallFooter $surface={surface}>
    <FooterLeft>The Infrastructure Beneath Digital Trust</FooterLeft>
    <FooterRight>© {new Date().getFullYear()} Hepta</FooterRight>
  </SmallFooter>
);

export default SmallSiteFooter;

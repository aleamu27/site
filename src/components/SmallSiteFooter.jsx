import React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

const SmallFooter = styled.footer`
  background: ${p => (p.$surface === 'white' ? '#ffffff' : '#f2f1ed')};
  padding: 2rem 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${p =>
    p.$topRule &&
    css`
      border-top: 1px solid #e8e8e8;
    `}
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

const SmallSiteFooter = ({ surface = 'warm', topRule = false }) => {
  const { t } = useTranslation('common');

  return (
    <SmallFooter $surface={surface} $topRule={topRule}>
      <FooterLeft>
        {t('hero.line1')}
        <br />
        {t('hero.line2')}
      </FooterLeft>
      <FooterRight>© {new Date().getFullYear()} {t('footer.copyright')}</FooterRight>
    </SmallFooter>
  );
};

export default SmallSiteFooter;

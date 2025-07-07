import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem 1.5rem;
`;

const Hero = styled.section`
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, ${COLORS.darkTeal} 0%, ${COLORS.red} 50%, ${COLORS.offWhite} 100%);
  color: ${COLORS.white};
  padding: 4rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2px 24px rgba(24,75,84,0.04);
`;

const Main = styled.main`
  margin-top: 2rem;
`;

const Layout = ({ hero, children }) => (
  <>
    {hero && <Hero>{hero}</Hero>}
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  </>
);

export default Layout; 
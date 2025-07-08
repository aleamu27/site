import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NAV_BORDER = '1px solid #E5E5E5';
const NAV_MONO = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const NAV_HEIGHT = 38;

const NavbarContainer = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: ${NAV_MONO};
  min-height: ${NAV_HEIGHT}px;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  background: rgba(159,159,159,0.38);
  /* border: ${NAV_BORDER}; */
  border: none;
  border-radius: 8px;
  padding: 0.11rem 0.85rem 0.11rem 0.35rem;
  margin: 1.2rem 0 0 1.1rem;
  box-shadow: none;
  height: ${NAV_HEIGHT}px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  /* border-radius: 50%; */
  border: none;
  background: transparent;
  color: #222;
  font-family: ${NAV_MONO};
  font-size: 1.1rem;
  font-weight: 700;
  margin-right: 1.2rem;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: border 0.2s;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #222;
    font-family: ${NAV_MONO};
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.11em;
    padding: 0.05rem 0.12rem;
    border-radius: 3px;
    transition: color 0.18s;
    &:hover, &:focus {
      color: #E5E5E5;
      background: none;
      outline: none;
    }
    &.active {
      color: #E5E5E5;
    }
  }
`;

const RightButton = styled(Link)`
  position: absolute;
  right: 1.1rem;
  top: 1.2rem;
  background: #222;
  color: #fff;
  font-size: 0.9rem;
  font-family: ${NAV_MONO};
  font-weight: 600;
  border-radius: 8px;
  padding: 1.4rem 1.1rem;
  text-decoration: none;
  transition: background 0.2s, color 0.18s;
  border: none;
  box-shadow: none;
  letter-spacing: 0.02em;
  height: ${NAV_HEIGHT}px;
  display: flex;
  align-items: center;
  &:hover {
    color: #e5e5e5;
  }
`;

const NAV_LINKS = [
  { to: '/work', label: 'Work', type: 'route' },
  { to: '/about', label: 'About', type: 'route' },
];

const Navbar = () => {
  const location = useLocation();
  const [logoError, setLogoError] = React.useState(false);

  return (
    <NavbarContainer role="navigation" aria-label="Main Navigation">
      <NavGroup>
        <Logo to="/">
          {!logoError ? (
            <img
              src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/logo-navbar-kzYMdHPcdM8s4aW9L51DTdT581K8Zl.png"
              alt="Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              onError={() => setLogoError(true)}
            />
          ) : (
            'BB'
          )}
        </Logo>
        <NavLinks>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
                tabIndex={0}
                aria-current={location.pathname === link.to ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </NavLink>
          ))}
        </NavLinks>
      </NavGroup>
      <RightButton to="/contact">Get in touch</RightButton>
    </NavbarContainer>
  );
};

export default Navbar; 
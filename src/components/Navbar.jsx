import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NAV_BORDER = '1px solid #E5E5E5';
const NAV_MONO = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
const NAV_HEIGHT = 38;

// Desktop Navbar Styles (existing)
const DesktopNavbarContainer = styled.nav`
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
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  background: rgba(159,159,159,0.38);
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

// Mobile Navbar Styles (new)
const MobileNavbarContainer = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(159, 159, 159, 0.38);
  backdrop-filter: blur(10px);
  border-radius: 0 0 12px 12px;
  padding: 16px 24px;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #222;
  border-radius: 50%;
  color: #fff;
  font-family: ${NAV_MONO};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.04em;
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #222;
  font-family: ${NAV_MONO};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::after {
    content: '${props => props.isOpen ? '×' : '☰'}';
    font-size: 1.2rem;
    margin-left: 4px;
  }
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(200, 200, 200, 0.95);
  backdrop-filter: blur(20px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 48px;
`;

const MobileMenuLink = styled(Link)`
  color: #222;
  font-family: ${NAV_MONO};
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.7;
  }
  
  &.active {
    opacity: 0.7;
  }
`;

const MobileGetInTouchButton = styled(Link)`
  background: #222;
  color: #fff;
  font-family: ${NAV_MONO};
  font-size: 1rem;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`;

const MobileCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  color: #222;
  font-family: ${NAV_MONO};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
`;

const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Journal' },
  { to: '/careers', label: 'Clients' },
  { to: '/careers', label: 'Join us' },
];

const Navbar = () => {
  const location = useLocation();
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <DesktopNavbarContainer role="navigation" aria-label="Main Navigation">
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
            {NAV_LINKS.slice(0, 4).map((link) => (
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
      </DesktopNavbarContainer>

      {/* Mobile Navbar */}
      <MobileNavbarContainer>
        <MobileNavHeader>
          <MobileLogo to="/">
            {!logoError ? (
              <img
                src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/logo-navbar-kzYMdHPcdM8s4aW9L51DTdT581K8Zl.png"
                alt="Logo"
                style={{ width: '20px', height: '20px', objectFit: 'contain', display: 'block' }}
                onError={() => setLogoError(true)}
              />
            ) : (
              'BB'
            )}
          </MobileLogo>
          <MobileMenuButton onClick={toggleMobileMenu} isOpen={mobileMenuOpen}>
            Get in touch | Menu
          </MobileMenuButton>
        </MobileNavHeader>

        <MobileMenuOverlay isOpen={mobileMenuOpen}>
          <MobileCloseButton onClick={closeMobileMenu}>
            Close
          </MobileCloseButton>
          
          <MobileMenuLinks>
            {NAV_LINKS.map((link) => (
              <MobileMenuLink
                key={link.to + link.label}
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                {link.label}
              </MobileMenuLink>
            ))}
          </MobileMenuLinks>

          <MobileGetInTouchButton to="/contact" onClick={closeMobileMenu}>
            Get in touch
          </MobileGetInTouchButton>
        </MobileMenuOverlay>
      </MobileNavbarContainer>
    </>
  );
};

export default Navbar; 
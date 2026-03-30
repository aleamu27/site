import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { supabase } from '../lib/supabase';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NAV_MONO = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
const NAV_HEIGHT = 38;

// Desktop Navbar Styles
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
  flex-direction: column;
  align-items: stretch;
  font-family: ${NAV_MONO};
  padding: 1.2rem 1.1rem 0 1.1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(159,159,159,0.38);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: none;
  border-radius: ${props => props.$menuOpen ? '8px 8px 0 0' : '8px'};
  padding: 0.35rem 0.5rem 0.35rem 0.35rem;
  box-shadow: none;
  height: ${NAV_HEIGHT + 10}px;
  transition: border-radius 0.3s ease;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const LogoText = styled.span`
  font-family: 'OCR-B Std', 'OCR B Std', monospace;
  font-size: 1.1rem;
  font-weight: 400;
  color: #222;
  letter-spacing: 0.05em;
`;

const RightButton = styled(Link)`
  background: #222;
  color: #fff;
  font-size: 0.9rem;
  font-family: ${NAV_MONO};
  font-weight: 600;
  border-radius: 6px;
  padding: 0 1.1rem;
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

const HamburgerButton = styled.button`
  background: transparent;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 6px;
  width: ${NAV_HEIGHT}px;
  height: ${NAV_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0,0,0,0.05);
  }
`;

const HamburgerIcon = styled.div`
  width: 18px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: #222;
    transition: all 0.3s ease;
  }

  ${props => props.$isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translate(4px, 4px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  `}
`;

// Dropdown Menu Panel (replaces full screen overlay)
const MenuDropdown = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  background: #1a1a1a;
  border-radius: 0 0 8px 8px;
  padding: 2rem;
  animation: ${slideDown} 0.3s ease forwards;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
`;

const MenuContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const MenuNavSection = styled.div``;

const MenuSectionLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
  font-family: ${NAV_MONO};
`;

const MenuNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MenuNavLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  &:hover {
    opacity: 0.6;
  }
`;

const MenuNavLinkArrow = styled(Link)`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '↳';
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const LatestNewsSection = styled.div``;

const LatestNewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ViewAllLink = styled(Link)`
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  text-decoration: underline;
  font-family: ${NAV_MONO};

  &:hover {
    color: #fff;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  color: #fff;
`;

const NewsDate = styled.div`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 0.75rem;
  font-family: ${NAV_MONO};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const NewsImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #333;
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const NewsExcerpt = styled.p`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  margin: 0 0 1rem 0;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  border-bottom: 1px solid #fff;
  padding-bottom: 2px;
  transition: opacity 0.2s ease;

  &:before {
    content: '↳';
  }

  &:hover {
    opacity: 0.7;
  }
`;

// Mobile Navbar Styles
const MobileNavbarContainer = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1001;
`;

const MobileNavHeader = styled.div`
  background: rgba(159,159,159,0.38);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: ${props => props.$menuOpen ? '8px 8px 0 0' : '8px'};
  padding: 12px 20px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: border-radius 0.3s ease;
`;

const MobileHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 28px;
`;

const MobileLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MobileLogoImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  display: block;
`;

const MobileLogoFallback = styled.div`
  width: 32px;
  height: 32px;
  background: #000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
`;

const MobileMenuButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MobileGetInTouchLink = styled(Link)`
  background: none;
  border: none;
  color: #000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const MobileMenuToggle = styled.button`
  background: none;
  border: none;
  color: #000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  letter-spacing: -0.01em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const MenuSeparator = styled.span`
  color: #666;
  margin: 0 8px;
`;

const MobileMenuDropdown = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  background: #1a1a1a;
  border-radius: 0 0 8px 8px;
  padding: 1.5rem;
  animation: ${slideDown} 0.3s ease forwards;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

const MobileMenuNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
`;

const MobileMenuNavLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  &:hover {
    opacity: 0.6;
  }
`;

const MobileMenuNavLinkArrow = styled(Link)`
  font-size: 1.1rem;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '↳';
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const MobileNewsSection = styled.div`
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1.5rem;
`;

const MobileNewsCard = styled.div`
  color: #fff;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

// Navigation links
const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/newsletter', label: 'Newsletter' },
  { to: '/careers', label: 'Careers' },
];

// Sub navigation links
const SUB_NAV_LINKS = [
  { to: '/custom-ai', label: 'Custom AI' },
  { to: '/development', label: 'Development' },
  { to: '/ai-automations', label: 'Automation' },
  { to: '/design', label: 'Design' },
];

const Navbar = () => {
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const fetchLatestPosts = async () => {
    if (!supabase) {
      console.warn('Supabase not configured');
      return;
    }
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(2);

      if (error) {
        console.error('Error fetching posts:', error);
        return;
      }
      if (data) {
        setLatestPosts(data);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).toUpperCase();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
  };

  const closeDesktopMenu = () => {
    setDesktopMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <DesktopNavbarContainer role="navigation" aria-label="Main Navigation">
        <NavGroup $menuOpen={desktopMenuOpen}>
          <NavLeft>
            <Logo to="/" onClick={closeDesktopMenu}>
              {!logoError ? (
                <img
                  src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/logo-navbar-kzYMdHPcdM8s4aW9L51DTdT581K8Zl.png"
                  alt="Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                  onError={() => setLogoError(true)}
                />
              ) : (
                'H'
              )}
            </Logo>
            <LogoText>HEPTA</LogoText>
          </NavLeft>
          <NavRight>
            <RightButton to="/contact">Get in touch</RightButton>
            <HamburgerButton onClick={toggleDesktopMenu} aria-label="Toggle menu">
              <HamburgerIcon $isOpen={desktopMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
              </HamburgerIcon>
            </HamburgerButton>
          </NavRight>
        </NavGroup>

        {/* Desktop Dropdown Menu */}
        <MenuDropdown $isOpen={desktopMenuOpen}>
          <MenuContent>
            <MenuNavSection>
              <MenuSectionLabel>Navigation</MenuSectionLabel>
              <MenuNavLinks>
                {NAV_LINKS.map((link) => (
                  <MenuNavLink key={link.to} to={link.to} onClick={closeDesktopMenu}>
                    {link.label}
                  </MenuNavLink>
                ))}
                {SUB_NAV_LINKS.map((link) => (
                  <MenuNavLinkArrow key={link.to} to={link.to} onClick={closeDesktopMenu}>
                    {link.label}
                  </MenuNavLinkArrow>
                ))}
              </MenuNavLinks>
            </MenuNavSection>

            <LatestNewsSection>
              <LatestNewsHeader>
                <MenuSectionLabel>Latest News</MenuSectionLabel>
                <ViewAllLink to="/newsletter" onClick={closeDesktopMenu}>
                  View all posts →
                </ViewAllLink>
              </LatestNewsHeader>
              <NewsGrid>
                {latestPosts.map((post) => (
                  <NewsCard key={post.id}>
                    <NewsDate>{formatDate(post.created_at)}</NewsDate>
                    {post.featured_image && (
                      <NewsImage>
                        <img src={post.featured_image} alt={post.title} />
                      </NewsImage>
                    )}
                    <NewsTitle>{post.title}</NewsTitle>
                    {post.excerpt && (
                      <NewsExcerpt>{post.excerpt}</NewsExcerpt>
                    )}
                    <ReadMoreLink to={`/newsletter/${post.slug}`} onClick={closeDesktopMenu}>
                      Read More
                    </ReadMoreLink>
                  </NewsCard>
                ))}
                {latestPosts.length === 0 && (
                  <NewsExcerpt>No posts yet.</NewsExcerpt>
                )}
              </NewsGrid>
            </LatestNewsSection>
          </MenuContent>
        </MenuDropdown>
      </DesktopNavbarContainer>

      {/* Mobile Navbar */}
      <MobileNavbarContainer>
        <MobileNavWrapper>
          <MobileNavHeader $menuOpen={mobileMenuOpen}>
            <MobileHeaderTop>
              <MobileLogo to="/" onClick={closeMobileMenu}>
                {!logoError ? (
                  <MobileLogoImage
                    src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/logo-navbar-kzYMdHPcdM8s4aW9L51DTdT581K8Zl.png"
                    alt="Hepta Logo"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <MobileLogoFallback>H</MobileLogoFallback>
                )}
              </MobileLogo>
              <MobileMenuButtonGroup>
                <MobileGetInTouchLink to="/contact">
                  Get in touch
                </MobileGetInTouchLink>
                <MenuSeparator>|</MenuSeparator>
                <MobileMenuToggle onClick={toggleMobileMenu}>
                  {mobileMenuOpen ? 'Close' : 'Menu'}
                </MobileMenuToggle>
              </MobileMenuButtonGroup>
            </MobileHeaderTop>
          </MobileNavHeader>

          {/* Mobile Dropdown Menu */}
          <MobileMenuDropdown $isOpen={mobileMenuOpen}>
            <MenuSectionLabel>Navigation</MenuSectionLabel>
            <MobileMenuNavLinks>
              {NAV_LINKS.map((link) => (
                <MobileMenuNavLink key={link.to} to={link.to} onClick={closeMobileMenu}>
                  {link.label}
                </MobileMenuNavLink>
              ))}
              {SUB_NAV_LINKS.map((link) => (
                <MobileMenuNavLinkArrow key={link.to} to={link.to} onClick={closeMobileMenu}>
                  {link.label}
                </MobileMenuNavLinkArrow>
              ))}
            </MobileMenuNavLinks>

            <MobileNewsSection>
              <LatestNewsHeader>
                <MenuSectionLabel style={{ marginBottom: 0 }}>Latest News</MenuSectionLabel>
                <ViewAllLink to="/newsletter" onClick={closeMobileMenu}>
                  View all →
                </ViewAllLink>
              </LatestNewsHeader>
              {latestPosts.map((post) => (
                <MobileNewsCard key={post.id}>
                  <NewsDate>{formatDate(post.created_at)}</NewsDate>
                  <NewsTitle>{post.title}</NewsTitle>
                  <ReadMoreLink to={`/newsletter/${post.slug}`} onClick={closeMobileMenu}>
                    Read More
                  </ReadMoreLink>
                </MobileNewsCard>
              ))}
              {latestPosts.length === 0 && (
                <NewsExcerpt>No posts yet.</NewsExcerpt>
              )}
            </MobileNewsSection>
          </MobileMenuDropdown>
        </MobileNavWrapper>
      </MobileNavbarContainer>
    </>
  );
};

export default Navbar;

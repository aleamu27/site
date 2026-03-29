import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { supabase } from '../lib/supabase';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
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
  justify-content: space-between;
  background: rgba(159,159,159,0.38);
  border: none;
  border-radius: 8px;
  padding: 0.35rem 0.5rem 0.35rem 0.35rem;
  margin: 1.2rem 1.1rem 0 1.1rem;
  box-shadow: none;
  height: ${NAV_HEIGHT + 10}px;
  opacity: ${props => props.$visible ? 1 : 0};
  pointer-events: ${props => props.$visible ? 'auto' : 'none'};
  animation: ${props => props.$visible ? fadeIn : 'none'} 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transition: opacity 0.3s ease;
  flex: 1;
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

// Full screen menu overlay
const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1a1a1a;
  z-index: 9999;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.4s ease, visibility 0.4s ease;
  overflow-y: auto;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
`;

const MenuLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

const MenuLogoImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: brightness(0) invert(1);
`;

const MenuHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuGetInTouch = styled(Link)`
  background: transparent;
  color: #fff;
  font-size: 0.95rem;
  font-family: ${NAV_MONO};
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 6px;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 6px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

const MenuContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const MenuNavSection = styled.div``;

const MenuSectionLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  font-family: ${NAV_MONO};
`;

const MenuNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MenuNavLink = styled(Link)`
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const MenuNavLinkArrow = styled(Link)`
  font-size: 2rem;
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LatestNewsSection = styled.div``;

const LatestNewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  color: #fff;
`;

const NewsDate = styled.div`
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 1rem;
  font-family: ${NAV_MONO};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const NewsImage = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  background: #333;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const NewsExcerpt = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
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

const MobileNavHeader = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  background: rgba(159,159,159,0.38);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 8px;
  padding: 12px 20px;
  z-index: 1001;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
`;

const MobileHeaderContent = styled.div`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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

// Navigation links
const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
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
  const [navVisible, setNavVisible] = useState(false);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const threshold = NAV_HEIGHT + 30 + 20;
      setNavVisible(e.clientY <= threshold);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  useEffect(() => {
    if (desktopMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [desktopMenuOpen]);

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
        <NavGroup $visible={navVisible || desktopMenuOpen}>
          <NavLeft>
            <Logo to="/">
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
            <HamburgerButton onClick={toggleDesktopMenu} aria-label="Open menu">
              <HamburgerIcon $isOpen={desktopMenuOpen}>
                <span></span>
                <span></span>
                <span></span>
              </HamburgerIcon>
            </HamburgerButton>
          </NavRight>
        </NavGroup>
      </DesktopNavbarContainer>

      {/* Full Screen Menu Overlay */}
      <MenuOverlay $isOpen={desktopMenuOpen}>
        <MenuHeader>
          <MenuLogo to="/" onClick={closeDesktopMenu}>
            {!logoError ? (
              <MenuLogoImage
                src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/logo-navbar-kzYMdHPcdM8s4aW9L51DTdT581K8Zl.png"
                alt="Hepta Logo"
              />
            ) : (
              <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>H</span>
            )}
          </MenuLogo>
          <MenuHeaderRight>
            <MenuGetInTouch to="/contact" onClick={closeDesktopMenu}>
              Get in touch
            </MenuGetInTouch>
            <CloseButton onClick={closeDesktopMenu} aria-label="Close menu">
              ×
            </CloseButton>
          </MenuHeaderRight>
        </MenuHeader>

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
              <ViewAllLink to="/blog" onClick={closeDesktopMenu}>
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
                  <ReadMoreLink to={`/blog/${post.slug}`} onClick={closeDesktopMenu}>
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
      </MenuOverlay>

      {/* Mobile Navbar */}
      <MobileNavbarContainer>
        <MobileNavHeader>
          <MobileHeaderContent>
            <MobileHeaderTop>
              <MobileLogo to="/">
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
          </MobileHeaderContent>
        </MobileNavHeader>
      </MobileNavbarContainer>

      {/* Mobile uses same overlay */}
      {mobileMenuOpen && (
        <MenuOverlay $isOpen={mobileMenuOpen}>
          <MenuHeader>
            <MenuLogo to="/" onClick={closeMobileMenu}>
              {!logoError ? (
                <MenuLogoImage
                  src="https://ascpxp2rq0hfmacv.public.blob.vercel-storage.com/logo-navbar-kzYMdHPcdM8s4aW9L51DTdT581K8Zl.png"
                  alt="Hepta Logo"
                />
              ) : (
                <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>H</span>
              )}
            </MenuLogo>
            <MenuHeaderRight>
              <MenuGetInTouch to="/contact" onClick={closeMobileMenu}>
                Get in touch
              </MenuGetInTouch>
              <CloseButton onClick={closeMobileMenu} aria-label="Close menu">
                ×
              </CloseButton>
            </MenuHeaderRight>
          </MenuHeader>

          <MenuContent>
            <MenuNavSection>
              <MenuSectionLabel>Navigation</MenuSectionLabel>
              <MenuNavLinks>
                {NAV_LINKS.map((link) => (
                  <MenuNavLink key={link.to} to={link.to} onClick={closeMobileMenu}>
                    {link.label}
                  </MenuNavLink>
                ))}
                {SUB_NAV_LINKS.map((link) => (
                  <MenuNavLinkArrow key={link.to} to={link.to} onClick={closeMobileMenu}>
                    {link.label}
                  </MenuNavLinkArrow>
                ))}
              </MenuNavLinks>
            </MenuNavSection>

            <LatestNewsSection>
              <LatestNewsHeader>
                <MenuSectionLabel>Latest News</MenuSectionLabel>
                <ViewAllLink to="/blog" onClick={closeMobileMenu}>
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
                    <ReadMoreLink to={`/blog/${post.slug}`} onClick={closeMobileMenu}>
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
        </MenuOverlay>
      )}
    </>
  );
};

export default Navbar;

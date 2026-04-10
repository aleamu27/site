import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { getArticleBySlug } from '../data/newsArticles';
import SmallSiteFooter from '../components/SmallSiteFooter';

const ArticleShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ArticleRoot = styled.div`
  flex: 1 0 auto;
  padding-top: 6.5rem;

  @media (min-width: 768px) {
    padding-top: 7rem;
  }
`;

/** Single column: image + text share the same width so left edges line up. */
const ArticleColumn = styled.div`
  width: 60vw;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 clamp(1rem, 3vw, 1.5rem);

  @media (min-width: 640px) {
    padding: 0;
  }
`;

const BackLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  color: #888;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2rem;

  &:hover {
    color: #1a1a1a;
  }
`;

const Hero = styled.div`
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 2rem;
  background: #f0f0f0;
`;

const HeroImg = styled.img`
  width: 100%;
  height: auto;
  max-height: min(52vh, 480px);
  object-fit: cover;
  display: block;
`;

const Headline = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.65rem, 4.2vw, 2.35rem);
  font-weight: 600;
  color: #111;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
`;

const Dateline = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #666;
  margin: 0 0 2.25rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e5e5;
`;

const Body = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  color: #222;
  line-height: 1.78;
  margin: 0 0 1.35rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const TextEndSpacer = styled.div`
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const NewsArticle = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [slug]);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Hepta`;
    }
  }, [article]);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const { title, date, imageSrc, imageAlt, paragraphs } = article;

  return (
    <ArticleShell>
      <ArticleRoot>
        <ArticleColumn>
          <BackLink to="/news">← All news</BackLink>

          {!imgFailed && imageSrc ? (
            <Hero>
              <HeroImg src={imageSrc} alt={imageAlt || ''} onError={() => setImgFailed(true)} loading="eager" decoding="async" />
            </Hero>
          ) : null}

          <Headline>{title}</Headline>
          <Dateline>{date}</Dateline>

          {paragraphs.map((text, i) => (
            <Body key={i}>{text}</Body>
          ))}

          <TextEndSpacer />
        </ArticleColumn>
      </ArticleRoot>

      <SmallSiteFooter surface="white" />
    </ArticleShell>
  );
};

export default NewsArticle;

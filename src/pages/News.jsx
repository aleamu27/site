import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NEWS_ARTICLES } from '../data/newsArticles';
import SmallSiteFooter from '../components/SmallSiteFooter';

const NewsShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  flex: 1 0 auto;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 8rem 2.5vw 8rem;
  display: grid;
  grid-template-columns: 44% 1fr;
  gap: 3vw;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 1.5rem 6rem;
  }
`;

const LeftCol = styled.div`
  position: sticky;
  top: 6rem;

  @media (max-width: 900px) {
    position: static;
  }
`;

const Label = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #999;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.55rem, 2.4vw, 2.15rem);
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
`;

const RightCol = styled.div`
  padding-top: 0.25rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ececec;
  margin-bottom: 0;
`;

const ArticleList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ArticleItem = styled.li`
  border-top: 1px solid #ececec;

  &:first-child {
    border-top: none;
  }
`;

const ArticleLink = styled(Link)`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  padding: 1.35rem 0;
  line-height: 1.35;
  transition: color 0.2s ease;

  &:hover {
    color: #555;
  }
`;

const ArticleDate = styled.span`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  color: #999;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 0.5rem;
`;

const News = () => {
  useEffect(() => {
    document.title = 'News | Hepta';
  }, []);

  const sorted = [...NEWS_ARTICLES].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <NewsShell>
      <Page>
        <LeftCol>
          <Label>News</Label>
          <Title>News from Hepta.</Title>
        </LeftCol>

        <RightCol>
          <SectionTitle>Articles</SectionTitle>
          <Divider />
          <ArticleList>
            {sorted.map(article => (
              <ArticleItem key={article.slug}>
                <ArticleLink to={`/news/${article.slug}`}>
                  {article.title}
                  <ArticleDate>{article.date}</ArticleDate>
                </ArticleLink>
              </ArticleItem>
            ))}
          </ArticleList>
        </RightCol>
      </Page>
      <SmallSiteFooter surface="white" />
    </NewsShell>
  );
};

export default News;

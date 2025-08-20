import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TermsContainer = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const LetterGroup = styled.div`
  margin-bottom: 2rem;
`;

const LetterHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
`;

const TermList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const TermListItem = styled.li`
  a {
    text-decoration: none;
    color: #007bff;
    font-size: 1.1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const terms = [
    { name: 'A/B Testing', path: 'ab-testing' },
    { name: 'AIDA', path: 'aida' },
    { name: 'Account-Based Marketing', path: 'account-based-marketing' },
    { name: 'Actual Value', path: 'actual-value' },
    { name: 'Ad Copy', path: 'ad-copy' },
    { name: 'Ad Recall', path: 'ad-recall' },
    { name: 'Affiliate Marketing', path: 'affiliate-marketing' },
    { name: 'Alt Text', path: 'alt-text' },
    { name: 'Average Order Value', path: 'average-order-value' },
    { name: 'Average Total Cost', path: 'average-total-cost' },
    { name: 'Backlink', path: 'backlink' },
    { name: 'Benchmark', path: 'benchmark' },
    { name: 'Blogg', path: 'blogg' },
    { name: 'Bounce Rate', path: 'bounce-rate' },
    { name: 'Brand Awareness', path: 'brand-awareness' },
    { name: 'CAC (Customer Acquisition Cost)', path: 'cac' },
    { name: 'CMS (Content Management System)', path: 'cms' },
    { name: 'CPA (Cost Per Acquisition)', path: 'cpa' },
    { name: 'CPC (Cost Per Click)', path: 'cpc' },
    { name: 'CPL (Cost Per Lead)', path: 'cpl' },
    { name: 'CPM (Cost Per Mille)', path: 'cpm' },
    { name: 'CPO (Cost Per Order)', path: 'cpo' },
    { name: 'CRM (Customer Relationship Management)', path: 'crm' },
    { name: 'CRO (Conversion Rate Optimization)', path: 'cro' },
    { name: 'CTA (Call To Action)', path: 'cta' },
    { name: 'CTR (Click-Through Rate)', path: 'ctr' },
    { name: 'Content Marketing', path: 'content-marketing' },
    { name: 'Content Metrics', path: 'content-metrics' },
    { name: 'Direct Mail', path: 'direct-mail' },
    { name: 'Email Marketing', path: 'email-marketing' },
    { name: 'Facebook Ads', path: 'facebook-ads' },
    { name: 'Funnel', path: 'funnel' },
    { name: 'Geo-targeting', path: 'geo-targeting' },
    { name: 'Google Ads', path: 'google-ads' },
    { name: 'Google Analytics', path: 'google-analytics' },
    { name: 'Impression', path: 'impression' },
    { name: 'Inbound Marketing', path: 'inbound-marketing' },
    { name: 'Influencer Marketing', path: 'influencer-marketing' },
    { name: 'Instagram Ads', path: 'instagram-ads' },
    { name: 'Intent Data', path: 'intent-data' },
    { name: 'KPI (Key Performance Indicator)', path: 'kpi' },
    { name: 'Keyword', path: 'keyword' },
    { name: 'Landing Page', path: 'landing-page' },
    { name: 'Lead', path: 'lead' },
    { name: 'LinkedIn Ads', path: 'linkedin-ads' },
    { name: 'MQL (Marketing Qualified Lead)', path: 'mql' },
    { name: 'Marketing Automation', path: 'marketing-automation' },
    { name: 'Marketing Mix', path: 'marketing-mix' },
    { name: 'Native Advertising', path: 'native-advertising' },
    { name: 'Newsletter', path: 'newsletter' },
    { name: 'Organic Search', path: 'organic-search' },
    { name: 'PPC (Pay-Per-Click)', path: 'ppc' },
    { name: 'Programmatic Advertising', path: 'programmatic-advertising' },
    { name: 'ROI (Return on Investment)', path: 'roi' },
    { name: 'ROAS (Return on Ad Spend)', path: 'roas' },
    { name: 'Sales Funnel', path: 'sales-funnel' },
    { name: 'SEM (Search Engine Marketing)', path: 'sem' },
    { name: 'SEO (Search Engine Optimization)', path: 'seo' },
    { name: 'SERP (Search Engine Results Page)', path: 'serp' },
    { name: 'Social Media Marketing', path: 'social-media-marketing' },
    { name: 'SQL (Sales Qualified Lead)', path: 'sql' },
    { name: 'Targeting', path: 'targeting' },
    { name: 'TikTok Ads', path: 'tiktok-ads' },
    { name: 'UTM Tagging', path: 'utm-tagging' },
    { name: 'Webinar', path: 'webinar' },
].sort((a, b) => a.name.localeCompare(b.name));

const groupedTerms = terms.reduce((acc, term) => {
  const firstLetter = term.name[0].toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(term);
  return acc;
}, {});

const MarketingTermsPage = () => {
  return (
    <TermsContainer>
      <Title>Ordliste for Markedsføring</Title>
      {Object.keys(groupedTerms).map(letter => (
        <LetterGroup key={letter}>
          <LetterHeading>{letter}</LetterHeading>
          <TermList>
            {groupedTerms[letter].map(term => (
              <TermListItem key={term.path}>
                <Link to={`/marketing-terms/${term.path}`}>{term.name}</Link>
              </TermListItem>
            ))}
          </TermList>
        </LetterGroup>
      ))}
    </TermsContainer>
  );
};

export default MarketingTermsPage;

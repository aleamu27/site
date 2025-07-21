import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';

const JobContainer = styled.div`
  max-width: 800px;
  margin: 7rem auto 0 auto;
  padding: 4rem 0;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 3rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #222;
  }
  
  &::before {
    content: '←';
    margin-right: 0.5rem;
  }
`;

const JobHeader = styled.div`
  margin-bottom: 3rem;
`;

const JobTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #222;
  margin: 0 0 1rem 0;
  line-height: 1.2;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 1rem;
`;

const MetaLabel = styled.span`
  font-weight: 600;
  color: #222;
`;

const JobContent = styled.div`
  line-height: 1.7;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1.5rem 0;
`;

const SectionContent = styled.div`
  color: #666;
  font-size: 1.1rem;
  
  p {
    margin: 0 0 1.5rem 0;
  }
  
  ul {
    margin: 0 0 1.5rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  background: #222;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease;
  margin-top: 2rem;
  
  &:hover {
    background: #444;
  }
`;

const JobListing = () => {
  const { slug } = useParams();
  
  // Mock job data - in real implementation, this would come from an API
  const jobData = {
    'open-application': {
      title: 'Open Application',
      location: 'Oslo',
      type: 'Various',
      department: 'All Departments',
      description: 'Do not see a position that fits? We are always looking for talented individuals to join our team. Send us your application and let us know how you can contribute to our mission.',
      responsibilities: [
        'Tell us about your skills and experience',
        'Share your passion for our industry',
        'Explain how you can contribute to our team',
        'Provide examples of your best work',
        'Let us know what role you are interested in'
      ],
      requirements: [
        'Relevant experience in your field',
        'Strong portfolio or work examples',
        'Excellent communication skills',
        'Passion for creativity and innovation',
        'Ability to work in a collaborative environment'
      ],
      benefits: [
        'Competitive compensation packages',
        'Comprehensive benefits',
        'Professional development opportunities',
        'Creative and collaborative work environment',
        'Opportunity to grow with the company'
      ],
      applyLink: 'https://example.com/apply/open-application'
    },
    'senior-animator': {
      title: 'Senior Animator',
      location: 'Oslo',
      type: 'Full-time',
      department: 'Creative',
      description: 'We are seeking a skilled Senior Animator to create engaging animations and motion graphics. You will bring designs to life through creative storytelling and visual effects that enhance user experiences.',
      responsibilities: [
        'Create high-quality 2D and 3D animations for digital platforms',
        'Develop motion graphics for video content and web applications',
        'Collaborate with designers and directors to bring concepts to life',
        'Maintain consistency in animation style and quality standards',
        'Optimize animations for various platforms and devices',
        'Mentor junior animators and provide creative guidance'
      ],
      requirements: [
        '5+ years of professional animation experience',
        'Proficiency in After Effects, Cinema 4D, and Adobe Creative Suite',
        'Strong understanding of animation principles and motion design',
        'Experience with 3D animation and rendering',
        'Portfolio demonstrating diverse animation styles and techniques',
        'Excellent attention to detail and ability to meet deadlines'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Health insurance and wellness programs',
        'Flexible working hours and remote work options',
        'Access to latest animation software and hardware',
        'Professional development and conference attendance',
        'Creative freedom to explore new animation techniques'
      ],
      applyLink: 'mailto:j@hepta.no?subject=Application for Senior Animator Position'
    },
    'accountant': {
      title: 'Accountant',
      location: 'Oslo',
      type: 'Full-time',
      department: 'Finance',
      description: 'Join our finance team as an Accountant. You will be responsible for managing financial records, preparing reports, and ensuring compliance with accounting standards and regulations.',
      responsibilities: [
        'Maintain accurate financial records and bookkeeping',
        'Prepare monthly, quarterly, and annual financial reports',
        'Handle accounts payable and receivable processes',
        'Assist with budget preparation and financial planning',
        'Ensure compliance with tax regulations and accounting standards',
        'Support audit processes and work with external auditors',
        'Process invoices and manage expense reporting systems'
      ],
      requirements: [
        'Bachelor\'s degree in Accounting, Finance, or related field',
        '3+ years of accounting experience in a professional environment',
        'Proficiency in accounting software (QuickBooks, Xero, or similar)',
        'Strong knowledge of Norwegian accounting standards and tax regulations',
        'Excellent attention to detail and analytical skills',
        'Strong communication skills in Norwegian and English',
        'CPA certification or working towards it is a plus'
      ],
      benefits: [
        'Competitive salary and annual bonus',
        'Comprehensive health and dental insurance',
        'Pension scheme and financial planning support',
        'Professional development and certification support',
        'Flexible working arrangements',
        'Modern office in central Oslo',
        'Team building activities and company events'
      ],
      applyLink: 'mailto:j@hepta.no?subject=Application for Accountant Position'
    }
  };

  const job = jobData[slug];

  if (!job) {
    return (
      <JobContainer>
        <BackLink to="/careers">Back to Careers</BackLink>
        <h1>Job not found</h1>
        <p>The job listing you're looking for doesn't exist.</p>
      </JobContainer>
    );
  }

  return (
    <JobContainer>
      <BackLink to="/careers">Back to Careers</BackLink>
      
      <JobHeader>
        <JobTitle>{job.title}</JobTitle>
        <JobMeta>
          <MetaItem>
            <MetaLabel>Location:</MetaLabel>
            {job.location}
          </MetaItem>
          <MetaItem>
            <MetaLabel>Type:</MetaLabel>
            {job.type}
          </MetaItem>
          <MetaItem>
            <MetaLabel>Department:</MetaLabel>
            {job.department}
          </MetaItem>
        </JobMeta>
      </JobHeader>

      <JobContent>
        <Section>
          <SectionTitle>About the Role</SectionTitle>
          <SectionContent>
            <p>{job.description}</p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Key Responsibilities</SectionTitle>
          <SectionContent>
            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Requirements</SectionTitle>
          <SectionContent>
            <ul>
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Benefits</SectionTitle>
          <SectionContent>
            <ul>
              {job.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </SectionContent>
        </Section>

        <ApplyButton href={job.applyLink} target="_blank" rel="noopener noreferrer">
          Apply for this position
        </ApplyButton>
      </JobContent>
    </JobContainer>
  );
};

export default JobListing; 
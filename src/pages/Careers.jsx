import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';



const HeroTextBlock = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 2.5rem 0;
`;

const HeroTextInner = styled.div`
  font-family: 'Inter', 'system-ui', 'Arial', sans-serif;
  font-size: clamp(2.1rem, 4vw, 3.2rem);
  font-weight: 400;
  color: #222;
  line-height: 1.13;
  padding: 1.1rem 0 1.2rem 2.5vw;
  text-align: left;
  max-width: 1200px;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    padding-left: 4vw;
    padding-right: 2vw;
  }
`;

const HeroSubText = styled.span`
  color: #b3b3b3;
`;

const WorkGridWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 5rem;
  @media (max-width: 700px) {
    margin-top: 6rem;
    margin-bottom: 2.5rem;
  }
`;

const WorkGridSection = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JobSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 0;
`;

const JobSectionHeading = styled.h2`
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  color: #b3b3b3;
  font-weight: 600;
  margin-bottom: 0.4em;
  text-align: left;
  margin-left: 1px;
`;

const TopLine = styled.div`
  width: 100%;
  height: 1px;
  background: #222;
  margin-bottom: 2rem;
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const JobItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #222;
  cursor: pointer;
  transition: background 0.18s;
  
  &:hover {
    background: #f8f8f8;
  }
  
  &:last-child {
    border-bottom: 1px solid #222;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 500;
  color: #222;
  margin: 0;
  line-height: 1.15;
`;

const ArrowIcon = styled.span`
  font-size: 1.2rem;
  color: #222;
  font-weight: 400;
  transition: transform 0.2s ease;
  transform: ${({ expanded }) => expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const JobContent = styled.div`
  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid #222;
`;

const JobDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  max-width: 500px;
`;

const JobLink = styled(Link)`
  color: #222;
  text-decoration: underline;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: #666;
  }
`;



const CTAButton = styled.button`
  background: #222;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-top: 2rem;
  
  &:hover {
    background: #444;
  }
`;

const Careers = () => {
  const [expandedJob, setExpandedJob] = React.useState(null);
  
  const jobs = [
    {
      title: 'Open Application',
      description: 'Do not see a position that fits? We are always looking for talented individuals to join our team. Send us your application and let us know how you can contribute to our mission.',
      slug: 'open-application'
    },
          {
        title: 'Part Time Animator',
        description: 'We are seeking a skilled Part Time Animator to create engaging animations and motion graphics. You will bring designs to life through creative storytelling and visual effects that enhance user experiences.',
              slug: 'part-time-animator'
    },
    {
      title: 'Accountant',
      description: 'Join our finance team as an Accountant. You will be responsible for managing financial records, preparing reports, and ensuring compliance with accounting standards and regulations.',
      slug: 'accountant'
    }
  ];



  return (
    <>
      <WorkGridWrapper>
        <WorkGridSection>
          <HeroTextBlock>
            <HeroTextInner>
              Join <HeroSubText>our team</HeroSubText> and help us build the future of digital experiences.
            </HeroTextInner>
          </HeroTextBlock>
        </WorkGridSection>
      </WorkGridWrapper>

      <JobSection>
        <JobSectionHeading>Open positions</JobSectionHeading>
        <TopLine />
        <JobList>
          {jobs.map((job, index) => (
            <div key={index}>
              <JobItem onClick={() => setExpandedJob(expandedJob === index ? null : index)}>
                <JobTitle>{job.title}</JobTitle>
                <ArrowIcon expanded={expandedJob === index}>↓</ArrowIcon>
              </JobItem>
              {expandedJob === index && (
                <JobContent>
                  <JobDescription>{job.description}</JobDescription>
                  <JobLink to={`/careers/${job.slug}`}>
                    View full listing →
                  </JobLink>
                </JobContent>
              )}
            </div>
          ))}
        </JobList>
        <CTAButton>Get in touch</CTAButton>
      </JobSection>
    </>
  );
};

export default Careers; 
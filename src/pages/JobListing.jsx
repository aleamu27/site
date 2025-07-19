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
    'creative-lead': {
      title: 'Creative Lead',
      location: 'Oslo, Barcelona, Amsterdam',
      type: 'Full-time',
      department: 'Creative',
      description: 'We are looking for a creative leader who can inspire and guide our design team. You will be responsible for developing creative strategies, mentoring designers, and ensuring our work meets the highest standards.',
      responsibilities: [
        'Lead and mentor a team of designers and creatives',
        'Develop and execute creative strategies for client projects',
        'Collaborate with cross-functional teams to deliver exceptional work',
        'Ensure creative quality and consistency across all deliverables',
        'Present creative concepts to clients and stakeholders'
      ],
      requirements: [
        '8+ years of experience in creative leadership roles',
        'Strong portfolio demonstrating creative excellence',
        'Experience managing and mentoring creative teams',
        'Excellent communication and presentation skills',
        'Ability to work in a fast-paced, collaborative environment'
      ],
      benefits: [
        'Competitive salary and benefits package',
        'Flexible working arrangements',
        'Professional development opportunities',
        'Creative and collaborative work environment',
        'Opportunity to work with global brands'
      ],
      applyLink: 'https://example.com/apply/creative-lead'
    },
    'lead-product-designer': {
      title: 'Lead Product Designer',
      location: 'Oslo, London, Barcelona, Amsterdam',
      type: 'Full-time',
      department: 'Product',
      description: 'Join us as a Lead Product Designer to create exceptional user experiences. You will work closely with product managers and developers to design intuitive, beautiful, and functional digital products.',
      responsibilities: [
        'Lead the design process from concept to implementation',
        'Create user-centered design solutions',
        'Collaborate with product managers and developers',
        'Conduct user research and usability testing',
        'Mentor junior designers and provide design guidance'
      ],
      requirements: [
        '6+ years of product design experience',
        'Strong portfolio showcasing UX/UI work',
        'Experience with design systems and component libraries',
        'Proficiency in design tools (Figma, Sketch, etc.)',
        'Understanding of user research and testing methodologies'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Health and wellness benefits',
        'Professional development budget',
        'Modern office spaces with great amenities',
        'Regular team events and activities'
      ],
      applyLink: 'https://example.com/apply/lead-product-designer'
    },
    'senior-creative-strategist': {
      title: 'Senior Creative Strategist',
      location: 'Oslo, Barcelona, Amsterdam',
      type: 'Full-time',
      department: 'Strategy',
      description: 'As a Senior Creative Strategist, you will develop innovative creative strategies that drive business results. You will collaborate with clients and internal teams to deliver compelling creative solutions.',
      responsibilities: [
        'Develop creative strategies for client campaigns',
        'Conduct market research and competitive analysis',
        'Create compelling creative briefs and presentations',
        'Collaborate with creative and account teams',
        'Present strategies to clients and stakeholders'
      ],
      requirements: [
        '7+ years of experience in creative strategy',
        'Experience in advertising or creative agencies',
        'Strong analytical and strategic thinking skills',
        'Excellent presentation and communication abilities',
        'Understanding of brand strategy and marketing principles'
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Creative and dynamic work environment'
      ],
      applyLink: 'https://example.com/apply/senior-creative-strategist'
    },
    'senior-motion-designer': {
      title: 'Senior Motion Designer',
      location: 'Oslo, Barcelona, Amsterdam',
      type: 'Full-time',
      department: 'Creative',
      description: 'We are seeking a Senior Motion Designer to bring our designs to life through animation and motion graphics. You will create engaging visual experiences that enhance user interactions and brand storytelling.',
      responsibilities: [
        'Create compelling motion graphics and animations',
        'Develop motion design systems and guidelines',
        'Collaborate with designers and developers',
        'Ensure animations enhance user experience',
        'Stay current with motion design trends and tools'
      ],
      requirements: [
        '5+ years of motion design experience',
        'Strong portfolio demonstrating motion work',
        'Proficiency in After Effects, Cinema 4D, or similar tools',
        'Understanding of animation principles and timing',
        'Experience with web and mobile animation'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Latest design and animation tools',
        'Creative and collaborative environment',
        'Opportunity to work on diverse projects',
        'Professional development support'
      ],
      applyLink: 'https://example.com/apply/senior-motion-designer'
    },
    'senior-product-manager': {
      title: 'Senior Product Manager',
      location: 'Oslo, Barcelona, Amsterdam',
      type: 'Full-time',
      department: 'Product',
      description: 'Join our product team as a Senior Product Manager. You will lead product strategy, work with cross-functional teams, and ensure we deliver products that users love and that drive business growth.',
      responsibilities: [
        'Define product vision, strategy, and roadmap',
        'Lead cross-functional product development teams',
        'Conduct user research and market analysis',
        'Define product requirements and specifications',
        'Monitor product performance and iterate based on data'
      ],
      requirements: [
        '8+ years of product management experience',
        'Experience leading product development teams',
        'Strong analytical and strategic thinking skills',
        'Excellent communication and leadership abilities',
        'Understanding of agile development methodologies'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Comprehensive health and wellness benefits',
        'Flexible work arrangements',
        'Professional development and learning opportunities',
        'Modern office environment with great amenities'
      ],
      applyLink: 'https://example.com/apply/senior-product-manager'
    },
    'open-application': {
      title: 'Open Application',
      location: 'Oslo, Barcelona, Amsterdam',
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
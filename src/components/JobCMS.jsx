import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';

const CMSContainer = styled.div`
  max-width: 1200px;
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

const CMSTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #222;
  margin: 0 0 3rem 0;
`;

const CMSGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FormSection = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
`;

const PreviewSection = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 2rem 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #222;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #222;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background: #fff;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #222;
  }
`;

const ArrayInput = styled.div`
  margin-bottom: 1rem;
`;

const ArrayItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ArrayInputField = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background: #222;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #444;
  }
  
  &.secondary {
    background: #666;
    
    &:hover {
      background: #888;
    }
  }
  
  &.danger {
    background: #dc3545;
    
    &:hover {
      background: #c82333;
    }
  }
`;

const AddButton = styled(Button)`
  background: ${COLORS.green};
  margin-top: 1rem;
  
  &:hover {
    background: #2d5a2d;
  }
`;

const SubmitButton = styled(Button)`
  background: ${COLORS.green};
  padding: 1rem 2rem;
  font-size: 1.1rem;
  margin-top: 2rem;
  
  &:hover {
    background: #2d5a2d;
  }
`;

const PreviewTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 1rem 0;
`;

const PreviewMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
`;

const PreviewContent = styled.div`
  color: #666;
  line-height: 1.6;
`;

const PreviewSectionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 1.5rem 0 0.5rem 0;
`;

const PreviewList = styled.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
`;

const JobCMS = () => {
  const [jobData, setJobData] = useState({
    title: '',
    slug: '',
    location: '',
    type: 'Full-time',
    department: '',
    description: '',
    responsibilities: [''],
    requirements: [''],
    benefits: [''],
    applyLink: ''
  });

  const handleInputChange = (field, value) => {
    setJobData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setJobData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setJobData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setJobData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real implementation, this would send data to backend
    console.log('Job data to submit:', jobData);
    alert('Job listing saved! (Check console for data)');
  };

  return (
    <CMSContainer>
      <BackLink to="/careers">Back to Careers</BackLink>
      
      <CMSTitle>Job Listing CMS</CMSTitle>
      
      <form onSubmit={handleSubmit}>
        <CMSGrid>
          <FormSection>
            <SectionTitle>Job Details</SectionTitle>
            
            <FormGroup>
              <Label>Job Title *</Label>
              <Input
                type="text"
                value={jobData.title}
                onChange={(e) => {
                  handleInputChange('title', e.target.value);
                  handleInputChange('slug', generateSlug(e.target.value));
                }}
                placeholder="e.g., Senior Product Designer"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>URL Slug</Label>
              <Input
                type="text"
                value={jobData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                placeholder="e.g., senior-product-designer"
              />
            </FormGroup>

            <FormGroup>
              <Label>Location *</Label>
              <Input
                type="text"
                value={jobData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="e.g., Oslo"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Employment Type</Label>
              <Select
                value={jobData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Department</Label>
              <Input
                type="text"
                value={jobData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                placeholder="e.g., Product, Creative, Engineering"
              />
            </FormGroup>

            <FormGroup>
              <Label>Job Description *</Label>
              <Textarea
                value={jobData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Brief description of the role..."
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Apply Link</Label>
              <Input
                type="url"
                value={jobData.applyLink}
                onChange={(e) => handleInputChange('applyLink', e.target.value)}
                placeholder="https://example.com/apply/job-title"
              />
            </FormGroup>
          </FormSection>

          <PreviewSection>
            <SectionTitle>Preview</SectionTitle>
            
            <PreviewTitle>{jobData.title || 'Job Title'}</PreviewTitle>
            
            <PreviewMeta>
              <span>📍 {jobData.location || 'Location'}</span>
              <span>⏰ {jobData.type}</span>
              <span>🏢 {jobData.department || 'Department'}</span>
            </PreviewMeta>
            
            <PreviewContent>
              <p>{jobData.description || 'Job description will appear here...'}</p>
              
              {jobData.responsibilities.length > 0 && jobData.responsibilities[0] && (
                <>
                  <PreviewSectionTitle>Key Responsibilities</PreviewSectionTitle>
                  <PreviewList>
                    {jobData.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </PreviewList>
                </>
              )}
              
              {jobData.requirements.length > 0 && jobData.requirements[0] && (
                <>
                  <PreviewSectionTitle>Requirements</PreviewSectionTitle>
                  <PreviewList>
                    {jobData.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </PreviewList>
                </>
              )}
              
              {jobData.benefits.length > 0 && jobData.benefits[0] && (
                <>
                  <PreviewSectionTitle>Benefits</PreviewSectionTitle>
                  <PreviewList>
                    {jobData.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </PreviewList>
                </>
              )}
            </PreviewContent>
          </PreviewSection>
        </CMSGrid>

        <FormSection style={{ marginTop: '2rem' }}>
          <SectionTitle>Responsibilities</SectionTitle>
          {jobData.responsibilities.map((item, index) => (
            <ArrayInput key={index}>
              <ArrayItem>
                <ArrayInputField
                  type="text"
                  value={item}
                  onChange={(e) => handleArrayChange('responsibilities', index, e.target.value)}
                  placeholder="e.g., Lead the design process from concept to implementation"
                />
                <Button
                  type="button"
                  className="danger"
                  onClick={() => removeArrayItem('responsibilities', index)}
                >
                  Remove
                </Button>
              </ArrayItem>
            </ArrayInput>
          ))}
          <AddButton
            type="button"
            onClick={() => addArrayItem('responsibilities')}
          >
            Add Responsibility
          </AddButton>
        </FormSection>

        <FormSection style={{ marginTop: '2rem' }}>
          <SectionTitle>Requirements</SectionTitle>
          {jobData.requirements.map((item, index) => (
            <ArrayInput key={index}>
              <ArrayItem>
                <ArrayInputField
                  type="text"
                  value={item}
                  onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                  placeholder="e.g., 5+ years of experience in product design"
                />
                <Button
                  type="button"
                  className="danger"
                  onClick={() => removeArrayItem('requirements', index)}
                >
                  Remove
                </Button>
              </ArrayItem>
            </ArrayInput>
          ))}
          <AddButton
            type="button"
            onClick={() => addArrayItem('requirements')}
          >
            Add Requirement
          </AddButton>
        </FormSection>

        <FormSection style={{ marginTop: '2rem' }}>
          <SectionTitle>Benefits</SectionTitle>
          {jobData.benefits.map((item, index) => (
            <ArrayInput key={index}>
              <ArrayItem>
                <ArrayInputField
                  type="text"
                  value={item}
                  onChange={(e) => handleArrayChange('benefits', index, e.target.value)}
                  placeholder="e.g., Competitive salary and benefits package"
                />
                <Button
                  type="button"
                  className="danger"
                  onClick={() => removeArrayItem('benefits', index)}
                >
                  Remove
                </Button>
              </ArrayItem>
            </ArrayInput>
          ))}
          <AddButton
            type="button"
            onClick={() => addArrayItem('benefits')}
          >
            Add Benefit
          </AddButton>
        </FormSection>

        <SubmitButton type="submit">
          Save Job Listing
        </SubmitButton>
      </form>
    </CMSContainer>
  );
};

export default JobCMS; 
import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';

const ChecklistWrapper = styled.div`
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

const ChecklistSection = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ChecklistContainer = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 2.5vw;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin: 0 0 3rem 0;
  line-height: 1.6;
`;

const CategorySection = styled.div`
  margin-bottom: 2.5rem;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const CategoryTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CategoryNumber = styled.span`
  background: ${COLORS.green};
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
`;

const ChecklistItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.75rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  
  input[type="radio"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: ${COLORS.green};
  }
  
  &:hover {
    color: ${COLORS.green};
  }
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: ${COLORS.green};
`;

const ChecklistText = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  flex: 1;
`;

const ResultsSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  margin: 3rem 0;
  text-align: center;
`;

const AnalysisDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: center;
`;

const EmailForm = styled.form`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  margin-top: 2rem;
`;

const FormTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.green};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
  line-height: 1.4;
`;

const SubmitButton = styled.button`
  background: ${COLORS.green};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 100%;
  margin-top: 1rem;
  
  &:hover {
    background: #2a8a3a;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const TipSection = styled.div`
  background: #e8f5e8;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid ${COLORS.green};
`;

const TipTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 0.5rem 0;
`;

const TipText = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0;
  line-height: 1.5;
`;

const GDPRChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [email, setEmail] = useState('');
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const checklistData = [
    {
      id: 1,
      title: "Data Audit & Mapping",
      items: [
        "Do I know every type of personal data we collect? (ex. names, emails, phone numbers)",
        "Do I know where it's stored and who can access it?",
        "Have I mapped how data flows in/out of the organization or to third parties?"
      ]
    },
    {
      id: 2,
      title: "Legal Basis for Processing",
      items: [
        "For each type of data, have I documented why we process it? (e.g. consent, contract, legal obligation)",
        "Can I explain that reason in simple terms?"
      ]
    },
    {
      id: 3,
      title: "Privacy Notice & Consent",
      items: [
        "Do we have a clear, plain‑language privacy policy visible to users?",
        "If we rely on consent, is it explicit, separate (not pre‑ticked), and easy to withdraw?"
      ]
    },
    {
      id: 4,
      title: "Data Subject Rights",
      items: [
        "Do we know how to handle requests from individuals asking to access, correct, or delete their data?",
        "Can we respond within one month? Do we log and track each request?"
      ]
    },
    {
      id: 5,
      title: "Security Measures",
      items: [
        "Is sensitive data encrypted at rest and in transit?",
        "Do we have password protection, role-based access, and regular updates/backups?"
      ]
    },
    {
      id: 6,
      title: "Breach Response Plan",
      items: [
        "Is there a clear process to detect, report, and investigate data breaches?",
        "Can we notify the relevant authority within 72 hours if needed?"
      ]
    },
    {
      id: 7,
      title: "Third-Party Controls (Vendors / Processors)",
      items: [
        "Do we know which vendors process our data?",
        "Do we have signed Data Processing Agreements (DPAs) in place for them?"
      ]
    },
    {
      id: 8,
      title: "Documentation & Records",
      items: [
        "Do we keep a record of processing activities (ROPA) for key data flows?",
        "Have we documented decisions such as DPIAs, breach logs, or consent records?"
      ]
    },
    {
      id: 9,
      title: "Roles & Training",
      items: [
        "Is someone—formally or informally—responsible for GDPR within the business (privacy lead or DPO)?",
        "Have all staff had basic GDPR training? Do they know how to spot/report breaches or respond to requests?"
      ]
    },
    {
      id: 10,
      title: "Regular Review & Updates",
      items: [
        "Do we review and update our policies/processes regularly—at least annually?",
        "Do we audit vendor compliance and update DPAs as needed?"
      ]
    }
  ];

  const handleRadioChange = (categoryId, itemIndex, value) => {
    const key = `${categoryId}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: value === 'yes'
    }));
  };



  const getTotalCheckedItems = () => {
    return Object.values(checkedItems).filter(value => value === true).length;
  };

  const getTotalAnsweredItems = () => {
    return Object.values(checkedItems).filter(value => value !== undefined).length;
  };

  const getTotalItems = () => {
    return checklistData.reduce((sum, category) => sum + category.items.length, 0);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleSubmitResults = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const totalItems = checklistData.reduce((sum, category) => sum + category.items.length, 0);
      const checkedCount = getTotalCheckedItems();
      
      const resultsData = {
        email,
        subscribeNewsletter,
        checkedCount,
        totalItems,
        checkedItems,
        categories: checklistData.map(category => ({
          id: category.id,
          title: category.title,
          items: category.items.map((item, index) => ({
            text: item,
            answer: checkedItems[`${category.id}-${index}`]
          }))
        }))
      };

      const response = await fetch('/api/gdpr-results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultsData),
      });

      if (!response.ok) {
        throw new Error('Failed to send results');
      }

      alert('Your personalized GDPR analysis has been sent to your email! Check your inbox for detailed recommendations.');
      
      // Reset form
      setEmail('');
      setSubscribeNewsletter(false);
      setShowResults(false);
      setCheckedItems({});
      
    } catch (error) {
      console.error('Error submitting results:', error);
      alert('Failed to send results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <ChecklistWrapper>
      <ChecklistSection>
        <ChecklistContainer>
          <Title>GDPR Compliance Checklist</Title>
          <Subtitle>
            Use this comprehensive checklist to assess your organization's GDPR compliance status. 
            Check each item that applies to your current practices.
          </Subtitle>

          {checklistData.map((category) => (
            <CategorySection key={category.id}>
              <CategoryTitle>
                <CategoryNumber>{category.id}</CategoryNumber>
                {category.title}
              </CategoryTitle>
              {category.items.map((item, index) => {
                const key = `${category.id}-${index}`;
                const currentValue = checkedItems[key];
                
                return (
                  <ChecklistItem key={index}>
                    <ChecklistText>{item}</ChecklistText>
                    <RadioGroup>
                      <RadioOption>
                        <input
                          type="radio"
                          name={key}
                          value="yes"
                          checked={currentValue === true}
                          onChange={() => handleRadioChange(category.id, index, 'yes')}
                        />
                        Yes
                      </RadioOption>
                      <RadioOption>
                        <input
                          type="radio"
                          name={key}
                          value="no"
                          checked={currentValue === false}
                          onChange={() => handleRadioChange(category.id, index, 'no')}
                        />
                        No
                      </RadioOption>
                    </RadioGroup>
                  </ChecklistItem>
                );
              })}
            </CategorySection>
          ))}

          <TipSection>
            <TipTitle>✅ Tip: Use It Like a Survey</TipTitle>
            <TipText>
              Print it or copy to a form — then tick your answers, one box at a time.
              Write a short note whenever you check "No" or "Unsure"—this becomes your to-do list.
              Celebrate the "Yes"es—that means you're making progress!
            </TipText>
          </TipSection>

          {!showResults ? (
            <ResultsSection>
              <AnalysisDescription>
                Complete the checklist above ({getTotalAnsweredItems()} of {getTotalItems()} answered) to get your personalized analysis.
              </AnalysisDescription>
              <SubmitButton 
                onClick={handleShowResults}
                disabled={getTotalAnsweredItems() < getTotalItems()}
              >
                Get My GDPR Analysis
              </SubmitButton>
              {getTotalAnsweredItems() < getTotalItems() && (
                <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
                  Please answer all {getTotalItems()} questions to proceed.
                </p>
              )}
            </ResultsSection>
          ) : (
            <ResultsSection>
              <AnalysisDescription>
                Get your personalized GDPR compliance analysis with specific recommendations and improvement strategies delivered directly to your inbox.
              </AnalysisDescription>
              
              <EmailForm onSubmit={handleSubmitResults}>
                <FormTitle>Get Your Personalized GDPR Analysis</FormTitle>
                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                  />
                </FormGroup>
                
                <CheckboxGroup>
                  <Checkbox
                    id="newsletter"
                    type="checkbox"
                    checked={subscribeNewsletter}
                    onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                  />
                  <CheckboxLabel htmlFor="newsletter">
                    Yes, I'd like to subscribe to your newsletter for more compliance tips and updates
                  </CheckboxLabel>
                </CheckboxGroup>
                
                <SubmitButton type="submit" disabled={isSubmitting || !email}>
                  {isSubmitting ? 'Preparing Your Analysis...' : 'Send My Personalized Analysis'}
                </SubmitButton>
              </EmailForm>
            </ResultsSection>
          )}
        </ChecklistContainer>
      </ChecklistSection>
    </ChecklistWrapper>
  );
};

export default GDPRChecklist; 
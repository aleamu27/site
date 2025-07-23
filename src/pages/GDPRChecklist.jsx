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

const ChecklistItem = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  padding: 0.75rem;
  border-radius: 8px;
  
  &:hover {
    background-color: #f8f9fa;
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

const ScoreDisplay = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.score >= 80 ? COLORS.green : props.score >= 60 ? '#f39c12' : '#e74c3c'};
  margin-bottom: 1rem;
`;

const ScoreDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
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

  const handleCheckboxChange = (categoryId, itemIndex) => {
    const key = `${categoryId}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const calculateScore = () => {
    const totalItems = checklistData.reduce((sum, category) => sum + category.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / totalItems) * 100);
  };

  const getScoreDescription = (score) => {
    if (score >= 90) return "Excellent! Your GDPR compliance is very strong.";
    if (score >= 80) return "Good! You're well on your way to GDPR compliance.";
    if (score >= 60) return "Fair. There are several areas that need attention.";
    if (score >= 40) return "Needs improvement. Consider prioritizing GDPR compliance.";
    return "Critical. Immediate action required for GDPR compliance.";
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleSubmitResults = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const score = calculateScore();
      const totalItems = checklistData.reduce((sum, category) => sum + category.items.length, 0);
      const checkedCount = Object.values(checkedItems).filter(Boolean).length;
      
      const resultsData = {
        email,
        subscribeNewsletter,
        score,
        checkedCount,
        totalItems,
        checkedItems,
        categories: checklistData.map(category => ({
          id: category.id,
          title: category.title,
          items: category.items.map((item, index) => ({
            text: item,
            checked: checkedItems[`${category.id}-${index}`] || false
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

      alert('Results sent to your email! Check your inbox.');
      
    } catch (error) {
      console.error('Error submitting results:', error);
      alert('Failed to send results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const score = calculateScore();

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
              {category.items.map((item, index) => (
                <ChecklistItem key={index}>
                  <Checkbox
                    type="checkbox"
                    checked={checkedItems[`${category.id}-${index}`] || false}
                    onChange={() => handleCheckboxChange(category.id, index)}
                  />
                  <ChecklistText>{item}</ChecklistText>
                </ChecklistItem>
              ))}
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
              <SubmitButton onClick={handleShowResults}>
                See My Results
              </SubmitButton>
            </ResultsSection>
          ) : (
            <ResultsSection>
              <ScoreDisplay score={score}>{score}%</ScoreDisplay>
              <ScoreDescription>{getScoreDescription(score)}</ScoreDescription>
              <p>You've completed {Object.values(checkedItems).filter(Boolean).length} out of {checklistData.reduce((sum, category) => sum + category.items.length, 0)} items.</p>
              
              <EmailForm onSubmit={handleSubmitResults}>
                <FormTitle>Get Your Detailed Results</FormTitle>
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
                  {isSubmitting ? 'Sending Results...' : 'Send My Results'}
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
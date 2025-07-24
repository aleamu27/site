import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';

const CenteredPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafbfa;
  overflow: hidden;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  margin: 0 auto;
  padding: 2.5rem 2.2rem 2.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  overflow-y: auto;
  @media (max-width: 600px) {
    padding: 1.2rem 0.7rem;
    max-height: 95vh;
  }
`;

const StepTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 500;
  color: #222;
  margin: 0 0 1.2rem 0;
  line-height: 1.4;
`;

const Progress = styled.div`
  font-size: 0.98rem;
  color: #b3b3b3;
  margin-bottom: 1.2rem;
`;

const CategoryLabel = styled.div`
  font-size: 0.9rem;
  color: ${COLORS.green};
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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



const Input = styled.input`
  width: 100%;
  font-size: 1.13rem;
  padding: 0.9rem 1.1rem 0.4rem 1.1rem;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  border-radius: 0;
  margin-bottom: 1.7rem;
  background: transparent;
  color: #222;
  font-family: inherit;
  box-shadow: none;
  box-sizing: border-box;
  min-height: 56px;
  height: 56px;
  @media (max-width: 600px) {
    font-size: 1rem;
    min-height: 44px;
    height: 44px;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #e0e0e0;
    background: transparent;
  }
`;

const Button = styled.button`
  background: none;
  color: #222;
  font-size: 1.13rem;
  font-weight: 600;
  border: none;
  border-radius: 0;
  padding: 0;
  margin-top: 0.5rem;
  margin-right: 2rem;
  cursor: pointer;
  transition: color 0.18s;
  box-shadow: none;
  &:hover {
    color: ${COLORS.green};
  }
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Confirmation = styled.div`
  font-size: 1.18rem;
  color: ${COLORS.green};
  margin-top: 2.5rem;
  text-align: center;
`;







// Create flat array of all questions with category info
const createQuestions = () => {
  const categories = [
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

  const questions = [];
  categories.forEach(category => {
    category.items.forEach((item, index) => {
      questions.push({
        id: `${category.id}-${index}`,
        categoryId: category.id,
        categoryTitle: category.title,
        question: item,
        questionNumber: questions.length + 1
      });
    });
  });

  // Add email collection step (combined with newsletter)
  questions.push({
    id: 'email',
    type: 'email',
    categoryTitle: 'Get Your Analysis',
    question: 'Enter your email to receive your personalized GDPR analysis',
    placeholder: 'you@email.com',
    questionNumber: questions.length + 1
  });

  return questions;
};

const GDPRChecklist = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const questions = createQuestions();

  useEffect(() => {
    console.log('📋 GDPR Checklist initialized');
    console.log('📊 Total questions:', questions.length);
  }, []);

  const handleAnswerChange = (value) => {
    const currentQuestion = questions[step];
    if (currentQuestion.type === 'email') {
      setEmail(value);
    } else {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: value === 'yes'
      }));
      
      // Auto-advance to next question after answering Yes/No
      setTimeout(() => {
        if (step < questions.length - 1) {
          setStep(step + 1);
        }
      }, 300); // Small delay for better UX
    }
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    const currentQuestion = questions[step];
    
    if (currentQuestion.type === 'email') {
      return email && /\S+@\S+\.\S+/.test(email);
    } else {
      return answers[currentQuestion.id] !== undefined;
    }
  };

  const isLastStep = step === questions.length - 1;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Count yes answers
      const yesCount = Object.values(answers).filter(answer => answer === true).length;
      const totalQuestions = questions.filter(q => !q.type).length; // Exclude email/newsletter questions
      
      // Convert answers back to category format for the API
      const categories = [];
      const categoryMap = {};
      
      questions.forEach(q => {
        if (!q.type) { // Skip email/newsletter questions
          if (!categoryMap[q.categoryId]) {
            categoryMap[q.categoryId] = {
              id: q.categoryId,
              title: q.categoryTitle,
              items: []
            };
          }
          categoryMap[q.categoryId].items.push({
            text: q.question,
            answer: answers[q.id]
          });
        }
      });
      
      Object.values(categoryMap).forEach(category => {
        categories.push(category);
      });

      const resultsData = {
        email,
        subscribeNewsletter: true, // Always true since it's mandatory
        checkedCount: yesCount,
        totalItems: totalQuestions,
        categories
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

      setSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting results:', error);
      alert('Failed to send results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };



  if (submitted) {
    return (
      <CenteredPage>
        <FormWrapper>
          <Confirmation>
            Your personalized GDPR analysis has been sent to your email! 
            Check your inbox for detailed recommendations and next steps.
          </Confirmation>
        </FormWrapper>
      </CenteredPage>
    );
  }

  const currentQuestion = questions[step];

  return (
    <CenteredPage>
      <FormWrapper>
        <Progress>
          {step + 1} of {questions.length}
        </Progress>
        
        <CategoryLabel>
          {currentQuestion.categoryTitle}
        </CategoryLabel>
        
        <StepTitle>
          {currentQuestion.question}
        </StepTitle>

        {currentQuestion.type === 'email' ? (
          <>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={currentQuestion.placeholder}
            />
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem', lineHeight: '1.4' }}>
              📧 Your analysis will be sent to this email<br/>
              📈 You'll also receive valuable GDPR compliance tips and updates
            </p>
          </>
        ) : (
          <RadioGroup>
            <RadioOption>
              <input
                type="radio"
                name={currentQuestion.id}
                value="yes"
                checked={answers[currentQuestion.id] === true}
                onChange={() => handleAnswerChange('yes')}
              />
              Yes
            </RadioOption>
            <RadioOption>
              <input
                type="radio"
                name={currentQuestion.id}
                value="no"
                checked={answers[currentQuestion.id] === false}
                onChange={() => handleAnswerChange('no')}
              />
              No
            </RadioOption>
          </RadioGroup>
        )}

        <ButtonGroup>
          {step > 0 && (
            <Button onClick={handlePrevious}>
              ← Previous
            </Button>
          )}
          
          {currentQuestion.type === 'email' && (
            <Button 
              onClick={handleSubmit}
              disabled={isSubmitting || !canProceed()}
            >
              {isSubmitting ? 'Sending Analysis...' : 'Get My GDPR Analysis'}
            </Button>
          )}
        </ButtonGroup>
      </FormWrapper>
    </CenteredPage>
  );
};

export default GDPRChecklist; 
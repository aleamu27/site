import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CenteredPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafbfa;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  min-height: 320px;
  margin: 0 auto;
  /* background: #fff; */
  /* border-radius: 18px; */
  /* box-shadow: 0 4px 32px 0 rgba(24,75,84,0.07); */
  padding: 2.5rem 2.2rem 2.2rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 1.2rem 0.7rem;
    min-height: 220px;
  }
`;

const StepTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 500;
  color: #222;
  margin: 0 0 1.2rem 0;
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

const TextArea = styled.textarea`
  width: 100%;
  font-size: 1.13rem;
  padding: 0.9rem 1.1rem 0.4rem 1.1rem;
  border: none;
  /* border-bottom: 2px solid #e0e0e0; */
  border-radius: 0;
  margin-bottom: 1.7rem;
  background: transparent;
  color: #222;
  font-family: inherit;
  min-height: 56px;
  height: 56px;
  resize: none;
  box-shadow: none;
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 1rem;
    min-height: 44px;
    height: 44px;
  }
  &:focus {
    outline: none;
    /* border-bottom: 2px solid #e0e0e0; */
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
  cursor: pointer;
  transition: color 0.18s;
  box-shadow: none;
  &:hover {
    color: #184B54;
  }
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #184B54;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const steps = [
  {
    label: 'What is your company name?',
    type: 'text',
    name: 'company',
    placeholder: 'Company name',
  },
  {
    label: 'Tell us about your project.',
    type: 'textarea',
    name: 'project',
    placeholder: 'Describe your project',
  },
  {
    label: 'What is the best way to get in touch with you?',
    type: 'email',
    name: 'email',
    placeholder: 'you@email.com',
  },
];

const Progress = styled.div`
  font-size: 0.98rem;
  color: #b3b3b3;
  margin-bottom: 1.2rem;
`;

const Confirmation = styled.div`
  font-size: 1.18rem;
  color: #184B54;
  margin-top: 2.5rem;
  text-align: center;
`;

function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ company: '', project: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Log component initialization
  useEffect(() => {
    console.log('🚀 Contact form component initialized');
    console.log('📊 Initial state:', {
      step: 0,
      form: { company: '', project: '', email: '' },
      submitted: false,
      loading: false,
      error: ''
    });
    console.log('🌐 Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      REACT_APP_API_URL: process.env.REACT_APP_API_URL,
      API_ENDPOINT: process.env.REACT_APP_API_URL || '/api/contact'
    });
  }, []);

  // Log state changes
  useEffect(() => {
    console.log('🔄 Step changed:', step);
    console.log('📝 Current step details:', steps[step]);
  }, [step]);

  useEffect(() => {
    console.log('📋 Form data updated:', form);
    console.log('✅ Form validation status:', {
      company: form.company.length > 0,
      project: form.project.length > 0,
      email: form.email.length > 0 && /\S+@\S+\.\S+/.test(form.email),
      currentStepValid: form[steps[step]?.name]?.length > 0
    });
  }, [form]);

  useEffect(() => {
    if (loading) {
      console.log('⏳ Loading state: Started');
    } else {
      console.log('✅ Loading state: Finished');
    }
  }, [loading]);

  useEffect(() => {
    if (error) {
      console.error('❌ Error occurred:', error);
    } else {
      console.log('✅ No errors');
    }
  }, [error]);

  useEffect(() => {
    if (submitted) {
      console.log('🎉 Form successfully submitted!');
    }
  }, [submitted]);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log('📝 Input change:', {
      fieldName: name,
      newValue: value,
      valueLength: value.length,
      currentStep: step,
      stepName: steps[step].name
    });
    
    setForm({ ...form, [name]: value });
    
    if (error) {
      console.log('🔄 Clearing error due to input change');
      setError('');
    }
  };

  const submitForm = async (formData) => {
    console.log('📤 Starting form submission');
    console.log('📋 Form data to submit:', formData);
    
    const apiUrl = process.env.REACT_APP_API_URL || '/api/contact';
    console.log('🌐 API URL:', apiUrl);
    
    const requestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    
    console.log('⚙️ Request configuration:', {
      url: apiUrl,
      method: requestConfig.method,
      headers: requestConfig.headers,
      bodySize: requestConfig.body.length
    });
    
    try {
      console.log('🚀 Making API request...');
      const startTime = Date.now();
      
      const response = await fetch(apiUrl, requestConfig);
      
      const endTime = Date.now();
      const requestDuration = endTime - startTime;
      
      console.log('📡 Response received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries()),
        duration: `${requestDuration}ms`
      });

      let data;
      try {
        data = await response.json();
        console.log('📄 Response data:', data);
      } catch (parseError) {
        console.error('❌ Failed to parse response JSON:', parseError);
        const textResponse = await response.text();
        console.log('📄 Raw response text:', textResponse);
        throw new Error('Invalid response format from server');
      }

      if (!response.ok) {
        console.error('❌ API request failed:', {
          status: response.status,
          error: data.error || 'Unknown error',
          fullResponse: data
        });
        throw new Error(data.error || 'Failed to submit form');
      }

      console.log('✅ Form submission successful:', data);
      return data;
    } catch (error) {
      console.error('❌ Form submission error:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      throw new Error(error.message || 'Network error. Please try again.');
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    
    console.log('🎯 handleNext triggered:', {
      currentStep: step,
      totalSteps: steps.length,
      isLastStep: step === steps.length - 1,
      currentFieldValue: form[steps[step].name]
    });
    
    setError('');

    // Validate current step
    const currentValue = form[steps[step].name];
    const currentStepData = steps[step];
    
    console.log('🔍 Validating current step:', {
      stepName: currentStepData.name,
      stepType: currentStepData.type,
      value: currentValue,
      isEmpty: !currentValue || currentValue.trim().length === 0
    });

    if (!currentValue || currentValue.trim().length === 0) {
      const validationError = `Please fill in the ${currentStepData.name} field`;
      console.error('❌ Validation failed:', validationError);
      setError(validationError);
      return;
    }

    // Email validation for email step
    if (currentStepData.type === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      const isValidEmail = emailRegex.test(currentValue);
      console.log('📧 Email validation:', {
        email: currentValue,
        isValid: isValidEmail,
        regex: emailRegex.toString()
      });
      
      if (!isValidEmail) {
        const emailError = 'Please enter a valid email address';
        console.error('❌ Email validation failed:', emailError);
        setError(emailError);
        return;
      }
    }

    if (step < steps.length - 1) {
      // Move to next step
      console.log('➡️ Moving to next step:', step + 1);
      setStep(step + 1);
    } else {
      // Final step - submit form
      console.log('🚀 Final step reached - submitting form');
      console.log('📋 Complete form data before submission:', form);
      
      setLoading(true);
      try {
        const result = await submitForm(form);
        console.log('✅ Submission successful, setting submitted state');
        setSubmitted(true);
      } catch (error) {
        console.error('❌ Submission failed:', error.message);
        setError(error.message);
      } finally {
        console.log('🔄 Setting loading to false');
        setLoading(false);
      }
    }
  };

  if (submitted) {
    console.log('🎉 Rendering success confirmation');
    return (
      <CenteredPage>
        <FormWrapper>
          <Confirmation>
            Thank you for reaching out!<br />
            We've sent you a confirmation email and will get back to you soon.
          </Confirmation>
          <Button style={{marginTop: '2.5rem'}} onClick={() => {
            console.log('🏠 Navigating back to home');
            navigate('/');
          }}>Back to Home</Button>
        </FormWrapper>
      </CenteredPage>
    );
  }

  const currentStep = steps[step];
  const label = typeof currentStep.label === 'function' ? currentStep.label(form) : currentStep.label;

  console.log('🖼️ Rendering step:', {
    stepNumber: step + 1,
    stepName: currentStep.name,
    stepType: currentStep.type,
    label: label,
    currentValue: form[currentStep.name],
    loading: loading,
    error: error
  });

  return (
    <CenteredPage>
      <FormWrapper as="form" onSubmit={handleNext} autoComplete="off">
        <Progress>Step {step + 1} of {steps.length}</Progress>
        <StepTitle>{label}</StepTitle>
        {currentStep.type === 'textarea' ? (
          <TextArea
            name={currentStep.name}
            value={form[currentStep.name]}
            onChange={handleChange}
            placeholder={currentStep.placeholder}
            required
            disabled={loading}
          />
        ) : (
          <Input
            type={currentStep.type}
            name={currentStep.name}
            value={form[currentStep.name]}
            onChange={handleChange}
            placeholder={currentStep.placeholder}
            required
            disabled={loading}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" disabled={loading}>
          {loading && <LoadingSpinner />}
          {loading ? 'Sending...' : (step === steps.length - 1 ? 'Submit' : 'Next')}
        </Button>
      </FormWrapper>
    </CenteredPage>
  );
}

export default Contact;
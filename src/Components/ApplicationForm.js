import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './ApplicationForm.css';

const questions = [
    {
        id: 1,
        type: 'text',
        question: 'What is your full name?',
        required: true
    },
    {
        id: 2,
        type: 'email',
        question: 'What is your email address?',
        required: true
    },
    {
        id: 3,
        type: 'multiple',
        question: 'What is your primary interest in Henry Capital?',
        options: ['Investment Opportunities', 'Career Opportunities', 'Partnership', 'Other'],
        required: true
    },
    {
        id: 4,
        type: 'text',
        question: 'What is your current company/organization?',
        required: true
    },
    {
        id: 5,
        type: 'multiple',
        question: 'What is your investment experience level?',
        options: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
        required: true
    },
    {
        id: 6,
        type: 'multiple',
        question: 'What is your preferred investment range?',
        options: ['$10k-$50k', '$50k-$250k', '$250k-$1M', '$1M+'],
        required: true
    },
    {
        id: 7,
        type: 'multiple',
        question: 'What is your preferred investment timeline?',
        options: ['Short-term (< 1 year)', 'Medium-term (1-3 years)', 'Long-term (3+ years)'],
        required: true
    },
    {
        id: 8,
        type: 'text',
        question: 'What specific sectors or industries interest you most?',
        required: true
    },
    {
        id: 9,
        type: 'multiple',
        question: 'How did you hear about Henry Capital?',
        options: ['Referral', 'Social Media', 'Web Search', 'Event', 'Other'],
        required: true
    },
    {
        id: 10,
        type: 'text',
        question: 'Any additional comments or questions?',
        required: false
    }
];

const ApplicationForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleNext = () => {
        const currentQuestion = questions[currentStep];
        if (currentQuestion.required && !answers[currentQuestion.id]) {
            setErrors({ ...errors, [currentQuestion.id]: 'This field is required' });
            return;
        }
        if (currentQuestion.type === 'email' && !validateEmail(answers[currentQuestion.id])) {
            setErrors({ ...errors, [currentQuestion.id]: 'Please enter a valid email' });
            return;
        }
        setCurrentStep((prev) => Math.min(prev + 1, questions.length - 1));
    };

    const handlePrevious = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);
            await addDoc(collection(db, 'applications'), {
                answers,
                submittedAt: new Date().toISOString()
            });
            setSubmitStatus('success');
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderQuestion = () => {
        const question = questions[currentStep];
        switch (question.type) {
            case 'text':
            case 'email':
                return (
                    <input
                        type={question.type}
                        value={answers[question.id] || ''}
                        onChange={(e) => {
                            setAnswers({ ...answers, [question.id]: e.target.value });
                            setErrors({ ...errors, [question.id]: '' });
                        }}
                        className="form-input"
                        placeholder={`Enter your ${question.type === 'email' ? 'email' : 'answer'}`}
                    />
                );
            case 'multiple':
                return (
                    <div className="options-container">
                        {question.options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                className={`option-button ${answers[question.id] === option ? 'selected' : ''}`}
                                onClick={() => {
                                    setAnswers({ ...answers, [question.id]: option });
                                    setErrors({ ...errors, [question.id]: '' });
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="application-form">
                <div className="success-message">
                    <h2>Successful!</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="application-form">
            <div className="progress-bar">
                <div 
                    className="progress"
                    style={{ width: `${(currentStep / (questions.length - 1)) * 100}%` }}
                />
            </div>
            
            <div className="question-container">
                <h2>{questions[currentStep].question}</h2>
                {renderQuestion()}
                {errors[questions[currentStep].id] && (
                    <div className="error">{errors[questions[currentStep].id]}</div>
                )}
                {submitStatus === 'error' && (
                    <div className="error">There was an error submitting your message. Please try again.</div>
                )}
            </div>

            <div className="navigation-buttons">
                {currentStep > 0 && (
                    <button 
                        onClick={handlePrevious} 
                        className="nav-button"
                        disabled={isSubmitting}
                    >
                        Previous
                    </button>
                )}
                {currentStep < questions.length - 1 ? (
                    <button 
                        onClick={handleNext} 
                        className="nav-button"
                        disabled={isSubmitting}
                    >
                        Next
                    </button>
                ) : (
                    <button 
                        onClick={handleSubmit} 
                        className="nav-button submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ApplicationForm;

import { useState } from 'react';
import { AccountCreation } from './components/AccountCreation';
import { Personal } from './components/Personal';
import { Verification } from './components/Verification';

const SignUp = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const steps = [
    <AccountCreation onNext={handleNext} />,
    <Personal onNext={handleNext} onBack={handleBack} />,
    <Verification onBack={handleBack} />,
  ];

  return (
    <div>
      {steps[step]}
    </div>
  );
};

export default SignUp;

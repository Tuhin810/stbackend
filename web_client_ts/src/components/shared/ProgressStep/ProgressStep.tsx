import { useState } from "react";
import StepProgressBar from "../ProgressBar/StepProgressBar/StepProgressBar";
import './ProgreesStep.css'


const steps = [
  { id: 'step01', label: 'Welcome onboard 🤗' },
  { id: 'step02', label: 'Wear your smile 🙂' },
  { id: 'step03', label: 'Take your tongue out 😛' },
  { id: 'step04', label: 'Put on your sunglasses 😎' },
  { id: 'step05', label: 'You are ready! Time to 🥳' }
]


const ProgressStep = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedStep, setCompletedStep] = useState<number>(0);

  const handleStepClicked = (value: number) => {
    setCurrentStep(value)
    if (value > completedStep) {
      setCompletedStep(value - 1)
    }
  }
  
  return (
    <div className="mb-2">
      <StepProgressBar
        steps={steps}
        currentStep={currentStep}
        completedStep={completedStep}
        disableNavigation={false}
        handleStepClicked={handleStepClicked}
      />
    </div>
  )
}

export default ProgressStep;

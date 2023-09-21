import StepProgressBar from "../ProgressBar/StepProgressBar/StepProgressBar";
import './ProgreesStep.css'
import { ProgressStepProps } from "../../../@types/interfaces/props/ProgressSteps/ProgressStepProps";


const steps = [
  { id: 'step01', label: 'Step 1' },
  { id: 'step02', label: 'Step 2' },
  { id: 'step03', label: 'Step 3' },
  { id: 'step04', label: 'Step 4' },
]

const ProgressStep = ({currentStep}:ProgressStepProps) => {

  
  return (
    <div className="mb-2 w-full">
      <StepProgressBar
        steps={steps}
        currentStep={currentStep}
        completedStep={currentStep-1}
        disableNavigation={true}
      />
    </div>
  )
}

export default ProgressStep;

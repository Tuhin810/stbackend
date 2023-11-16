import StepProgressBar from "../ProgressBar/StepProgressBar/StepProgressBar";
import './ProgreesStep.css'
import { ProgressStepProps } from "../../../@types/interfaces/props/ProgressSteps/ProgressStepProps";



const ProgressStep = ({currentStep,stepcount}:ProgressStepProps) => {
  
  const steps = []
  for (let i=0;i<stepcount;i++){
    steps.push( { id: `step${i+1}`, label: `Step ${i+1}` })
  }
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

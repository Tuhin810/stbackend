export interface StepProgressBarProps {
    steps: Array<{ id: string, label: string }>;
    currentStep: number;
    completedStep: number;
    disableNavigation?: boolean;
}

export interface ProgressStepProps{
    currentStep:number,
    stepcount:number
}

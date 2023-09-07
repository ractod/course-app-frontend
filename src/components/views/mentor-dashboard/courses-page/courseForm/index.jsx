import { useEffect, useState } from "react";

import { Step, StepLabel, Stepper } from "@mui/material";
import DetailsStep from "./DetailsStep";
import PublishStep from "./PublishStep";
import SessionsStep from "./SessionsStep";

const steps = [
  { label: "اطلاعات دوره", id: 1 },
  { label: "جلسات دوره", id: 3 },
  { label: "انتشار دوره", id: 4 },
];

// used for create and edit course
const CourseForm = ({
  onClose,
  onUpload,
  onCancelUpload,
  isUploading,
  initialValues = {},
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevState) => prevState - 1);
  };

  const renderCurrentStep = () => {
    const stepComponents = [DetailsStep, SessionsStep, PublishStep];

    const StepComponent = stepComponents[currentStep];

    return (
      <StepComponent
        onClose={onClose}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
        formData={formData}
        setFormData={setFormData}
        onUpload={onUpload}
        onCancelUpload={onCancelUpload}
        isUploading={isUploading}
      />
    );
  };

  useEffect(() => {
    return () => {
      setFormData(initialValues);
      setCurrentStep(0);
    };
  }, []);

  return (
    <>
      <Stepper className="mb-10" activeStep={currentStep}>
        {steps.map((step, index) => (
          <Step key={step.id} completed={currentStep > index}>
            <StepLabel className="gap-x-2">{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderCurrentStep()}
    </>
  );
};

export default CourseForm;

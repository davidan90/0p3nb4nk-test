import React, { useState } from "react";
import StepCounter from "components/StepCounter";
import "./Wizard.scss";

interface WizardData {
  [key: string]: any;
}

export interface WizardStepProps {
  goTo?: (step: number) => void;
  next?: (enabled: boolean, data?: WizardData) => void;
  wizardData?: WizardData;
}

interface Props {
  initialStep?: number;
}

const matchStep = (step: number) => {
  return step <= 1 ? 1 : step;
};

const Wizard: React.FC<Props> = ({ initialStep = 1, children }) => {
  const [active, setActive] = useState(matchStep(initialStep));
  const [data, setData] = useState<WizardData>({});
  const steps = React.Children.count(children);

  const goTo = (step: number) => {
    setActive(matchStep(step));
  };

  const next = (enabled: boolean, data?: WizardData) => {
    if (enabled) {
      setActive(active + 1);

      if (data) {
        setData(data);
      }
    }
  };

  return (
    <div className="wizard">
      <header className="header">
        <StepCounter counter={steps} active={active} />
      </header>
      {
        React.Children.map(children, (child) => {
          const extraProps: WizardStepProps = { goTo, next, wizardData: data };
          let element = child;

          if (React.isValidElement(child)) {
            element = React.cloneElement(child, extraProps);
          }

          return <div className="content">{element}</div>;
        })?.[active - 1]
      }
    </div>
  );
};

export default Wizard;

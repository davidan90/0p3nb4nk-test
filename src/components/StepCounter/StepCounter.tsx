import React, { useMemo } from "react";
import "./StepCounter.scss";

interface Props {
  counter: number;
  active: number;
}

const StepCounter: React.FC<Props> = ({ counter, active }) => {
  const steps = useMemo(() => {
    const r: number[] = [];
    for (let i = 1; i <= counter; i++) {
      r.push(i);
    }
    return r;
  }, [counter]);

  const stepActive = active <= 1 ? 1 : active++;

  return (
    <ul className="step-counter">
      {steps.map((step) => (
        <li key={step} className={step === stepActive ? "active" : undefined}>
          {step < stepActive ? <i className="material-icons">check</i> : step}
        </li>
      ))}
    </ul>
  );
};

export default StepCounter;

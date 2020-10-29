import React from "react";
import { useTranslation } from "react-i18next";
import { usePasswordCreationCheck } from "hooks";
import { Link, Spinner, WizardStepProps } from "components";
import Footer from "../StepFooter";
import "./Feedback.scss";

interface Props extends WizardStepProps {
  done: () => void;
}
const Feedback: React.FC<Props> = ({ done, goTo, wizardData }) => {
  const { t } = useTranslation();
  const { loading, data, error } = usePasswordCreationCheck(
    wizardData?.password
  );
  const success = !!data && !error && !loading;

  return (
    <div className="feedback">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <header className="header">
            <h1>
              <i className="material-icons">
                {success ? "check_circle_outline" : "warning"}
              </i>
              <span>
                {t(success ? "step3-success-title" : "step3-fail-title")}
              </span>
            </h1>
          </header>
          <span>{t(success ? "lorem" : "step3-fail-text")}</span>
          <Footer>
            <div className="links">
              <Link onClick={success ? done : () => goTo!(1)}>
                <span className="finish">
                  {t(success ? "step3-success-button" : "step3-fail-button")}
                  <i className="material-icons">keyboard_arrow_right</i>
                </span>
              </Link>
            </div>
          </Footer>
        </>
      )}
    </div>
  );
};

export default Feedback;

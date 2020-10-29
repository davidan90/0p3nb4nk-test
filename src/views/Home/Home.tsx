import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Wizard, Button } from "components";
import { Feedback, Form, ProductInformation } from "./components";
import "./Home.scss";

const Home = () => {
  const { t } = useTranslation();
  const [showWizard, setShowWizard] = useState(false);

  const toggleWizard = () => {
    setShowWizard(!showWizard);
  };

  return (
    <section className="home">
      {showWizard ? (
        <Wizard>
          <ProductInformation cancel={toggleWizard} />
          <Form cancel={toggleWizard} />
          <Feedback done={toggleWizard} />
        </Wizard>
      ) : (
        <Button onClick={toggleWizard}>{t("start")}</Button>
      )}
    </section>
  );
};

export default Home;

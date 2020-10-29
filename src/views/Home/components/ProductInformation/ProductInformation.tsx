import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import Figure1 from "assets/img/secure-1.svg";
import Figure2 from "assets/img/secure-2.svg";
import {
  Button,
  ButtonDisplays,
  Dash,
  Link,
  LinkDisplays,
  WizardStepProps,
} from "components";
import Footer from "../StepFooter";
import "./ProductInformation.scss";

interface Props extends WizardStepProps {
  cancel: () => void;
}

const ProductInformation: React.FC<Props> = ({ cancel, next }) => {
  const { t } = useTranslation();

  const initialValues = {
    check: false,
  };

  const validationSchema = Yup.object().shape({
    check: Yup.boolean().oneOf([true], t("step1-field1-validation-required")),
  });

  const onSubmit = () => {
    next!(formik.isValid);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form className="information" onSubmit={formik.handleSubmit}>
      <header className="header">
        <h1>{t("step1-title")}</h1>
        <Dash />
      </header>
      <div className="images">
        <figure>
          <img src={Figure2} alt={t("step1-figure1-alt")} />
          <p>{t("step1-figure1-info")}</p>
        </figure>

        <figure>
          <img src={Figure1} alt={t("step1-figure2-alt")} />
          <p>{t("step1-figure2-info")}</p>
        </figure>
      </div>
      <h4>{t("step1-article1-title")}</h4>
      <p>{t("step1-article1-text")}</p>
      <h4>{t("step1-article2-title")}</h4>
      <p>{t("step1-article2-text")}</p>

      <div className="conditions">
        <label>
          <input
            type="checkbox"
            name="check"
            onChange={formik.handleChange}
            checked={formik.values.check}
          />
          {t("step1-field1-text1")}
        </label>
        {formik.touched.check && formik.errors.check ? (
          <span className="error">{formik.errors.check}</span>
        ) : null}
      </div>

      <Footer>
        <Link display={LinkDisplays.secondary} onClick={cancel}>
          {t("cancel")}
        </Link>
        <Button display={ButtonDisplays.secondary} type="submit">
          {t("next")}
        </Button>
      </Footer>
    </form>
  );
};

export default ProductInformation;

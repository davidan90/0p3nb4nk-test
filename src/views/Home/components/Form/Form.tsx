import React from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  ButtonDisplays,
  Dash,
  Field,
  Link,
  LinkDisplays,
  WizardStepProps,
} from "components";
import Footer from "../StepFooter";
import "./Form.scss";

interface Props extends WizardStepProps {
  cancel: () => void;
}
const Form: React.FC<Props> = ({ cancel, next }) => {
  const { t } = useTranslation();

  const initialValues = {
    password: "",
    passwordRepeated: "",
    passwordClue: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, t("step2-field1-validation-min-8"))
      .max(24, t("step2-field1-validation-max-24"))
      .matches(/[A-Z]/, t("step2-field1-validation-capital"))
      .matches(/[0-9]/, t("step2-field1-validation-number"))
      .required(t("step2-field1-validation-required")),
    passwordRepeated: Yup.string()
      .oneOf([Yup.ref("password")], t("step2-field2-validation-match"))
      .required(t("step2-field2-validation-required")),
    passwordClue: Yup.string()
      .max(255, t("step2-field3-validation-max-255"))
      .notRequired(),
  });

  const onSubmit = (values) => {
    next!(formik.isValid, values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <header className="header">
        <h1>{t("step2-title")}</h1>
        <Dash />
      </header>
      <div className="fields">
        <p>
          <span>{t("step2-fields1-text1")}</span>
          <span>{t("step2-fields1-text2")}</span>
        </p>
        <div>
          <Field
            name="password"
            type="password"
            label={t("step2-field1-label")}
            placeholder={t("step2-field1-placeholder")}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : undefined
            }
          />
          <Field
            name="passwordRepeated"
            type="password"
            label={t("step2-field2-label")}
            placeholder={t("step2-field2-placeholder")}
            onChange={formik.handleChange}
            value={formik.values.passwordRepeated}
            error={
              formik.touched.passwordRepeated && formik.errors.passwordRepeated
                ? formik.errors.passwordRepeated
                : undefined
            }
          />
        </div>
        <div>
          <p>{t("step2-fields2-text1")}</p>
          <Field
            name="passwordClue"
            type="text"
            label={t("step2-field3-label")}
            placeholder={t("step2-field3-placeholder")}
            onChange={formik.handleChange}
            value={formik.values.passwordClue}
            error={
              formik.touched.passwordClue && formik.errors.passwordClue
                ? formik.errors.passwordClue
                : undefined
            }
          />
        </div>
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

export default Form;

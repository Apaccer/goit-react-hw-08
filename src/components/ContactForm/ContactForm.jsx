import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useEffect, useRef } from "react";

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your name must be less than 50 characters!"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Your number must be less than 50 characters!"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};
const ContactForm = ({
  buttonName,
  addNewContact,
  updateMyContact,
  contact = FORM_INITIAL_VALUES,
}) => {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current !== null) {
      firstInputRef.current.focus();
    }
  }, []);

  const updatesContactValue = { name: contact.name, number: contact.number };

  const handleSubmit = (values, actions) => {
    {
      buttonName === "Update contact"
        ? updateMyContact(values)
        : addNewContact(values);
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={updatesContactValue}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label>
          <p>Name</p>
          <Field
            className={css.name}
            type="text"
            name="name"
            innerRef={firstInputRef}
          ></Field>
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <label>
          <p>Number</p>
          <Field className={css.number} type="tel" name="number"></Field>
          <ErrorMessage className={css.error} component="p" name="number" />
        </label>
        <button type="submit">{buttonName}</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;

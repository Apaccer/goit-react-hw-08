import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

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

const ContactForm = ({ closeModal, toast }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    closeModal();
    toast("You was add contact successfully!", {
      style: {
        borderRadius: "10px",
        background: "#84fab0",
        color: "red",
      },
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label>
          <p>Name</p>
          <Field className={css.name} type="text" name="name"></Field>
          <ErrorMessage className={css.error} component="p" name="name" />
        </label>
        <label>
          <p>Number</p>
          <Field className={css.number} type="tel" name="number"></Field>
          <ErrorMessage className={css.error} component="p" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

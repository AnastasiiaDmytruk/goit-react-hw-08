import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";

const INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (formData) => {
    const contactWithId = {
      ...formData,
    };

    const action = addContact(contactWithId);
    dispatch(action);
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  const AddContactSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={AddContactSchema}>
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name:</span>

            <Field className={styles.field} type="text" name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span>Number:</span>
            <Field className={styles.field} type="tel" name="number" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="span"
            />
          </label>

          <button className={styles.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

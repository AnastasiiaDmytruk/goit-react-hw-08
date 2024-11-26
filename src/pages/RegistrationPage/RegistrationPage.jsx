import { useDispatch } from "react-redux";
import { RegistrationSchema } from "../../utils/schemas";
import styles from "./RegistrationPage.module.css";
// import toast from " react-hot-toast";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { apiRegisterUser } from "../../redux/auth/operations";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const dispatch = useDispatch();

  // const handleSubmit = (values, actions) => {
  //   dispatch(register(values))
  //     .unwrap()
  //     .catch((error) => { if (error === "Invalid request") {
  //         toast.error("User with this email already exists!!");
  //       }});

  //   actions.resetForm();
  
  const handleSubmit=(values,actions)=>{ dispatch(apiRegisterUser(values));
    actions.resetForm();}
  

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}>
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Name</span>
          </label>
          <Field className={styles.field} type="text" name="name"></Field>
          <ErrorMessage className={styles.error} name="name" component="span" />
          <label className={styles.label}>
            <span>Email</span>
          </label>
          <Field className={styles.field} type="text" name="email"></Field>
          <ErrorMessage
            className={styles.error}
            name="email"
            component="span"
          />
          <label className={styles.label}>
            <span>Password</span>
          </label>
          <Field
            className={styles.field}
            type="password"
            name="password"></Field>
          <ErrorMessage
            className={styles.error}
            name="password"
            component="span"
          />
          <button className={styles.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};




export default RegistrationPage
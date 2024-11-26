import { useDispatch } from "react-redux";
import { LogInSchema } from "../../utils/schemas";
import styles from "./LoginPage.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { apiLoginUser } from "../../redux/auth/operations";
import AppBar from "../../components/AppBar/AppBar";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(apiLoginUser(values));
    actions.resetForm();
  };

  return (
    <div>
      <AppBar/>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={LogInSchema}>
        <Form className={styles.form}>
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
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;

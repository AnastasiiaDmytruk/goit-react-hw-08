import * as Yup from "yup";

export const LogInSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .max(12, "Password lenght must be maximum 12 characters!")
    .required("Password is required"),
});

export const RegistrationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Email is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password lenght must be at least 8 characters!")
    .max(12, "Password lenght must be maximum 12 characters!")
    .required("Password is required"),
});

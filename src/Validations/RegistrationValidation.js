import * as Yup from "yup";

const RegistrationValidation = Yup.object().shape({
    first_name: Yup.string()
        .required("Field is required")
        .matches("^[a-zA-Z_]*$", "Invalid Format example: (Michael)"),
    last_name: Yup.string()
        .required("Field is required")
        .matches("^[a-zA-Z_]*$", "Invalid Format example: (Michael)"),
    email: Yup.string()
        .email("Email is not valid")
        .required("Field is required"),
    password: Yup.string()
        .required("Field is required")
        .min(6, "Password should be minimun 6 characters")
        .max(16, "Password should be maximum 16 characters"),
    country: Yup.string().required("Field is required"),
    phone: Yup.string()
        .required("Field is required")
        .matches("^([0-9()/+]*)$", "Invalid Format"),
});

export default RegistrationValidation;

import * as Yup from "yup";

const LoginValidation = Yup.object().shape({
    email: Yup.string()
        .email("Email is not valid")
        .required("Field is required"),
    password: Yup.string()
        .required("Field is required")
        .min(6, "Password should be minimun 6 characters")
        .max(16, "Password should be maximum 16 characters"),
});

export default LoginValidation;

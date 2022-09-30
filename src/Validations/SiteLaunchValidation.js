import * as Yup from "yup";

const SiteLaunchValidation = Yup.object().shape({
    title: Yup.string()
        .required("Field is required")
        .max(21, "Maximum 21 characters are supported")
        .matches(
            "^[A-Za-z0-9_-]*$",
            "Special characters are not allowed, except - and _"
        ),
    // username: Yup.string()
    //     .required("Field is required")
    //     .matches(
    //         "^[A-Za-z0-9_-]*$",
    //         "Special characters are not allowed, except - and _"
    //     ),
    // password: Yup.string()
    //     .required("Field is required")
    //     .min(6, "Password should be minimun 6 characters")
    //     .max(16, "Password should be maximum 16 characters")
    //     .matches("^[A-Za-z0-9_-]*$", "Special characters not allowed"),
    // email: Yup.string().required("Field is required"),
    region: Yup.string().required("Field is required"),
    // database: Yup.string().required("Field is required"),
    // cloud_provider: Yup.string().required("Field is required"),
});

export default SiteLaunchValidation;

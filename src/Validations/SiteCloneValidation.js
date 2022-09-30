import * as Yup from "yup";

const SiteCloneValidation = Yup.object().shape({
    title: Yup.string()
        .required("Field is required")
        .max(21, "Maximum 21 characters are supported")
        .matches(
            "^[A-Za-z0-9_-]*$",
            "Special characters are not allowed, except - and _"
        ),

    region: Yup.string().required("Field is required"),
});

export default SiteCloneValidation;

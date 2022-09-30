import * as Yup from "yup";

const SiteCloneValidationV6 = Yup.object().shape({
    domain: Yup.string()
        .required("Field is required")
        .matches(
            "^((?!-)(?!http://)(?!https://)+([a-zA-Z0-9-]+[.])+([a-zA-Z0-9]){2,12})+$",
            "Incorrect Domain Format"
        ),

    region: Yup.string().required("Field is required"),
});

export default SiteCloneValidationV6;

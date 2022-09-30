import * as Yup from "yup";

const DomainValidation = Yup.object().shape({
    new_domain: Yup.string()
        .required("Field is required")
        .matches(
            "^((?!-)(?!http://)(?!https://)+([a-zA-Z0-9-]+[.])+([a-zA-Z0-9]){2,12})+$",
            "Incorrect Domain Format"
        ),
});

export default DomainValidation;

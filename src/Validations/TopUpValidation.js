import * as Yup from "yup";

const TopUpValidation = Yup.object().shape({
    amount: Yup.string()
        .required("Field is required")
        .matches("^[0-9,.]*$", "Incorrect Format"),
});

export default TopUpValidation;

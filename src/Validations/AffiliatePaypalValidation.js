import * as Yup from "yup";

const AffiliatePaypalValidation = Yup.object().shape({
    paypal_account: Yup.string()
        .email("Email is not valid")
        .required("Field is required"),
});

export default AffiliatePaypalValidation;

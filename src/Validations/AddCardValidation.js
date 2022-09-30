import * as Yup from "yup";

const AddCardValidation = Yup.object().shape({
    name: Yup.string().required("Field is required"),
    card_number: Yup.string()
        .required("Field is required")
        .min(13, "This must be at least 13 characters.")
        .max(19, "Maximum length reached.")
        .matches(/^\d+$/, "Invalid Format"),
    exp_month: Yup.number()
        .integer("Invalid Format")
        .typeError("Invalid Format")
        .min(1)
        .max(12, "Card expiry month should have only 2 numbers between (1-12)")
        .nullable()
        .required("Field is required")
        .transform((value: string, originalValue: string) =>
            originalValue.trim() === "" ? null : value
        ),
    exp_year: Yup.string()
        .required("Field is required")
        .min(2)
        .max(2, "This must be 2 characters.")
        .matches(/^\d+$/, "Invalid Format"),
    cvc: Yup.string()
        .required("Field is required")
        .min(3)
        .max(4)
        .matches(/^\d+$/, "Invalid Format"),
});

export default AddCardValidation;

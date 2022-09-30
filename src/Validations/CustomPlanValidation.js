import * as Yup from "yup";
// const FILE_SIZE = 502 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const CustomPlanValidation = Yup.object().shape({
    name: Yup.string()
        .required("Field is required")
        .max(100, "This must be 100 characters."),
       amount: Yup.number()
       .required("Field is required"),
       addon_amount: Yup.number()
        .required("Field is required")
        
   
});

export default CustomPlanValidation;

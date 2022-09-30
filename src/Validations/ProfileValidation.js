import * as Yup from "yup";
const FILE_SIZE = 502 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const ProfileValidation = Yup.object().shape({
    first_name: Yup.string()
        .required("Field is required")
        .matches("^[a-zA-Z_]*$", "Numbers and blank space are not allowed"),
    // .matches(".*\\S+.*", "Blank Space not allowed"),
    last_name: Yup.string()
        .required("Field is required")
        .matches("^[a-zA-Z_]*$", "Numbers and blank space are not allowed"),
    // .matches(".*\\S+.*", "Blank Space not allowed"),
    email: Yup.string()
        .required("Field is required")
        .matches(".*\\S+.*", "Blank Space not allowed"),
    profile_image: Yup.mixed()
        .test(
            "fileSize",
            "The file is too large. Allowed maximum size in 500Kbs.",
            (value) => {
                if (value === null) {
                    return 100 <= FILE_SIZE;
                } else {
                    return value && value.size <= FILE_SIZE;
                }
            }
        )
        .test(
            "fileFormat",
            "Upload valid image, Only jpg, png, jpeg, gif are allowed",
            (value) => {
                if (value === null) {
                    return SUPPORTED_FORMATS.includes("image/jpg");
                } else {
                    return value && SUPPORTED_FORMATS.includes(value.type);
                }
            }
        ),
    phone: Yup.string().matches(
        // "^[^a-zs]{1,}$",
        "^([0-9()/+]*)$",
        "Invalid Format"
    ),
});

export default ProfileValidation;

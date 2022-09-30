import * as Yup from "yup";
const FILE_SIZE = 502 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const WhiteLabelValidation = Yup.object().shape({
    agency_name: Yup.string()
        .required("Field is required")
        .matches(".*\\S+.*", "Blank Space not allowed"),
    domain: Yup.string()
        .required("Field is required")
        .matches(".*\\S+.*", "Blank Space not allowed"),
    primary_color: Yup.string()
        .nullable()
        .matches(
            "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
            "Incorrect Color Format (use Hex. Code)"
        ),
    secondary_color: Yup.string()
        .nullable()
        .matches(
            "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
            "Incorrect Color Format (use Hex. Code)"
        ),
    plugin_name: Yup.string()
        .matches("^[ A-Za-z0-9]*$", "Special characters not allowed")
        .max(50, "This must be 50 characters."),
    logo: Yup.mixed()
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
    fav_icon: Yup.mixed()
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
});

export default WhiteLabelValidation;

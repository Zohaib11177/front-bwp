import * as Yup from "yup";

const MigrationValidation = Yup.object().shape({
    wp_admin_user: Yup.string().required("Field is required"),
    wp_admin_password: Yup.string().required("Field is required"),
    wp_admin_url: Yup.string().required("Field is required"),
    region: Yup.string().required("Field is required"),
    database: Yup.string().required("Field is required"),
    cloud_provider: Yup.string().required("Field is required"),
});

export default MigrationValidation;

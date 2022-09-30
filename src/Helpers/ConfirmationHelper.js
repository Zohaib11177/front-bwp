import Swal from "sweetalert2";

const Confirm = (dis, operation, message = null) => {
    return Swal.fire({
        title: "Are you sure?",
        text: message === null ? "Do you really want to do this?" : message,
        html: message === null ? "Do you really want to do this?" : message,
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "No",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes",
        customClass: "swal-button-width",
    }).then((result) => {
        if (result.value) {
            return dis(operation);
        }
    });
};
export default Confirm;

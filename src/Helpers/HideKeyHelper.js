const hideShow = (id) => {
    let type;
    try {
        let ele = document.getElementById(id);
        if (ele.type === "text") {
            type = "password";
            ele.type = "password";
        } else {
            type = "text";
            ele.type = "text";
        }
    } catch {
        console.log("hide and show helper error");
    }
    return type;
};
const HideKeyHelper = {
    hideShow,
};

export default HideKeyHelper;

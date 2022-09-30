import LoginHelper from "Helpers/LoginHelper";

const getUserEmail = () => {
    const user = localStorage.getItem("user")
        ? LoginHelper.localData(localStorage.getItem("user"))
        : {};
    return user.email;
};

const generateUserName = (email) => {
    const user = localStorage.getItem("user")
        ? LoginHelper.localData(localStorage.getItem("user"))
        : {};
    email = email ? email : user.email;
    let name = email.substring(0, email.lastIndexOf("@"));
    name = name.replace("%", "");
    name = name.replace("&", "");
    name = name.replace("+", "");
    name = name.replace("-", "");
    name = name.replace("/", "");
    name = name.replace("@", "");
    name = name.replace("_", "");
    name = name.replace(",", "");
    name = name.replace("'", "");
    name = name.replace("<", "");
    name = name.replace(">", "");
    name = name.replace("=", "");
    name = name.replace(".", "");
    name = name.replace("!", "");
    name = name.replace("*", "");
    name = name.replace("#", "");
    name = name.replace("{", "");
    name = name.replace("}", "");
    name = name.replace("|", "");
    name = name.replace("?", "");
    name = name.replace("'", "");
    name = name.replace("`", "");
    name = name.replace("~", "");
    name = name.replace(":", "");
    name = name.replace(";", "");
    return name;
};

const UsernameHelper = {
    generateUserName,
    getUserEmail,
};

export default UsernameHelper;

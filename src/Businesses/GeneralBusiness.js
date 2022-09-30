import LocalStorageHelper from "Helpers/LocalStorageHelper";
import StringHelper from "Helpers/StringHelper";
const emailVerificationToken = () => {
    let url = window.location.href;
    if (url.search("/dashboard/") !== -1) {
        LocalStorageHelper.save("ver_token", StringHelper.urlValueGet(url));
        console.log(StringHelper.urlValueGet(url));
    }
};

const GeneralBusiness = {
    emailVerificationToken,
};

export default GeneralBusiness;

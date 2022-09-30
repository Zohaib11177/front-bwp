import PermissionBusiness from "Businesses/PermissionBusiness";
import TimeStampHelper from "Helpers/TimeStampHelper";

const invoicePending = (cardList) => {
    let cardCondition =
        cardList.length !== 0 &&
        !PermissionBusiness.operationPermission(["sites_add"], 1)
            ? true
            : false;
    return cardCondition;
};
const paymentMethod = (cardList) => {
    let cardCondition =
        cardList.length === 0 &&
        !PermissionBusiness.operationPermission(["sites_add"], 1)
            ? true
            : false;
    return cardCondition;
};
const stagingDeleteDate = (siteType, destoyDate) => {
    const condition =
        -TimeStampHelper.differenceInDays(destoyDate) <= 2 &&
        siteType === "staging" &&
        destoyDate !== null &&
        destoyDate !== undefined;
    return condition;
};

const WarningBusiness = {
    invoicePending,
    paymentMethod,
    stagingDeleteDate,
};

export default WarningBusiness;

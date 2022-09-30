import LocalStorageHelper from "Helpers/LocalStorageHelper";

const operationPermission = (permissions, permissionsCount) => {
    const permissionStorage = LocalStorageHelper.get("permissions") || [];
    const componentPermissions = permissions || [];
    let permissionFilter = componentPermissions.filter((p) => {
        return permissionStorage.indexOf(p) !== -1;
    });
    if (permissionFilter.length === permissionsCount) return true;
    else return false;
};

const PermissionBusiness = {
    operationPermission,
};

export default PermissionBusiness;

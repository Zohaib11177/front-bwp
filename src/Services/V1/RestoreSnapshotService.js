import GATEWAY from "Services/Gateway";
import V1 from "Constants/V1ApiConstant";

const restorePut = async (data) => {
    const response = await GATEWAY.authGateway(
        "PUT",
        V1.restore.snapshot + data
    );
    return response;
};
const RestoreSnapshotService = {
    restorePut,
};
export default RestoreSnapshotService;

const validateStatus = (domains) => {
    let status = false;
    domains.map((domain) => {
        if (
            domain.status !== "redirect" &&
            domain.status !== "active" &&
            domain.status !== "failed_primary"
        ) {
            status = "event-none";
        }
        return domain;
    });
    return status;
};
const DomainBusiness = {
    validateStatus,
};

export default DomainBusiness;

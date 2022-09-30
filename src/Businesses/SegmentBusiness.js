import Store from "Redux/Store";

const loggedInUser = (segment = {}) => {
    const loggedIn = Store.getState().login.user;
    let user = {};
    user.email = loggedIn.email;
    user.first_name = loggedIn.first_name;
    user.last_name = loggedIn.last_name;
    user.userId = loggedIn.id;

    segment = { ...segment, user, userId: loggedIn.id };

    return segment;
};

const wpDetails = (segment, data) => {
    let wp = {};
    wp.email = data.email;
    wp.title = data.title;

    segment = { ...segment, wp_details: wp };

    return segment;
};

const SegmentBusiness = {
    loggedInUser,
    wpDetails,
};

export default SegmentBusiness;

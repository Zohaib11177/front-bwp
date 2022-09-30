import LOGIN from "Redux/V1/Auth/Login/Post/ActionType";

function loginPost(request) {
    return { type: LOGIN.LOGIN_POST, request };
}

function loginPostSuccess(response) {
    return { type: LOGIN.LOGIN_POST_SUCCESS, response };
}

function loginPostFailed(response) {
    return { type: LOGIN.LOGIN_POST_FAILED, response };
}

const LoginAction = {
    loginPost,
    loginPostSuccess,
    loginPostFailed,
};

export default LoginAction;

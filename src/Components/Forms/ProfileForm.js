import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import InputTextField from "Components/Forms/Fields/InputTextField";
import ProfileUpdateActionV2 from "Redux/V2/Profiles/Put/ProfilePutActionV2";
import ProfileValidation from "Validations/ProfileValidation";
import UploadPhotoField from "Components/Forms/Fields/UploadPhotoField";
import "Assets/css/Responsive/Profile.css";
import ErrorBusiness from "Businesses/ErrorBusiness";
import StringHelper from "Helpers/StringHelper";
import LogoutAction from "Redux/V1/Auth/Logout/LogoutAction";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Configs from "Configs";

class ProfileForm extends Component {
    state = {
        form: {
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            email: this.props.user.email,
            phone: this.props.user.contact.phone,
            profile_image_default: this.props.user.profile_image,
            profile_image: null,
        },
        error_clear: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        ProfileValidation.validate(this.state.form, { abortEarly: false })
            .then(() => {
                this.props.dispatch(
                    ProfileUpdateActionV2.profilePut({
                        form: this.state.form,
                    })
                );
            })
            .catch((err) => {
                this.setState({
                    error: ErrorBusiness.errorGet(err),
                });
            });
    };

    handleChange = (e) => {
        const errorUpdate = ErrorBusiness.errorRemove(
            this.state.error,
            e.target.name
        );
        this.setState({
            error: errorUpdate,
        });

        let { form } = this.state;
        form[e.target.name] = e.target.value;

        this.setState({
            form,
        });
    };

    setSelectedFile = async (e) => {
        const value = {
            name: e.target.files[0].name,
            type: e.target.files[0].type,
            size: e.target.files[0].size,
        };
        const formImage = await this.toBase64(e.target.files[0]);
        let { form } = this.state;

        this.setState({
            error_clear: false,
            form: {
                ...form,
                profile_image_default: formImage,
                profile_image: value,
            },
        });
    };
    toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    logoutAllFunction = () => {
        this.props.dispatch(LogoutAction.logout("action===all"));
    };

    clearProfileImageFunction = () => {
        let { form } = this.state;
        form["profile_image"] = null;
        form["profile_image_default"] = this.props.user.profile_image;
        setTimeout(() => {
            this.setState({
                form,
                error_clear: true,
            });
        }, 1000);
    };
    render() {
        const user = this.props.user;
        const profile = this.props.profile;
        const gravatarHash = StringHelper.stringToHash(user.email);
        const gravtarURL = `https://www.gravatar.com/avatar/${gravatarHash}?d=`;
        return (
            <Form onSubmit={this.handleSubmit}>
                <div
                    className="form-container profile-form-main"
                    id="registration-form"
                >
                    <Row>
                        <Col lg={1} className="profile-cancel-col">
                            <UploadPhotoField
                                name="profile_image"
                                value={this.state.form.profile_image}
                                backgroundPicture={
                                    this.state.form.profile_image_default
                                        ? this.state.form.profile_image_default
                                        : gravtarURL
                                }
                                onChange={this.setSelectedFile}
                                schema={ProfileValidation}
                                error={this.state.error}
                                error_clear={this.state.error_clear}
                            />
                        </Col>
                        {this.state.form.profile_image !== null ? (
                            <div className="cancel-icon">
                                <ReactSVG
                                    src={`${Configs.public_url}/assets/img/General/close.svg`}
                                    alt="cancel"
                                    className="profile-cancel-svg"
                                    onClick={this.clearProfileImageFunction}
                                    title="Cancel Image Upload"
                                />
                            </div>
                        ) : (
                            ""
                        )}
                        <Col lg={8} className="profile-username-col">
                            <div className="box-header ml-2">
                                <div className="profile-username">
                                    {user.first_name} {user.last_name}
                                </div>

                                <div className="profile-email">
                                    {user.email}
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <Button
                                className="btn btn-primary logoutall-session-btn "
                                onClick={this.logoutAllFunction}
                            >
                                Logout all sessions
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg="6">
                            <InputTextField
                                id="firstname"
                                name="first_name"
                                label="First Name"
                                getChange={this.handleChange}
                                schema={ProfileValidation}
                                value={this.state.form.first_name}
                                error={this.state.error}
                            />
                        </Col>
                        <Col lg="6">
                            <InputTextField
                                id="lastname"
                                name="last_name"
                                label="Last Name"
                                getChange={this.handleChange}
                                schema={ProfileValidation}
                                value={this.state.form.last_name}
                                error={this.state.error}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" className="event-none">
                            <InputTextField
                                id="email"
                                name="email"
                                value={this.state.form.email}
                                schema={ProfileValidation}
                                label="Email"
                                getChange={this.handleChange}
                                error={this.state.error}
                                disabled
                            />
                        </Col>
                        <Col lg="6">
                            <InputTextField
                                name="phone"
                                id="phonenumber"
                                required={null}
                                value={this.state.form.phone}
                                label="Phone Number"
                                getChange={this.handleChange}
                                schema={ProfileValidation}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" className="text-right">
                            <Button
                                type="submit"
                                className={`updatebtn bionic-btn ${
                                    profile.loading ? "loading" : ""
                                }`}
                            >
                                Update
                            </Button>{" "}
                        </Col>
                        <Col lg="12" className="responsive-logoutall-col">
                            <Link
                                className=" responsive-logoutall-session-link "
                                onClick={this.logoutAllFunction}
                            >
                                Logout all sessions
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

export default ProfileForm;

import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import InputTextField from "Components/Forms/Fields/InputTextField";
import WhiteLabelCreateActionV6 from "Redux/V6/Sites/SiteWhiteLabel/Post/SitePostActionV6";
import ColorPickerField from "Components/Forms/Fields/ColorPickerField";
import UploadPhotoField from "Components/Forms/Fields/UploadPhotoField";
import WhiteLabelValidation from "Validations/WhiteLabelValidation";
import "Assets/css/Responsive/WhiteLabel.css";
import ErrorBusiness from "Businesses/ErrorBusiness";
import { ReactSVG } from "react-svg";
import Configs from "Configs";
import ConfirmationHelper from "Helpers/ConfirmationHelper";
import siteWLPutSagaV6 from "Redux/V6/Sites/SiteWhiteLabel/PUT/SitePutActionV6";
// import { siteWLPutSagaV6 } from "Redux/V6/Sites/SiteWhiteLabel/PUT/SitePutSagaV6";

class WhiteLabelForm extends Component {
  state = {
    form: {
      logo: null,
      agency_name: null,
      plugin_name: null,
      primary_color: null,
      secondary_color: null,
      logo_default: null,
      domain: null,
      fav_icon: null,
      fav_icon_default: null,
    },
    default_data: false,
    pictures: [],
    error_clear: false,
    logoError: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.form.logo_default !== null &&
      this.state.form.fav_icon_default !== null
    ) {
      WhiteLabelValidation.validate(this.state.form, {
        abortEarly: false,
      })
        .then(() => {
          this.props.dispatch(
            WhiteLabelCreateActionV6.siteWLPost(this.state.form)
          );
        })
        .catch((err) => {
          this.setState({
            error: ErrorBusiness.errorGet(err),
          });
        });
    } else {
      this.setState({ logoError: "logo and favicon is required" });
    }
  };
  handleChange = (event) => {
    const errorUpdate = ErrorBusiness.errorRemove(
      this.state.error,
      event.target.name
    );
    this.setState({
      error: errorUpdate,
    });
    const { form } = this.state;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      form: {
        ...form,
        [name]: value,
      },
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
      form: {
        ...form,
        logo: value,
        logo_default: formImage,
      },
    });
  };
  setSelectedFav = async (e) => {
    const value = {
      name: e.target.files[0].name,
      type: e.target.files[0].type,
      size: e.target.files[0].size,
    };
    const formImage = await this.toBase64(e.target.files[0]);
    let { form } = this.state;
    this.setState({
      form: {
        ...form,
        fav_icon: value,
        fav_icon_default: formImage,
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

  componentDidUpdate() {
    const { form, default_data } = this.state;
    console.log(
      "🚀 ~ file: WhiteLabelForm.js ~ line 121 ~ WhiteLabelForm ~ componentDidUpdate ~ form",
      form
    );
    if (
      default_data === false &&
      this.props.detail.success &&
      this.props.detail?.white_label.name
    ) {
      form.logo_default = this.props.detail.white_label.logo
        ? this.props.detail.white_label.logo
        : "";
      form.agency_name = this.props.detail.white_label.name;
      form.plugin_name = this.props.detail.white_label.plugin_name;
      form.secondary_color = this.props.detail.white_label.secondary_color;
      form.primary_color = this.props.detail.white_label.primary_color;
      form.domain = this.props.detail.white_label.domain;
      form.fav_icon_default = this.props.detail.white_label.fav_icon
        ? this.props.detail.white_label.fav_icon
        : "";
      this.setState({
        form,
        default_data: this.props.detail.white_label.loading,
      });
    }
  }

  clearWhiteLabelLogoFunction = () => {
    let { form } = this.state;
    form["logo"] = null;
    form["logo_default"] = this.props.detail.whiteLabel.logo;
    setTimeout(() => {
      this.setState({
        form,
        error_clear: true,
      });
    }, 1000);
  };
  clearWhiteLabelFavFunction = () => {
    let { form } = this.state;
    form["fav_icon"] = null;
    form["fav_icon_default"] = this.props.detail.whiteLabel.fav_icon;
    setTimeout(() => {
      this.setState({
        form,
        error_clear: true,
      });
    }, 1000);
  };

  temp() {
    console.log("something");
  }

  OpenSSl = () => {
    // let { form } = this.state;
    // form["fav_icon"] = null;
    // form["fav_icon_default"] = this.props.detail.whiteLabel.fav_icon;
    // setTimeout(() => {
    //   this.setState({
    //     form,
    //     error_clear: true,
    //   });
    // }, 1000);
    ConfirmationHelper(
      this.props.dispatch,
      siteWLPutSagaV6.siteWLPut(),
      // this.temp,
      //  BackupDownloadActionV6.backupDownload(data),
      `Please make sure you have pointed your domain at ${Configs.dev_ip}`
    );
  };

  render() {
    const { create } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="white-label-form-main">
        <div className="form-container mt-0 box" id="registration-form">
          <h3>Portal Settings</h3>
          <hr className="white-label-divider" />
          <Row>
            <Col lg="5" xs={12}>
              <UploadPhotoField
                name="logo"
                value={this.state.form.logo}
                onChange={this.setSelectedFile}
                backgroundPicture={this.state.form.logo_default}
              />
              <p className="text-danger">{this.state.logoError}</p>
              {this.state.form.logo !== null ? (
                <div className="cancel-icon">
                  <ReactSVG
                    src={`${Configs.public_url}/assets/img/General/close.svg`}
                    alt="cancel"
                    className="whitelabel-cancel-svg"
                    onClick={this.clearWhiteLabelLogoFunction}
                    title="Cancel Image Upload"
                  />
                </div>
              ) : (
                ""
              )}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg="6" className="mt-0">
              <InputTextField
                name="agency_name"
                id="agencyname"
                getChange={this.handleChange}
                value={this.state.form.agency_name}
                label="Agency Name"
                schema={WhiteLabelValidation}
                error={this.state.error}
                maxLength="100"
                required={false}
              />
            </Col>
            <Col lg="6">
              <InputTextField
                name="plugin_name"
                id="pluginname"
                getChange={this.handleChange}
                value={this.state.form.plugin_name}
                label="Plugin Name"
                maxLength="100"
                schema={WhiteLabelValidation}
                required={false}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="5" xs={10}>
              <InputTextField
                name="primary_color"
                id="primarycolor"
                getChange={this.handleChange}
                value={this.state.form.primary_color}
                label="Primary Color"
                schema={WhiteLabelValidation}
                maxLength="7"
                required={false}
              />
            </Col>
            <Col lg="1" className="mt-2" xs={2}>
              <ColorPickerField
                className="color-picker-input"
                name="primary_color"
                onChange={this.handleChange}
                value={this.state.form.primary_color}
                required={false}
              />
            </Col>
            <Col lg="5" xs={10}>
              <InputTextField
                name="secondary_color"
                id="secondarycolor"
                getChange={this.handleChange}
                value={this.state.form.secondary_color}
                label="Secondary Color"
                schema={WhiteLabelValidation}
                maxLength="7"
                required={false}
              />
            </Col>
            <Col lg="1" className="mt-2" xs={2}>
              <ColorPickerField
                className="color-picker-input"
                name="secondary_color"
                onChange={this.handleChange}
                value={this.state.form.secondary_color}
                required={false}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <InputTextField
                name="domain"
                id="domain"
                getChange={this.handleChange}
                value={this.state.form.domain}
                label="Domain Name"
                maxLength="100"
                schema={WhiteLabelValidation}
                required={false}
              />
            </Col>
            <Col lg="6">
              <div className="px-2 d-flex justify-content-between">
                <h6 className="py-2 px-1">Fav Icon </h6>
                <div>
                  <div className="py-2">
                    <UploadPhotoField
                      name="fav_icon"
                      value={this.state.form.fav_icon}
                      onChange={this.setSelectedFav}
                      backgroundPicture={this.state.form.fav_icon_default}
                    />
                  </div>

                  {/* {this.state.form.fav_icon !== null ? (
                                <div className="cancel-icon">
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/General/close.svg`}
                                        alt="cancel"
                                        className="whitelabel-cancel-svg"
                                        onClick={
                                            this.clearWhiteLabelFavFunction
                                        }
                                        title="Cancel Image Upload"
                                    />
                                </div>
                            ) : (
                                ""
                            )} */}
                </div>
              </div>
            </Col>
          </Row>
          {/* <Row>

                    
                    <Col lg="3">
                        <div className="py-2" >
                        <UploadPhotoField
                                name="fav_icon"
                                value={this.state.form.fav_icon}
                                onChange={this.setSelectedFav}
                                backgroundPicture={this.state.form.fav_icon_default}
                            />
                        </div>
                            
                            {this.state.form.fav_icon !== null ? (
                                <div className="cancel-icon">
                                    <ReactSVG
                                        src={`${Configs.public_url}/assets/img/General/close.svg`}
                                        alt="cancel"
                                        className="whitelabel-cancel-svg"
                                        onClick={
                                            this.clearWhiteLabelFavFunction
                                        }
                                        title="Cancel Image Upload"
                                    />
                                </div>
                            ) : (
                                ""
                            )}
                        </Col>
                    </Row> */}
          <Row>
            {this.state.form && (
              <Col lg="6" className="text-left specific-ssl-class" xs={12}>
                <Col lg="12" className="text-left text-red font-14" xs={12}>
                 <p className="text-left text-red font-14"> {`Please make sure you have pointed your domain  ${Configs.dev_ip}`}</p>
                </Col>
                <Col lg="12" className="text-left" xs={12}>
                  <Button
                    onClick={this.OpenSSl}
                    className={`updatebtn bionic-btn-green ${
                      create.loading ? "loading" : ""
                    }`}
                  >
                    Active SSL
                  </Button>
                </Col>
              </Col>
            )}

            <Col
              lg={this.state.form ? 6 : 12}
              className="text-right"
              xs={12}
            >
              <Button
                type="submit"
                className={`updatebtn bionic-btn ${
                  create.loading ? "loading" : ""
                }`}
              >
                Submit
              </Button>{" "}
            </Col>
          </Row>
        </div>
      </Form>
    );
  }
}

export default WhiteLabelForm;

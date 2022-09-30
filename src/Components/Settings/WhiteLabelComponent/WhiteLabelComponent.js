import React, { Component } from "react";
import TemplateMain from "Templates/TemplateMain";
import { Row, Col, Form, Button } from "react-bootstrap";
import ProfileSubMenuComponent from "Components/UI/ProfileSubMenuComponent";
import WhiteLabelForm from "Components/Forms/WhiteLabelForm";
import AgencyCustomPlanFormV6 from "Components/Forms/V6/AgencyCustomPlanFormV6";
import AgencyCustomPlanEditFormV6 from "Components/Forms/V6/AgencyCustomPlanEditFormV6";
import AgencyCustomPlanDelete from "Components/Forms/V6/AgencyCustomPlanDelete";
import StripeFormV6 from "Components/Forms/V6/StripeFormV6";
import WhiteLabeGetAction from "Redux/V6/Sites/SiteWhiteLabel/Get/SiteWLGetActionV6";
import CustomPlanListAction from "Redux/V6/CustomPlan/LIST/CustomPlanListAction";
import SitePlanActionV6 from "Redux/V6/Sites/Site/SitePlan/SitePlanActionV6";
import { Switch, Route, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import "Assets/css/Responsive/WhiteLabel.css";
import "Assets/css/whitelabel.css";
import TableComponent from "Components/UI/TableComponent";

class WhiteLabelComponent extends Component {
    componentDidMount() {
        this.props.dispatch(WhiteLabeGetAction.siteWLGet());
        this.props.dispatch(CustomPlanListAction.CustomPlanList());
        this.props.dispatch(SitePlanActionV6.sitePlan());
    }

    customTableBody = () => {
        let sno = 0;
        if (this.props.custom_plan?.length) {
            return (
                <>
                    {this.props.custom_plan.map((data) => {
                        sno = sno + 1;
                        let price =  Number(data.cost).toFixed(2);
                        let Ad_price = Number(data.addons[0].cost).toFixed(2);
                        console.log(data);
                        return (
                            <tr className="">
                                <td>{sno}</td>
                                <td>{data.name}</td>
                                <td>$ {price}</td>
                                <td>$ {Ad_price} </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        className="d-inline "
                                        checked={
                                            data?.default === true
                                                ? true
                                                : false
                                        }
                                    />
                                </td>
                                <td>
                                    <AgencyCustomPlanEditFormV6
                                        edit={this.props.custom_plan_edit}
                                        data={data}
                                    />
                                    <AgencyCustomPlanDelete id={data.id} />
                                </td>
                            </tr>
                        );
                    })}
                </>
            );
        } else {
            return (
                <tr>
                    <td colSpan={6}>
                        <p className="w-100 text-center">No Plans to show</p>
                    </td>
                </tr>
            );
        }
    };
   
  render() {
    const portal_settings = JSON.parse(localStorage.getItem('portal_settings'));
    const {
      whiteLabel,
      dispatch,
      whiteLabelCreate,
      custom_plan,
      custom_plan_create,
      custom_plan_edit,
      stripe_create,
    } = this.props;
    const thead = [
      "S.no",
      "Plan Name",
      "Plan Price",
      "Addon Price",
      "Default",
      "Edit/Delete",
    ];
    const parent_plan = this.props.plan?.plan.filter((item) => {
      if (item.default == true) {
        return item;
      }
    });
    const id = parent_plan[0]?.id;
    console.log(parent_plan);
    console.log(id);
    return (<>
    {portal_settings?.name ?  <Redirect
                                to={{
                                    pathname: '/dashboard',
                                }}
                            />  :
                            <TemplateMain>
                              {/* <ProfileSubMenuComponent active="white-label" /> */}
                              <div className="box mt-5 white-label-main">
                                <WhiteLabelForm
                                  dispatch={dispatch}
                                  detail={whiteLabel}
                                  create={whiteLabelCreate}
                                />
                              </div>
                              <div className="box mt-5 py-5 px-4 white-label-main">
                                <div className="px-1 ">
                                  <div className=" pb-1  d-flex w-100 justify-content-between">
                                    <h3 className="my-auto">Plans</h3>
                                    <AgencyCustomPlanFormV6
                                      dispatch={dispatch}
                                      parent_plan={id}
                                      create={custom_plan_create}
                                    />
                                  </div>
                                  <hr className="white-label-divider" />
                                  <div className="py-2 table-scroll table-responsive">
                                    <TableComponent 
                                    classNameTable={""}
                                    thead={thead} tbody={this.customTableBody()} />
                                  </div>
                                </div>
                              </div>
                              <div className="box mt-4 white-label-main">
                                <StripeFormV6
                                  detail={whiteLabel}
                                  dispatch={dispatch}
                                  create={stripe_create}
                                />
                              </div>
                            </TemplateMain>}
    
    </>
     
    );
  }
}

const mapStateToProps = (state) => {
    return {
        whiteLabel: state.whiteLabelV6.list,
        whiteLabelCreate: state.whiteLabelV6.post,
        custom_plan: state.CustomPlanV6.list.custom_plan,
        custom_plan_create: state.CustomPlanV6.create,
        stripe_create: state.StripeV6.create,
        custom_plan_edit: state.CustomPlanV6.edit,
        plan: state.siteV6.siteV6.plan,
    };
};

export default connect(mapStateToProps)(WhiteLabelComponent);

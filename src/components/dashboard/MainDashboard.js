import React from "react";
import Notification from "../MainDashboard/Notification";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Helmet } from "react-helmet";
function MainDashboard({ notification }) {
  return (
    <>
      <Helmet>
        <title>OwlTruck</title>
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9">
            <h1 style={{ color: "black" }} className="display-4-left">
              Introduction
            </h1>
            <p style={{ color: "black" }} className="lead">
              <b>
                <strong style={{ fontSize: "25px" }}>OwlTruck</strong> is a
                platform which helps both carrier and shipper to meet each other
                and give lots of benefits to them . It solves the empty
                container problem in truck industry.
              </b>
            </p>
          </div>

          <div className="col-sm-3">
            <br />
            <h3 className="h3">Notifications</h3>
            <Notification notification={notification} />
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    notification: state.firestore.ordered.notification,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "notification", limit: 5, orderBy: ["time", "desc"] },
  ])
)(MainDashboard);

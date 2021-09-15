import React from "react";
import PropTypes from "prop-types";
import { Marker } from 'react-google-maps';
import { COMPANY_LOCATION_FORM } from '../../constants';
import CourseForm from "../CoursesForm";
import Map from "../CoursesFormMap";
import ossMarker from '../../../images/mapMarkers/INTShop.png';
import "../../../scss/courseForm.scss";

export default class CoursesFooterForm extends React.PureComponent {
  static propTypes = {
    didCompleted: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    hanleClick: PropTypes.func.isRequired,
    changeIsOpen: PropTypes.func.isRequired,
  };

  state = {
    footerFormDetecter: true,
  };

  render() {
    const {
      didCompleted,
      isCompleted,
      hanleClick,
      courseClass
    } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <div className="form_container">
          <CourseForm
            didCompleted={didCompleted}
            isCompleted={isCompleted}
            hanleClick={hanleClick}
            footerFormDetecter={this.state.footerFormDetecter}
            changeIsOpen={this.props.changeIsOpen}
            courseClass={courseClass}
            courseClassName={this.props.courseClassName}
          />
        </div>
        <div className="contMap">
          <Map>
          <Marker
            key="INTShop"
            position={COMPANY_LOCATION_FORM}
            opacity={1}
            icon={ossMarker}
            draggable={false}
          />
          </Map>
        </div>
      </div>
    );
  }
}

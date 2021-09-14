import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import employeeActions from '../../actions/employeeActions';

import HeaderSection from '../../components/HeaderSection/index';
import EmployeeCard from '../../components/EmployeeCard';

import '../../../scss/keystaff.scss';
import { HELMET_ROUTE_MAP } from '../../constants';

import backgroundImage from '../../../images/background/klusscheviecoworkers.jpg';

class Employees extends PureComponent {
  static propTypes = {
    // fetching_employee: PropTypes.bool,
    getEmployee: PropTypes.func.isRequired,
    employee: PropTypes.arrayOf(PropTypes.shape({})),
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
    res: PropTypes.shape({
      width: PropTypes.number,
    }).isRequired,
  };
  static defaultProps = {
    employee: [],
    // fetching_employee: true,
  };
  componentDidMount() {
    this.props.getEmployee();
    document.body.scrollTop = 0;
  }
  componentWillReceiveProps(next) {
    if (next.i18n !== this.props.i18n) {
      this.props.getEmployee();
    }
  }
  employeesBlocks = items => items.map(item => <EmployeeCard {...item} key={item.fullName} />);

  render() {
    const staffBlocks = this.employeesBlocks(this.props.employee);
    const {
      i18n: { locale },
      res: { width },
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].employees}</title>
        </Helmet>
        <HeaderSection
          title="employees.title"
          backgroundImage={backgroundImage}
        />
        <div className={width <= 767 ? 'keystaff__staff_container mobile' : 'keystaff__staff_container'}>
          {staffBlocks}
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    employee: store.employee.list,
    fetching_employee: store.employee.fetching,
    i18n: store.i18n,
    res: store.response,
  }),
  dispatch => bindActionCreators({ ...employeeActions }, dispatch),
)(Employees);

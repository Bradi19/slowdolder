/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import vacanciesActions from '../../actions/filterVacanciesActions';
import { filterItemsSelector } from '../../reducers/vacancies';
import arrow from '../../../images/arrows/arrow up.svg';
import '../../../scss/vacancies.scss';
import UIToggler from '../../containers/UIToggler';

class FilterArea extends PureComponent {
  static propTypes = {
    vacanciesSpecialtyFilter: PropTypes.string.isRequired,
    changeSpecialtyFilter: PropTypes.func.isRequired,
    filterItems: PropTypes.shape().isRequired,
  };
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      openMobileFilters: false,
    };
  }
  prepareSpecialtyItems = (array) => {
    const { vacanciesSpecialtyFilter } = this.props;
    const items = array.map((item, index) => (
      <div
        key={index}
        className={(
          item === vacanciesSpecialtyFilter || (item === 'All' && !vacanciesSpecialtyFilter) ? 'choosenItem' : 'itemCont'
        )}
        onClick={() => this.props.changeSpecialtyFilter(item)}
      >{item}
      </div>
    ));
    return items;
  };

  prepareFilterAreaForMobile = (specialtyItems) => {
    const { openMobileFilters } = this.state;
    return (
      <div className="mobileFilterArea">
        <div className="dropdownFilterHeader" onClick={() => this.setState({ openMobileFilters: !openMobileFilters })}>
          <div>Filters</div>
          <img src={arrow} alt="" className={openMobileFilters ? 'defultImageCont' : 'rotateImage'} />
        </div>
        <div className={`filterItemsCont ${openMobileFilters ? '' : 'closeFilterItemsCont'}`}>
          {specialtyItems}
        </div>
      </div>
    );
  };

  prepareFilterAreaForDeskTop = specialtyItems => <div className="filterItemsCont">{specialtyItems}</div>;

  render() {
    const {
      filterItems,
    } = this.props;
    const specialtyItems = this.prepareSpecialtyItems(filterItems.specialty);
    return (
      <UIToggler
        desktopComponent={this.prepareFilterAreaForDeskTop(specialtyItems)}
        tabletComponent={this.prepareFilterAreaForDeskTop(specialtyItems)}
        mobileComponent={this.prepareFilterAreaForMobile(specialtyItems)}
      />
    );
  }
}

export default connect(
  store => ({
    filterItems: filterItemsSelector(store),
    vacanciesSpecialtyFilter: store.vacancies.vacanciesSpecialtyFilter,
    vacanciesLevelFilter: store.vacancies.vacanciesLevelFilter,
    res: store.response,
  }),
  dispatch => ({
    ...bindActionCreators({ ...vacanciesActions }, dispatch),
  }),
)(FilterArea);


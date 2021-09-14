import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';

const TabItemComp = props => (
  <div
    className={props.tabClass}
    onClick={() => { props.onChooseTab(props.tabName); }}
  >
    <p>
      <Translate value={props.label} />
    </p>
  </div>
);

TabItemComp.propTypes = {
  label: PropTypes.string.isRequired,
  tabClass: PropTypes.string.isRequired,
  onChooseTab: PropTypes.func.isRequired,
  tabName: PropTypes.string.isRequired,
};

export default TabItemComp;

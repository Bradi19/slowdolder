import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabsComp extends Component {
  render() {
    return (
      <div className="tabContainer">
        {this.props.children}
      </div>
    );
  }
}

TabsComp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TabsComp;

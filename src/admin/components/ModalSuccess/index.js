/* eslint-disable import/prefer-default-export,react/prefer-stateless-function,react/forbid-prop-types,max-len,react/require-default-props,jsx-a11y/anchor-is-valid,react/prop-types */
import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import './modalSuccess.scss';


export class ModalSuccess extends Component {
    static defaultProps = {
      header: 'Success',
      body: 'Success',
      redirectBtnName: 'Все вакансии',
    };

    render() {
      const {
        header,
        innerItem,
      } = this.props;
      return (
        <div className="modalBackground">
          <div className="modalCont">
            <div className="modalHeader"><h3>{header}</h3></div>
            {innerItem}
          </div>
        </div>
      );
    }
}

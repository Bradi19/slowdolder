/* eslint-disable import/prefer-default-export,react/prefer-stateless-function,react/forbid-prop-types,max-len,react/require-default-props,jsx-a11y/anchor-is-valid,react/prop-types,react/no-did-update-set-state,react/no-did-mount-set-state */
import React, { Component } from 'react';
import './messageBlockAdm.scss';


export class MessageBlock extends Component {
    static defaultProps = {
      text: 'Test Message',
      success: true,
      show: false,
    };

    constructor(props) {
      super(props);
      this.state = {
        show: false,
      };
    }

    componentWillReceiveProps(next) {
      if (next.show !== this.props.show) {
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 2000);
      }
    }

    render() {
      const { text, success } = this.props;
      const { show } = this.state;
      const colour = success ? '#44A6F6' : '#F15B4D';
      return (
        <div>
          {show && <div style={{ backgroundColor: colour }} className="modalBackground">{text}</div>}
        </div>
      );
    }
}

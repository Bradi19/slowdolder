import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/index';

class LoaderDelay extends PureComponent {
  static propTypes = {
    delay: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    delay: 1000,
    className: 'loaderMainCont',
  };

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ isVisible: true });
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    if (this.state.isVisible) {
      return (
        <div className={this.props.className}>
          <Loader />
        </div>
      );
    }

    return null;
  }
}

export default LoaderDelay;

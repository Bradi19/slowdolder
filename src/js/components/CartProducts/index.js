import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { API_URL } from '../../../constants/index';
// import { API_PROD_URL } from '../../../constants/index';
import '../../../scss/keystaff.scss';


class EmployeeCard extends PureComponent {
  static propTypes = {
    foto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    res: PropTypes.shape({
      width: PropTypes.number
    }).isRequired
    // hovered: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      src: props.foto
    };
  }

  onMouseEnter = () => this.setState({ src: this.props.foto });

  onMouseLeave = () => this.setState({ src: this.props.foto });

  render() {
    const {
      title,
      res: { width }
    } = this.props;
    // const { src } = this.state;
    // const modifyedSrc = '/uploads/employee_foto/' + src.split('/')[6];
    return (
      <div
        className={
          width <= 767 ? "keystaff__staffBlock mobile" : "keystaff__staffBlock"
        }
        key={title}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="keystaff__description">
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

export default connect(store => ({ res: store.response }), null)(EmployeeCard);

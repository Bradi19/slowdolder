import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import localeActions from '../../actions/localesAction';
import NavbarScroling from '../../components/NewNavBarScroling';

export default withRouter(connect(
  store => ({
    activeLang: store.i18n.locale,
  }),
  dispatch => (
    bindActionCreators({ ...localeActions }, dispatch)
  ),
)(NavbarScroling));

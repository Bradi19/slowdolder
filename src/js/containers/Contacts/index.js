import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Map from '../../components/ReactMap';
import ContactsMapMarkers from '../../components/ReactMap/ContactsMapMarkers';
import ContactsMapPolylines from '../../components/ReactMap/ContactsMapPolylines';
import Form from '../../components/Contacts';
import contactActions from '../../actions/contactActions';

import '../../../scss/contacts.scss';
import { HELMET_ROUTE_MAP } from '../../constants';

class ContactContainer extends PureComponent {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
    contacts: PropTypes.shape().isRequired,
  };
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  render() {
    const { sendMessage, contacts, i18n: { locale } } = this.props;
    return (
      <div className="ourContacts">
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].contacts}</title>
        </Helmet>
        <div className="mapCont">
          <Map>
            <ContactsMapMarkers locale={locale} />
            <ContactsMapPolylines />
          </Map>
        </div>
        <Form
          contacts={contacts}
          sendMessage={sendMessage}
        />
      </div>
    );
  }
}

export default connect(
  store => ({
    contacts: store.contacts,
    i18n: store.i18n,
  }),
  dispatch => bindActionCreators({ ...contactActions }, dispatch),
)(ContactContainer);

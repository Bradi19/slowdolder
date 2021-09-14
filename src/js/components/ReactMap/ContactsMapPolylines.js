import React from 'react';
import { Polyline } from 'react-google-maps';
import { polylines } from '../../config/map';

const ContactsMapPolylines = () => {
  const contactsPolylines = polylines.map(item => (
    <Polyline
      key={item.name}
      path={item.path}
      options={item.options}
    />
  ));
  return contactsPolylines;
};

export default ContactsMapPolylines;

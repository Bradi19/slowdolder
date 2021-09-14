/* eslint-disable dot-notation */
import React from 'react';
import { Marker } from 'react-google-maps';
import { markers } from '../../config/map';

const ContactsMapMarkers = (props) => {
  const contactMapMarkers = markers.map(item => (
    <Marker
      key={item.name}
      position={item.position}
      opacity={item.opacity}
      icon={item.icon[props.locale]}
      draggable={item.draggable}
      label={item.label}
      title={item.title}
    />
  ));
  return contactMapMarkers;
};

export default ContactsMapMarkers;

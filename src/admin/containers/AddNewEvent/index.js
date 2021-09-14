/* eslint-disable import/prefer-default-export,react/prop-types,react/jsx-closing-tag-location,max-len,jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EventEditor } from '../../components/eventEditor/index';
import eventsActions from '../../actions/eventsActions';

class AddNewEvent extends Component {
  render() {
    const {
      error,
      activeLang,
      addEvent,
      successAdding,
    } = this.props;
    return (
      <div>
        <EventEditor
          error={error}
          onSubmit={data => addEvent(data)}
          activeLang={activeLang}
          reset={successAdding}
        />
      </div>
    );
  }
}

export default connect(
  store => ({
    error: store.events.error,
    activeLang: store.locales.activeLang,
    successAdding: store.events.successAdding,
  }),
  dispatch => bindActionCreators({ ...eventsActions }, dispatch),
)(AddNewEvent);

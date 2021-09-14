/* eslint-disable import/prefer-default-export,react/prop-types,react/jsx-closing-tag-location,max-len */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import eventsActions from '../../actions/eventsActions';
import { EventEditorExtended } from '../../components/eventEditorExtended/index';

@withRouter
class EditEventClass extends Component {
  componentWillMount() {
    this.props.getEvents();
  }

  componentWillReceiveProps(next) {
    if (this.props.addingGallery !== next.addingGallery || this.props.delitingPhotos !== next.delitingPhotos) {
      this.props.getEvents();
    }
  }

    getCurrentEvent = () => this.props.data
      .filter(item => item.id === this.props.match.params.id)[0];

    prepareEvent = () => {
      const {
        error,
        activeLang,
        editingEvent,
        addingGallery,
        delitingPhotos,
      } = this.props;

      let items = <p>Loading...</p>;
      const currentEvent = this.getCurrentEvent();
      if (currentEvent !== undefined) {
        items = (<div>
          <EventEditorExtended
            reloadUplouder={addingGallery}
            activeLang={activeLang}
            itemProps={currentEvent}
            onSubmit={data => this.props.editEvent(currentEvent.id, data)}
            onSubmitGallery={data => this.props.editEventGallery(currentEvent.id, data)}
            onDeletePictures={data => this.props.deleteEventPhotos(currentEvent.id, data)}
            editingEvent={editingEvent}
            addingGallery={addingGallery}
            delitingPhotos={delitingPhotos}
            error={error}
          />
        </div>);
      }
      return items;
    };

    render() {
      return (
        <div>
          {this.prepareEvent()}
        </div>
      );
    }
}


const mapStateToProps = state => ({
  activeLang: state.locales.activeLang,
  data: state.events.data,
  error: state.events.error,
  editingEvent: state.events.editingEvent,
  addingGallery: state.events.addingGallery,
  delitingPhotos: state.events.delitingPhotos,
});
const mapDispatchToProps = () => dispatch => bindActionCreators({ ...eventsActions }, dispatch);

export const EditEvent = connect(mapStateToProps, mapDispatchToProps)(EditEventClass);

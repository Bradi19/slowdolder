/* eslint-disable import/prefer-default-export,react/prefer-stateless-function,react/prop-types,no-unused-vars,max-len */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventCard from '../../components/EventCardNew';
import eventsActions from '../../actions/eventsActions';
import HeaderSection from '../../components/HeaderSectionAdmin';
import './eventsAdm.scss';

@withRouter
class EventsAdmClass extends Component {
  componentWillMount() {
    this.props.getEvents();
  }
    prepareItems = () => {
      const {
        data, fetching, error, deleteEvent, activeLang,
      } = this.props;
      const items = data.map(item =>
        (
          <div className="evetsAdminCell" key={item.id}>
            <EventCard item={item} activeLang={activeLang} onDelete={() => deleteEvent(item.id)} />
          </div>
        ));
      return items;
    };

    render() {
      return (
        <div>
          <HeaderSection
            className="eventsHeaderAdm"
            title="Мероприятия"
          />
          <div className="evetsAdminMainCont">
            {this.prepareItems()}
          </div>
        </div>
      );
    }
}


const mapStateToProps = state => ({
  activeLang: state.locales.activeLang,
  fetching: state.events.fetching,
  data: state.events.data,
  error: state.events.error,
});
const mapDispatchToProps = () => dispatch => bindActionCreators({ ...eventsActions }, dispatch);

export const EventsAdm = connect(mapStateToProps, mapDispatchToProps)(EventsAdmClass);

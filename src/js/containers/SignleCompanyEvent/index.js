/* eslint-disable react/require-default-props,react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import companyEventsActions from '../../actions/companyEventsActions';
import '../../../scss/singleCompanyEvent.scss';
// import { CardCarousel } from '../../components/ResponsibleCarousel/index';
import { HELMET_ROUTE_MAP } from '../../constants';
// import { FullSizeGallery } from '../../components/FullSizeGallery/index';
// import UIToggler from '../../containers/UIToggler';

@withRouter
class SingleComapnyEvent extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape(),
    }),
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
    // res: PropTypes.shape({
    //   width: PropTypes.number,
    // }).isRequired,
    getEvent: PropTypes.func.isRequired,
    event: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      photoItemIndex: -1,
    };
  }

  componentWillMount() {
    this.props.getEvent(this.props.match.params.event);
  }
  componentDidMount() {
    document.body.scrollTop = 0;
  }

  showPhoto = (index) => {
    this.setState({ photoItemIndex: index });
  };

  // preparePhotos = photos =>
  //   photos.map((photo, index) => (
  //     <div className="imgDivEventCont">
  //       <div
  //         key={index}
  //         className="imgDivEvent"
  //         style={{ backgroundImage: `url(${photo})` }}
  //         onClick={() => this.showPhoto(index)}
  //       />
  //     </div>
  //   ));
  render() {
    const {
      body, description, title, publishedAt, // gallery,
    } = this.props.event;
    // const { photoItemIndex } = this.state;
    const { locale } = this.props.i18n;
    // const photos = this.preparePhotos(gallery);
    return (
      <div>
        <div className="eventHeader">
          <Helmet>
            <title>{HELMET_ROUTE_MAP[locale].singleCompanyEvent}</title>
          </Helmet>
          <div className="headerContent">
            <h2>{title}</h2>
            <h3>{ moment(publishedAt).format('DD.MM.YYYY') }</h3>
            <p>{description}</p>
          </div>
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div className="bodyEventCont" dangerouslySetInnerHTML={{ __html: body }} />
        {/* <div className="galleryCont">
          <UIToggler
            desktopComponent={(
              <CardCarousel
                width={this.props.res.width}
                itemArr={photos}
                singleCard={false}
                displayArrows
                displayDots={false}
              />
            )}
            tabletComponent={(
              <CardCarousel
                width={this.props.res.width}
                itemArr={photos}
                singleCard={false}
                displayArrows
                displayDots={false}
              />
            )}
            mobileComponent={(
              <CardCarousel
                width={this.props.res.width}
                itemArr={photos}
              />
            )}
          />
        </div>
        <UIToggler
          desktopComponent={
            <FullSizeGallery
              openGallery={(photoItemIndex !== -1)}
              gallery={gallery}
              position={photoItemIndex}
            />
          }
          tabletComponent={
            <FullSizeGallery
              openGallery={(photoItemIndex !== -1)}
              gallery={gallery}
              position={photoItemIndex}
            />
          }
          mobileComponent={null}
        /> */}
      </div>
    );
  }
}

export default connect(
  store => ({
    fetching: store.eventStore.fetchingSingleEvent,
    event: store.eventStore.event,
    error: store.eventStore.errorSingleEvent,
    i18n: store.i18n,
    res: store.response,
  }),
  dispatch => ({ ...bindActionCreators({ ...companyEventsActions }, dispatch) }),
)(SingleComapnyEvent);

/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaClose } from 'react-icons/lib/fa';
import companyEventsActions from '../../actions/companyEventsActions';
import HeaderSection from '../HeaderSection/index';
import { VideoCard } from '../VideoCard/index';
import { HELMET_ROUTE_MAP } from '../../constants';
import { FullSizeGallery } from '../FullSizeGallery/index';

import UIToggler from '../../containers/UIToggler';

import backgroundImage from '../../../images/background/gallery.jpg';

const closeStyle = {
  position: 'absolute',
  top: -16,
  right: -16,
  color: 'white',
  cursor: 'pointer',
};

class Gallery extends Component {
  static propTypes = {
    getVideos: PropTypes.func.isRequired,
    getPhotos: PropTypes.func.isRequired,
    i18n: PropTypes.shape({
      locale: PropTypes.string,
    }).isRequired,
    video: PropTypes.array,
    photo: PropTypes.array,
  };
  static defaultProps = {
    video: [],
    photo: [],
  };
  constructor(props) {
    super(props);
    // const photoArr = this.preparePhotoGallery(this.props.photo);
    this.state = {
      tabPhoto: true,
      youtubeHash: '',
      photoItemIndex: -1,
      // photoArr,
      youTubeLoad: false,
    };
  }

  componentWillMount() {
    this.props.getVideos();
    this.props.getPhotos();
  }
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  componentWillReceiveProps(next) {
    if (next.i18n !== this.props.i18n) {
      this.props.getPhotos();
    }
  }

  turnOnVideo = (youtubeHash) => {
    this.setState({ youtubeHash, photoItemIndex: -1 });
  };

  showPhoto = (photoItem, index) => {
    this.setState({ photoItemIndex: index });
  };

  prepareGalleryItems = items => items.map((item, index) =>
    (
      <div key={index} className="videoCardCel">
        <VideoCard
          itemProps={item}
          onTurnVideo={hash => this.turnOnVideo(hash)}
          onShowPhoto={photoItem => this.showPhoto(photoItem, index)}
        />
      </div>
    ));

  preparePhotoGallery = items => items.map(item => item.thumbnail);

  render() {
    const { video, photo, i18n: { locale } } = this.props;
    const videoItems = this.prepareGalleryItems(video);
    const photoItems = this.prepareGalleryItems(photo);
    const photoArr = this.preparePhotoGallery(photo);
    const {
      tabPhoto, youtubeHash, photoItemIndex,
    } = this.state;

    return (
      <div className="gallery">
        <Helmet>
          <title>{HELMET_ROUTE_MAP[locale].gallery}</title>
        </Helmet>
        <HeaderSection
          title="gallery.title"
          backgroundImage={backgroundImage}
        />
        <div className="transitionCont">
          <div className="galleryTabs">
            <div onClick={() => this.setState({ tabPhoto: true, photoItemIndex: -1 })} className={tabPhoto ? 'selectedTab' : ''}><Translate value="gallery.tabs.foto" /></div>
            <div onClick={() => this.setState({ tabPhoto: false, photoItemIndex: -1 })} className={tabPhoto ? '' : 'selectedTab'}><Translate value="gallery.tabs.video" /></div>
          </div>
          <div className="videoContCards">
            {
              tabPhoto ?
                photoItems
                :
                videoItems
            }
          </div>
          {
            youtubeHash !== ''
              ?
                <div className="youTubeVideoBackground" onClick={() => this.setState({ youtubeHash: '' })}>
                  <div className="youTubeVideo">
                    <div className="closeYoutubeVideo" onClick={() => this.setState({ youtubeHash: '' })} ><span>&times;</span></div>
                    {this.state.youTubeLoad && <FaClose style={closeStyle} size={20} />}
                    <iframe
                      title="youTubeVideo"
                      height="100%"
                      width="100%"
                      src={`https://www.youtube.com/embed/${this.state.youtubeHash}?autoplay=1`}
                      frameBorder="0"
                      allowFullScreen
                      onLoad={() => this.setState({ ...this.state, youTubeLoad: true })}
                    />
                  </div>
                </div>
              :
              null
          }
          <UIToggler
            desktopComponent={
              <FullSizeGallery
                openGallery={(photoItemIndex !== -1)}
                gallery={photoArr}
                position={photoItemIndex}
              />
            }
            tabletComponent={
              <FullSizeGallery
                openGallery={(photoItemIndex !== -1)}
                gallery={photoArr}
                position={photoItemIndex}
              />
            }
            mobileComponent={null}
          />

        </div>
      </div>
    );
  }
}


export default connect(
  store => ({
    video: store.video.data,
    photo: store.photo.data,
    i18n: store.i18n,
  }),
  dispatch => bindActionCreators({ ...companyEventsActions }, dispatch),
)(Gallery);


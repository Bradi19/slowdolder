/* eslint-disable import/prefer-default-export,react/forbid-prop-types,no-plusplus */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../scss/fullSizeGallerry.scss';
import rightArrow from '../../../images/arrows/Shape right.svg';
import leftArrow from '../../../images/arrows/Shape left.svg';

export class FullSizeGallery extends Component {
  static propTypes = {
    gallery: PropTypes.array,
    position: PropTypes.number,
    openGallery: PropTypes.bool,
  };
  static defaultProps = {
    gallery: [],
    position: 0,
    openGallery: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      position: this.props.position,
      openGallery: this.props.openGallery,
    };
  }
  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp, false);
  }
  componentWillReceiveProps(next) {
    this.setState({
      openGallery: next.openGallery,
      position: next.position,
    });
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyUp, false);
  }
  onKeyUp = (e) => {
    e.preventDefault();
    if (e.keyCode === 27 /* 27 - ESC */) {
      return this.setState({ openGallery: false });
    }
    if (e.keyCode === 39 /* 39 -> arrow right */) {
      return this.nextRightPhoto();
    }
    if (e.keyCode === 37 /* 37 -> arrow right(left) */) {
      return this.nextLeftPhoto();
    }

    return 'Hello World, motherfuckers !!!!';
  };
  nextRightPhoto = () => {
    let { position } = this.state;
    const { gallery } = this.props;
    position++;
    const newPosition = (position === gallery.length) ? 0 : position;
    this.setState({ position: newPosition });
  };
  nextLeftPhoto = () => {
    let { position } = this.state;
    const { gallery } = this.props;
    position--;
    const newPosition = (position < 0) ? gallery.length - 1 : position;
    this.setState({ position: newPosition });
  };

  closeGallery = (e) => {
    if (e.target.getAttribute('class') === 'FullSizeGalleryBack' || e.target.getAttribute('class') === 'FullSizeGalleryPhotoContainer') {
      this.setState({ openGallery: false });
    }
  };

  render() {
    const { gallery } = this.props;
    const { position, openGallery } = this.state;
    return (
      <div>
        {
          openGallery
            ?
              <div
                className="FullSizeGalleryBack"
                onClick={this.closeGallery}
              >
                <input style={{ display: 'none', height: 0, width: 0 }} onKeyUp={this.onKeyUp} />
                <div className="FullSizeGalleryPhotoContainer">
                  <img className="photoItem" src={gallery[position]} alt="" />
                  <div className="rightArrowCont" onClick={this.nextRightPhoto}><img src={rightArrow} alt="" onClick={this.moveLeft} /></div>
                  <div className="leftArrowCont" onClick={this.nextLeftPhoto}><img src={leftArrow} alt="" onClick={this.moveRight} /></div>
                </div>
              </div>
            :
            null
        }
      </div>
    );
  }
}

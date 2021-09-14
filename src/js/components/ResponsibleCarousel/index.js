/* eslint-disable no-plusplus,import/prefer-default-export,react/no-array-index-key,react/forbid-prop-types,max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-easy-swipe';
import '../../../scss/cardCarousel.scss';
import rightArrow from '../../../images/arrows/Shape right.svg';
import leftArrow from '../../../images/arrows/Shape left.svg';

export class CardCarousel extends Component {
  static propTypes = {
    itemArr: PropTypes.array,
    singleCard: PropTypes.bool,
    displayDots: PropTypes.bool,
    displayArrows: PropTypes.bool,
    allowMouseEvents: PropTypes.bool,
  };
  static defaultProps = {
    itemArr: [],
    singleCard: true,
    displayDots: true,
    displayArrows: false,
    allowMouseEvents: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      movedDelta: null,
    };
  }
  onSwapMove = (movedDelta) => {
    this.setState(this.setState({ movedDelta }));
    if ((Math.abs(movedDelta.x) / 3) > Math.abs(movedDelta.y)) {
      return true;
    }
    // this.setState({ movedDelta: null });
    return false;
  };
  getBrakePoint = (arr) => {
    const a = this.props.singleCard ? 1 : 3;
    return (arr.length / a) + (arr.length % a === 0 ? 0 : 1);
  };
  testCarusel = (e) => {
    this.setState({ currentPosition: +e.currentTarget.getAttribute('id') });
  };
  moveLeft = () => {
    const { itemArr, singleCard } = this.props;
    const { movedDelta } = this.state;
    let { currentPosition } = this.state;
    const delta = singleCard ? 1 : 3;
    const bp = singleCard ? 1 : 3;
    if (movedDelta === null || ((Math.abs(movedDelta.x) / 3) > Math.abs(movedDelta.y))) {
      for (let i = 0; i < bp && (currentPosition < (itemArr.length - delta)); i++) {
        currentPosition++;
      }
      this.setState({
        currentPosition,
        movedDelta: null,
      });
    } else {
      this.setState({
        movedDelta: null,
      });
    }
  };
  moveRight = () => {
    const { singleCard } = this.props;
    const { movedDelta } = this.state;
    let { currentPosition } = this.state;
    const bp = singleCard ? 1 : 3;
    if (movedDelta === null || ((Math.abs(movedDelta.x) / 3) > Math.abs(movedDelta.y))) {
      for (let i = 0; i < bp && currentPosition !== 0; i++) {
        currentPosition--;
      }
      this.setState({
        currentPosition,
        movedDelta: null,
      });
    } else {
      this.setState({
        movedDelta: null,
      });
    }
  };
  prepareItems = items =>
    items.map((item, index) =>
      <div key={index} className={`${this.props.singleCard ? 'cardCont' : 'threeCards'}`}>{item}</div>);
  prepareFoterNavItems = (items) => {
    const resultArr = [...items].splice(0, this.getBrakePoint(items));

    return resultArr.map((item, index) => (<div
      key={index}
      onClick={this.testCarusel}
      id={index}
      className={`CarouselFoterItem ${this.state.currentPosition === index ? 'selectedItem' : ''}`}
    />));
  };
  prepareTransletion = () => {
    const { singleCard } = this.props;
    const { currentPosition, movedDelta } = this.state;
    const delta = singleCard ? 1 : 1 / 3;
    if (movedDelta === null || ((Math.abs(movedDelta.x) / 3) < Math.abs(movedDelta.y))) {
      return `translate(-${currentPosition * 100 * delta}%, 0px)`;
    }
    const a = movedDelta.x < 0 ? -1 : 1;
    return `translate(${-(currentPosition * 100 * delta) + (25 * a)}%, 0px)`;
  };
  render() {
    const {
      itemArr, displayDots, displayArrows, allowMouseEvents,
    } = this.props;
    const navItems = this.prepareFoterNavItems(itemArr);
    const transletion = this.prepareTransletion();
    const items = this.prepareItems(itemArr);
    return (
      <div className="mainCardCarousel" onClick={this.onCardClick}>
        <Swipe
          onSwipeLeft={this.moveLeft}
          onSwipeRight={this.moveRight}
          onSwipeMove={this.onSwapMove}
          allowMouseEvents={allowMouseEvents}
        >
          <div className="cardCarouselBody">
            <div className="innerBody" style={{ transform: transletion }}>
              {items}
            </div>
            { displayArrows && <div className="rightArrowCont" onClick={this.moveLeft}><img src={rightArrow} alt="" /></div> }
            { displayArrows && <div className="leftArrowCont" onClick={this.moveRight}><img src={leftArrow} alt="" /></div> }
          </div>
        </Swipe>
        {
          displayDots ?
            <div className="cardCarouselFooter">
              {navItems}
            </div>
            :
            null
        }
      </div>
    );
  }
}

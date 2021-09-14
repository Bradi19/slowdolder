/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Translate } from 'react-redux-i18n';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  CardFooter,
} from 'reactstrap';

@withRouter
export default class PositionCard extends Component {
  static propTypes = {
    style: PropTypes.shape({
      opacity: PropTypes.string,
      transform: PropTypes.string,
      transition: PropTypes.string,
      transitionProperty: PropTypes.string,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    itemProps: PropTypes.shape({
      title: PropTypes.string,
      longTitle: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
    }),
  };
  static defaultProps = {
    itemProps: {
      title: 'Frontend',
      longTitle: 'Frontend',
      description: 'We are looking for an experienced and responsible engineer',
      id: '',
    },
  };
  onCardClick = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/vacancies/${this.props.itemProps.id}`);
  };
  render() {
    const {
      title,
      longTitle,
      description,
    } = this.props.itemProps;
    return (
      <Card style={this.props.style} onClick={this.onCardClick}>
        <CardHeader>
          <div className="head">
            <p>
              <span className="hot" />
              {title}
            </p>
            <p>HOT</p>
          </div>
        </CardHeader>
        <CardBody>
          <CardTitle>{longTitle}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <a href="#"><Translate value="common.more" /></a>
        </CardFooter>
      </Card>
    );
  }
}

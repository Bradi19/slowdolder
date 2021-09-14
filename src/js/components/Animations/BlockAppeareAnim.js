/* eslint-disable import/prefer-default-export,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

function getDefaultStyle(duration, startTrans) {
  const style = {
    transition: `all ${duration}ms ease-in`,
    transitionProperty: 'opacity, transform',
    opacity: 0,
    transform: `translateX(${startTrans}%)`,
  };
  return style;
}

function getTransitionStyles(startOpacity, finishOpacity, startTrans, finishTrans) {
  const styles = {
    entering: {
      opacity: `${startOpacity}`,
      transform: `translateX(${startTrans}%)`,
    },
    entered: {
      opacity: `${finishOpacity}`,
      transform: `translateX(${finishTrans})`,
    },
    exiting: {
      opacity: `${startOpacity}`,
      transform: `translateX(${startTrans}%)`,
    },
    exited: {
      opacity: `${startOpacity}`,
      transform: `translateX(${startTrans}%)`,
    },
  };
  return styles;
}

export const BlockAppeareAnim = ({ ...props }) => {
  const {
    appeare,
    duration,
    stOpac,
    finOpac,
    stTrans,
    finTrans,
    component,
    itemProps,
  } = props;
  const Component = component;
  const defaultStyle = getDefaultStyle(800, stTrans);
  const transitionStyles = getTransitionStyles(stOpac, finOpac, stTrans, finTrans);
  return (
    <Transition
      in={appeare}
      mountOnEnter
      appear
      timeout={duration}
    >
      {state => (
        <Component
          style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
          itemProps={itemProps}
        />
            )}
    </Transition>
  );
};

BlockAppeareAnim.propTypes = {
  appeare: PropTypes.bool.isRequired,
  duration: PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number,
  }).isRequired,
  stOpac: PropTypes.number.isRequired,
  finOpac: PropTypes.number.isRequired,
  stTrans: PropTypes.number.isRequired,
  finTrans: PropTypes.number.isRequired,
  component: PropTypes.any.isRequired,
  itemProps: PropTypes.any.isRequired,
};

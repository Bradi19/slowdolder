/* eslint-disable no-fallthrough */
import {
  RESIZE_WINDOW,
  TABLET,
  MOBILE,
  DESKTOP,
} from '../constants';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case RESIZE_WINDOW: {
      const { innerWidth, innerHeight } = window;

      if (innerWidth >= 100 && innerWidth <= 575) {
        return {
          view: MOBILE,
          width: innerWidth,
          height: innerHeight,
        };
      }
      if (innerWidth >= 576 && innerWidth <= 1279) {
        return {
          view: TABLET,
          width: innerWidth,
          height: innerHeight,
        };
      }
      if (innerWidth >= 1280 && innerWidth <= 10000) {
        return {
          view: DESKTOP,
          width: innerWidth,
          height: innerHeight,
        };
      }
    }
    default: return { ...state };
  }
};

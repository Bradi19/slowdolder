/* eslint-disable import/prefer-default-export */
import { lensPath, set, view } from 'ramda';

export const stateLens = (path, value, state) =>
  set(lensPath([...path]), value, state);
export const viewValue = (path, state) => view(lensPath([...path]), state);

/* eslint-disable import/prefer-default-export,prefer-const */
export const truncString = (props) => {
  let { str, length, ending } = props;
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  return str;
};

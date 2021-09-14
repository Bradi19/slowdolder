import React from 'react';
import PropTypes from 'prop-types';
import Lang from './Lang';
import langs from '../../config/supportedLangs';


const ChooseLang = props => (
  <div className="chooseLang">
    {
      langs.map(item => {
        if (item !== props.activeLang) {
          return (
            <Lang
              key={item}
              lang={item}
              changeLang={props.changeLang}
              activeLang={props.activeLang}
            />);
        }
      })
    }
  </div>
);

ChooseLang.propTypes = {
  activeLang: PropTypes.string.isRequired,
  // changeLang: PropTypes.func.isRequired,
};

export default ChooseLang;

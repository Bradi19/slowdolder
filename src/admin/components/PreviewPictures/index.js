/* eslint-disable jsx-a11y/label-has-for,import/prefer-default-export,jsx-a11y/alt-text,class-methods-use-this,jsx-a11y/click-events-have-key-events,max-len,react/no-array-index-key,no-plusplus,react/prop-types,prefer-destructuring,object-shorthand,prefer-const,react/jsx-indent,react/jsx-boolean-value */
import React, { Component } from 'react';
import './previewPictures.scss';
// import Button from '../newButton';
import { API_URL } from '../../../constants/index';

export class PreviewImages extends Component {
    static defaultProps = {
      pictures: [],
    };

    constructor(props) {
      super(props);
      this.state = {
        pictures: this.props.pictures.map(item => ({ checked: false, src: item })),
      };
    }

    componentWillReceiveProps(next) {
      if (this.props.pictures !== next.pictures) {
        this.setState({
          pictures: next.pictures.map(item => ({ checked: false, src: item })),
        });
      }
    }

    oncheckUp = () => {
      const { pictures } = this.state;
      const checkedPic = pictures.filter(item => item.checked).map(item => item.src);
      this.props.onCheckUp(checkedPic);
    };

    checkPicture = (e) => {
      const pictures = [...this.state.pictures];
      const checkrdId = e.target.id;
      pictures[checkrdId].checked = !pictures[checkrdId].checked;
      this.setState({ pictures });
    };

    render() {
      const { pictures } = this.state;
      const preparePictures = pictures.map((item, index) =>
        (<div className="imgPreviewImageDivCont">
          <div key={index} className="imgPreviewImageDiv" style={{ backgroundImage: `url(${API_URL}${item.src})` }}>
            <input type="checkbox" className="inputCheckBox" id={index} onChange={this.checkPicture} checked={item.checked} />
            <label className={`lableChecBox ${item.checked ? 'checkedLable' : ''}`} htmlFor={index} />
          </div>
         </div>));

      return (
        <div>
          <div className="headerPrevieCont">
            {pictures.length > 0 && <p>Загруженные фото</p>}
            {pictures.filter(item => item.checked).length > 0
              ?

              <button className="deleteChoosenPhoto" onClick={this.oncheckUp}>Удалить выбранные фото</button>
              :
              null
            }
          </div>
          <div className="previewImageContent">
            {preparePictures}
          </div>
        </div>

      );
    }
}

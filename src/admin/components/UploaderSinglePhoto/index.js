/* eslint-disable jsx-a11y/label-has-for,import/prefer-default-export,jsx-a11y/alt-text,class-methods-use-this,jsx-a11y/click-events-have-key-events,max-len,react/no-array-index-key,no-plusplus,react/prop-types,prefer-destructuring,object-shorthand,prefer-const */
import React, { Component } from 'react';
import { CustomFileImput } from '../CustomFileImput/index';
import './uplouderSinglePhoto.scss';
import { API_URL } from '../../../constants/index';

export class UploaderSinglePhoto extends Component {
    static defaultProps = {
      pictureSrc: '',
      reset: false,
    };

    constructor(props) {
      super(props);
      let data = {
        file: null,
        imagePreviewUrl: '',
      };
      if (this.props.pictureSrc !== '') {
        data = {
          file: { name: '' },
          imagePreviewUrl: API_URL + this.props.pictureSrc,
        };
      }
      this.state = {
        data,
      };
    }

    componentWillReceiveProps(next) {
      if (this.props.reset !== next.reset) {
        this.setState({
          data: {
            file: null,
            imagePreviewUrl: '',
          },
        });
      }
    }

    onsubmit = () => {
      this.props.onSubmit(this.state.data.file);
    };

    handleImageChange = (e) => {
      const reader = new FileReader();
      const file = e[0];
      reader.onloadend = () => {
        this.setState({
          data: { file, imagePreviewUrl: reader.result },
        });
        this.onsubmit();
      };

      reader.readAsDataURL(file);
    };

    deletePicture = () => {
      this.setState({
        data: { file: null, imagePreviewUrl: '' },
      }, this.onsubmit);
    };

  // <div>{data.file.name }</div>

    render() {
      const { data } = this.state;
      const { children } = this.props;
      let imagesPreview = children;
      let InputLableStyle = {};
      if (data.imagePreviewUrl !== '') {
        imagesPreview =
          (
            <div className="imgSingleDiv" style={{ backgroundImage: `url(${data.imagePreviewUrl})` }}>
              {children}
              <div onClick={this.deletePicture}><span>&times;</span></div>
            </div>);
        InputLableStyle = { display: 'none' };
      }

      return (
        <div className="previewComponent">
          <CustomFileImput
            onLoadFile={this.handleImageChange}
            inputLableStyle={InputLableStyle}
          >
            {imagesPreview}
          </CustomFileImput>
        </div>
      );
    }
}

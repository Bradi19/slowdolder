/* eslint-disable jsx-a11y/label-has-for,import/prefer-default-export,jsx-a11y/alt-text,class-methods-use-this,jsx-a11y/click-events-have-key-events,max-len,react/no-array-index-key,no-plusplus,react/prop-types,prefer-destructuring,object-shorthand,prefer-const,array-callback-return */
import React, { Component } from 'react';
import DragSortableList from 'react-drag-sortable';
import { CustomFileImput } from '../CustomFileImput/index';
import './uplouder.scss';

export class Uploader extends Component {
  static defaultProps = {
    maxSize: 10,
    reset: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillReceiveProps(next) {
    if (this.props.reset !== next.reset) {
      this.setState({
        data: [],
      }, this.onsubmit);
    }
  }

  onSort = (sortedList) => {
    const arrOfNewState = sortedList.map(item => this.state.data[item.content.props.id]);
    this.setState({ data: arrOfNewState });
    this.onsubmit(arrOfNewState);
  };

  onsubmit = () => {
    this.props.onSubmit(this.state.data.map(item => item.file));
  };

  handleImageChange = e => Promise.all(Array.from(e).map((file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onloadend = () =>
        resolve({
          file,
          imagePreviewUrl: reader.result,
        });
    });
  }))
    .then((items) => {
      this.setState({
        data: [
          ...this.state.data,
          ...items,
        ],
      }, this.onsubmit);
    });

  deletePicture(e) {
    const positionInArray = e.target.parentNode.getAttribute('id');
    let dataCoppy = [...this.state.data];
    dataCoppy.splice(positionInArray, 1);
    this.setState({ data: dataCoppy }, this.onsubmit);
  }


  render() {
    const { data } = this.state;
    let UploudetGalery = null;
    let InputLapleStyle = {};
    if (data.length > 0) {
      const imagesPreview = data.map((item, index) =>
        (
          <div id={index} key={index} className="imgDiv" style={{ backgroundImage: `url(${item.imagePreviewUrl})` }}>
            <div className="imageHeader">
              <div>{item.file.name }</div>
              <div id={index} onClick={e => this.deletePicture(e)}><span>&times;</span></div>
            </div>
          </div>));
      const listOfItems = [];
      for (let j = 0; j < imagesPreview.length; j++) {
        const newItem = { content: imagesPreview[j] };
        listOfItems.push(newItem);
      }
      UploudetGalery = (
        <DragSortableList
          items={listOfItems}
          type="grid"
          onSort={this.onSort}
        />);
      InputLapleStyle = { display: 'none' };
    }

    return (
      <div className="previewComponent">
        <CustomFileImput
          inputLableClass="inputClassForUploader2"
          onLoadFile={this.handleImageChange}
          inputLableStyle={InputLapleStyle}
        >
          {UploudetGalery}
        </CustomFileImput>
      </div>
    );
  }
}

/* eslint-disable react/prefer-stateless-function,import/prefer-default-export,no-unused-vars,react/jsx-boolean-value,max-len,jsx-a11y/label-has-for,no-param-reassign,no-useless-constructor,react/prop-types */
import React, { Component } from 'react';
import * as _ from 'lodash';
import './customFileImput.scss';


export class CustomFileImput extends Component {
    static defaultProps = {
      inputLableClass: 'inputFileLabel',
      inputLableStyle: {},
      inputLableContent: null,
      enable: true,
    };

    constructor(props) {
      super(props);
      this.state = {
        fileInside: false,
        renderId: _.uniqueId('file_'),
      };
    }

    ondrop = (data) => {
      const { enable, onLoadFile } = this.props;
      if (enable) {
        onLoadFile(data);
      }
    };

    handleDrop = (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.setState({ fileInside: false });
      this.ondrop(e.dataTransfer.files);
    };

    handleDropOver = (e) => {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      this.setState({ fileInside: true });
    };

    handleDragLeave = (data) => {
      this.setState({ fileInside: false });
    };

    prepareFile = (e) => {
      this.ondrop(e.target.files);
    };

    render() {
      const {
        inputLableClass, inputLableStyle, inputLableContent, children,
      } = this.props;
      const { fileInside, renderId } = this.state;
      return (
        <div
          className={`my-uploader ${fileInside ? 'onDragOver' : ''}`}
          onDrop={this.handleDrop}
          onDragOver={this.handleDropOver}
          onDragLeave={this.handleDragLeave}
        >
          <input
            type="file"
            id={renderId}
            multiple
            onChange={this.prepareFile}
            className="customInputFile"
          />
          <label
            htmlFor={renderId}
            className={inputLableClass}
            style={inputLableStyle}
          >
            {inputLableContent}
          </label>
          {children}
        </div>
      );
    }
}

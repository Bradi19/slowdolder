import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default class TextField extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    label: '',
    type: 'text',
    name: '',
    id: '',
    placeholder: '',
    defaultValue: '',
    onChange: arg => arg,
  };
  constructor(props) {
    super(props);

    this.state = { value: props.defaultValue };
  }
  onChange = (e) => {
    this.setState({
      value: e.target.bodyRU,
    });

    return this.props.onChange(e);
  };
  render() {
    const {
      props: {
        label,
        type,
        name,
        id,
        placeholder,
      },
      state: { value },
      onChange,
    } = this;

    return (
      <FormGroup style={{ width: '100%' }}>
        { label && <Label for={name}>{label}</Label> }
        <Input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </FormGroup>
    );
  }
}

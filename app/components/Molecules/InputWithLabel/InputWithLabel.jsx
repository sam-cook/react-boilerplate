import React, { Component, PropTypes } from 'react'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'

class InputWithLabel extends Component {
  render() {
    let inputComponent;
    if(this.props.type === 'text') {
      inputComponent = <Input handleInputChange={this.props.handleInputChange} placeHolder={this.props.placeHolder} fieldName={this.props.fieldName} />;
    } else {
      inputComponent = <Select handleInputChange={this.props.handleInputChange} options={this.props.options} fieldName={this.props.fieldName} />;
    }
    return (
      <div>
        <label>{this.props.label}</label>
        {inputComponent}
      </div>
    )
  }
}

export default InputWithLabel
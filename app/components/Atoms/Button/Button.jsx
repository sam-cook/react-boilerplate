import React, { Component, PropTypes } from 'react'

class Button extends Component {
  
  static propTypes = {
    handleButtonClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <button type={this.props.type} onClick={this.props.handleButtonClick}>{this.props.buttonText}</button>
      </div>
    )
  }

}

export default Button

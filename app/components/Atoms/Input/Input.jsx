import React, { Component } from 'react'

class Input extends Component {
  
  constructor(props) {
    super()

    this.state = {
      inputText: null
    }
  }

  updateInputText(e) {
    this.setState({
      inputText: e.target.value
    })
    this.props.handleInputChange(e);
  }

  render() {
    return (
      <div>
        <input name={this.props.fieldName} placeholder={this.props.placeHolder} onChange={() => this.updateInputText} />
      </div>
    )
  }

}

export default Input

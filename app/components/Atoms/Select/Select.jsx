import React, { Component } from 'react'
 
class Select extends Component {
  constructor(props) {
    super()

    this.state = {
      selectedOption: null
    }
  }

  handleSelection(e) {
    this.setState({
      selectedOption: e.target.value
    })
    this.props.handleInputChange(e)
  }

  render() {
    return (
      <div>
        <select name={this.props.fieldName} onChange={() => this.handleSelection}>
          {this.props.options.map(function(option) {
            return ( <option key={option.id} value={option.name}>{option.name}</option> )
          })}
        </select>
      </div>
    )
  }
}

export default Select

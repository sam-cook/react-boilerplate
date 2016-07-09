'use strict'
import React, { Component } from 'react'
import InputWithLabel from '../Molecules/InputWithLabel'
import Button from '../Atoms/Button'
import { browserHistory, Link } from 'react-router'

class SignUpForm extends Component {
  
  constructor() {
    super()

    this.state = {
      festivalName: null,
      firstName: null,
      lastName: null,
      interests: []
    }
  }


  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state, 'form sumbission info');
    // Lets go to the next page if everything is okay! How do we do this with react-router tho?
  }


  handleInputChange(e) {
    // This bubbles down to the input component so we can deal with it up here.
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    let options = [{"id":1, "name": "Test"}, {"id":2, "name": "Test 2"}];
    
    return (
      <form onSubmit={() => this.handleFormSubmit}>
        <InputWithLabel type="select" handleInputChange={this.handleInputChange} options={options} label="Festival:" fieldName="festivalName" />
        <InputWithLabel type="text" handleInputChange={this.handleInputChange} placeHolder="First name" label="First Name:" fieldName="firstName" />
        <InputWithLabel type="text" handleInputChange={this.handleInputChange} placeHolder="Last name" label="Last Name:" fieldName="lastName" />
        <InputWithLabel type="text" handleInputChange={this.handleInputChange} placeHolder="Interested in" label="Festival Interests:" fieldName="interests" />
        <Button type="submit" buttonText="Submit Form" />
        <Link to="/login">Or Login</Link>
      </form>
    )
  }
}

export default SignUpForm;

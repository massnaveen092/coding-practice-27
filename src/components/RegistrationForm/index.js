// Write your JS code here
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitted: false,
  }

  validateFirstname = () => {
    const {firstname} = this.state
    return firstname !== ''
  }

  onBlurFirstName = () => {
    const isvalidFirst = this.validateFirstname()

    this.setState({
      firstNameError: !isvalidFirst,
    })
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstname: value,
    })
  }

  renderFirstNameField = () => {
    const {firstNameError, firstname} = this.state

    return (
      <div>
        <label htmlFor="FIRST NAME">FIRST NAME</label>
        <input
          type="text"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          value={firstname}
          id="firstname"
          placeholder="First Name"
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurLastName = () => {
    const isvalidlast = this.validateLastName()

    this.setState({
      lastNameError: !isvalidlast,
    })
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastName: value,
    })
  }

  renderLastNameField = () => {
    const {lastName, lastNameError} = this.state

    return (
      <div>
        <label htmlFor="lastName">LAST NAME</label>
        <input
          type="text"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          id="lastName"
          placeholder="Last Name"
          value={lastName}
        />
      </div>
    )
  }

  onSubmitFrom = event => {
    event.preventDefault()
    const isvalidFirst = this.validateFirstname()
    const isvalidlast = this.validateLastName()

    if (isvalidFirst && isvalidlast) {
      this.setState({
        isSubmitted: true,
      })
    } else {
      this.setState({
        firstNameError: !isvalidFirst,
        lastNameError: !isvalidlast,
        isSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {firstNameError, lastNameError} = this.state

    return (
      <form onSubmit={this.onSubmitFrom}>
        {this.renderFirstNameField()}
        {firstNameError && <p>Required</p>}
        {this.renderLastNameField()}
        {lastNameError && <p>Required</p>}
        <button type="submit">Submit</button>
      </form>
    )
  }

  onClickOnsubmitAnotherresponse = () => {
    this.setState(prevstate => ({
      isSubmitted: !prevstate.isSubmitted,
      firstname: '',
      lastName: '',
    }))
  }

  rendersubmissionForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Sucessfully</p>
      <button type="button" onClick={this.onClickOnsubmitAnotherresponse}>
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmitted} = this.state

    return (
      <div>
        <h1>Registration</h1>
        <div>
          {isSubmitted
            ? this.rendersubmissionForm()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

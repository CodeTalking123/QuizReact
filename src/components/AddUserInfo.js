import React, { Component } from 'react'

export class AddUserInfo extends Component {
  state = {
    name: 'Eric',
    address: 'HoidanIT',
    age: 26
  };
  handleClick = (event) => {
    console.log("Click Me", event);
    this.setState({
      name: 'Andy'
    })
  }
  handleChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleChangeAge = (event) => {
    this.setState({
      age: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.age) {
      alert('Name or Age Must Not Be Empty')
      return;
    }
    const newUser = { id: Math.floor((Math.random() * 100) + 1), name: this.state.name, age: this.state.age };
    this.props.onHandleAddNewUser(newUser);
  }
  render() {
    return (
      <>
        <div>My name is {this.state.name} and I'm {this.state.age}</div>
        <button onClick={this.handleClick}>Click Me</button>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Your Name:</label>
          <input value={this.state.name} type='text' onChange={(event) => this.handleChangeInput(event)} />
          <label>Your Age:</label>
          <input value={this.state.age} type='text' onChange={(event) => this.handleChangeAge(event)} />
          <button>Submit</button>
        </form>
      </>
    )
  }
}

export default AddUserInfo
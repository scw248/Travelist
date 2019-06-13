import React, { Component } from 'react';

class DestinationInput extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addDestination(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <label>Add Destination </label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default DestinationInput
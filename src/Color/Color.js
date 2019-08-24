import React, { Component } from 'react'

export class Color extends Component {
  constructor() {
    super()
    this.state = {
      color: '',
      isLocked: false
    }
  }

  componentDidMount = () => {
    if (!this.state.isLocked) {
      this.setState({ color: this.props.hexcode })
    }
  }

  static getDerivedStateFromProps(props, state) {
    // Check to see if the component isLocked
    if (!state.isLocked) {
      // if isLocked is false set the states color to the hexcode 
      // passed in by props
      return {
        color: props.hexcode,
      };
    }
    // Return null if the state hasn't changed
    return null;
  }

  render() {
    return (
      <div 
        className='single-color'
        style= {
          {backgroundColor: `#${this.state.color}`}
        }
      >
        <button
        onClick={() => this.setState({ isLocked: !this.state.isLocked })}
        >
          Lock Color
        </button>
      <p>Color {this.props.index + 1}: </p>
      <p>#{this.state.color.toUpperCase()}</p>
      </div>
    ) 
  }
}

export default Color

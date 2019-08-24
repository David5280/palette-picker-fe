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
  render() {
    return (
      <div 
        className='single-color'
        style= {
          {backgroundColor: `#${this.props.hexcode}`}
        }
      >
        <button
        onClick={() => this.setState({ isLocked: !this.state.isLocked })}
        >
          Lock Color
        </button>
      <p>Color {this.props.index + 1}: </p>
      <p>{this.props.hexcode.toUpperCase()}</p>
      </div>
    ) 
  }
}

export default Color

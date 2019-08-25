import React, { Component } from 'react'

export class Color extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     color: '',
  //     isLocked:false,
  //   }
  // }

  componentDidMount = () => {
    // if (!this.state.isLocked) {
    //   this.setState({ color: this.props.hexcode })
    //   this.props.setColors(this.state.color, (this.props.index+1), this.state.isLocked)
    // }
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
        onClick={() => this.props.handleLock(this.props.hexcode) }
        >
          Lock Color
        </button>
      <p>Color {this.props.index + 1}: </p>
      <p>#{this.props.hexcode.toUpperCase()}</p>
      </div>
    ) 
  }
}

export default Color

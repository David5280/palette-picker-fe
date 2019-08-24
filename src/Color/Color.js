import React, { Component } from 'react'

export class Color extends Component {
  constructor() {
    super()
    this.state = {}
  }
  mapColors = () => {
    return this.props.colors.map((color, i) => {
      let divStyle ={
        backgroundColor: `#${color}`
      }
      return (
        <div 
          style={divStyle} 
          className='single-color'
          key={i}
        >
          <button
          onClick={() => this.lockColor(i)}
          >
            Lock Color
          </button>
        <p>Color {i + 1}: </p>
        <p>{color.toUpperCase()}</p>
        </div>
      ) 
    })
  }
  render() {
    return (
      <div>
        {this.mapColors()}
      </div>
    )
  }
}

export default Color

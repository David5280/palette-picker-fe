import React, { Component } from 'react'
import ColorScheme from 'color-scheme'
import Palette from '../Palette/Palette';

export class ColorPreview extends Component {
  state ={
    edited: false,
    color: ''
  }
  
  randomColor = () => {
    const randomHue = (Math.random() * (360 - 1) + 1)
    const colorScheme = new ColorScheme()
    colorScheme.from_hue(randomHue)
    const color = `#${colorScheme.colors()[0]}`
    this.setState({ edited: true, color: color })
  }

  render() {
    const { color } = this.props;
    return (
      <div 
        onClick={() => this.randomColor()}
        className='single-color-preview' 
        style={{ backgroundColor: `${this.state.color || color}`, width:'20%', marginBottom:'10px', height:50, verticalAlign:'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '50%' }}>
        {color}
        </p>
      </div>
    )
  }
}

export default ColorPreview

import React, { Component } from 'react'
import Palette from '../Palette/Palette';

export class ColorPreview extends Component {
  render() {
    const { color } = this.props
    return (
      <div 
        className='single-color-preview' 
        style={{ backgroundColor: `${color}`, width:'20%', marginBottom:'10px', height:50, verticalAlign:'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '50%' }}>
        {color}
        </p>
      </div>
    )
  }
}

export default ColorPreview

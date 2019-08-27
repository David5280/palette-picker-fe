import React, { Component } from 'react'
import ColorScheme from 'color-scheme'
import Palette from '../Palette/Palette';
import { serverCall } from '../fetchCalls/fetchCalls';

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

  patchColor = async (paletteID, dbKey) => {
    console.log(paletteID, dbKey)
    const patchRes = await serverCall(`palettes/${paletteID}`, "PATCH", {[dbKey]:this.state.color})
    // console.log(await patchRes)
  }

  render() {
    const { color, paletteID, dbKey } = this.props;
    return (
      <div 
      className='single-color-preview' 
      style={{ backgroundColor: `${this.state.color || color}`, width:'20%', marginBottom:'10px', height:50, verticalAlign:'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        <button
        onClick={() => this.randomColor()}
        >
          Randomize Color
        </button>
      
        <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '50%' }}>
        {this.state.color || color}
        {this.state.edited && <button
        onClick={() => this.patchColor(paletteID, dbKey)} 
        >Save to Palette!</button>}
        </p>
      </div>
    )
  }
}

export default ColorPreview

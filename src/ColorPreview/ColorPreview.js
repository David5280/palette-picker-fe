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

  patchColor = (paletteID, dbKey) => {
    this.props.patchProject(`palettes/${paletteID}`, {[dbKey]:this.state.color})
    this.setState({ edited: false })
  }

  render() {
    const { color, paletteID, dbKey } = this.props;
    return (
      <div 
      className='single-color-preview' 
      style={{ backgroundColor: `${this.state.color || color}`, width:'20%', marginBottom:'10px', height:100, verticalAlign:'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}
      >
        <button
        style={{borderRadius:12}}
        onClick={() => this.randomColor()}
        >
          Randomize Color
        </button>
      
        <p 
        style={{width: '50%', color:'white'}}>
        {this.state.color || color}
        </p>
        {this.state.edited && <button
        onClick={() => this.patchColor(paletteID, dbKey)} 
        >Save to Palette!</button>}
      </div>
    )
  }
}

export default ColorPreview

import React, { Component } from 'react'
import ColorScheme from 'color-scheme'
import Palette from '../Palette/Palette';
import { serverCall } from '../fetchCalls/fetchCalls';
import randomizeIcon from '../images/randomize.png';
import saveIcon from '../images/save.png';


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
      <section 
      className='single-color-preview' 
      style={{ backgroundColor: `${this.state.color || color}`}}
      >
        <div className='color-controls'>
          <img
          src={randomizeIcon}
          alt='randomize-icon'
          className='randomize-icon'
          onClick={() => this.randomColor()}
          />
          <p>
          {this.state.color.toUpperCase() || color.toUpperCase()}
          </p>
          {this.state.edited && <img
          src={saveIcon}
          alt='save-icon'
          className='save-icon'
          onClick={() => this.patchColor(paletteID, dbKey)} 
          />}
        </div>
      </section>
    )
  }
}

export default ColorPreview

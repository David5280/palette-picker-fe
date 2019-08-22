import React, { Component } from 'react';
import ColorScheme from 'color-scheme';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';

class Palette extends Component {
  constructor() {
    super() 
    this.state = {
      colorScheme:'triade',
      colorVariation:'soft',
      swap:true
    }
  }

  componentDidUpdate() {
    this.makeRandomColors()
  }
  
  makeRandomColors = () => {
    const randomHue = (Math.random() * (100 - 1) + 1)
    const scheme = new ColorScheme();
    scheme.from_hue(randomHue)
    .scheme(this.state.colorScheme)
    .variation(this.state.colorVariation)
  let colors = scheme.colors();

  return colors.map((color, i)=> {
    let divStyle ={
      backgroundColor: `#${color}`
    }
    if(i < 5) {
      return (
        <div style={divStyle} className=''>
          <p>Color {i + 1}: </p>
          <p>#{color.toUpperCase()}</p>
        </div>
      ) 
    }
  })
  }

  updateState = () => {
    this.setState({swap: false})
  }

  handleChange =(e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    return (
      <section className='palettes'>
        <section className='palette-container'>
          {this.makeRandomColors()}
        </section>
        <section className='customize-generator'>
          <select 
            className='new-palette-input' 
            name="colorScheme" 
            onChange={(e) => this.handleChange(e)}
          >
            <option value="triade">Triade</option>
            <option value="contrast">Contrast</option>
            <option value="tetrade">Tetrade</option>
          </select>
          <select 
            className='new-palette-input' 
            name="colorVariation" 
            onChange={(e)=> this.handleChange(e)}
          >
            <option value="default">Default</option>
            <option value="pastel">Pastel</option>
            <option value="soft">Soft</option>
            <option value="light">Light</option>
            <option value="hard">Hard</option>
            <option value="pale">Pale</option>
          </select>
        </section>
        <section className='palette-container-controls'>
          <button className='generate-btn' onClick={() => this.updateState()}>Generate new Palette!</button>
          <NewPaletteForm />
        </section>
      </section>
    )
  }
}

export default Palette;
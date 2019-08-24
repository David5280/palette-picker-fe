import React, { Component } from 'react';
import ColorScheme from 'color-scheme';
import Color from '../Color/Color';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';

class Palette extends Component {
  constructor() {
    super() 
    this.state = {
      colorScheme:'triade',
      colorVariation:'soft',
    }
  }

  componentDidMount() {

  };


  handleChange =(e) => {
    this.setState({[e.target.name]:e.target.value})
  };

  makeRandomColors = (max) => {
    const randomHue = (Math.random() * (360 - 1) + 1)
    const scheme = new ColorScheme();
    scheme.from_hue(randomHue)
      .scheme(this.state.colorScheme) 
      .variation(this.state.colorVariation)
      let colors = scheme.colors();
      let firstFiveColors = colors.slice(0,5)
    return firstFiveColors
  }
  render() {
    const mapColors = {
      this.makeRandomColors().map((color, i) => {
        return (
          <Color hexcode={color} index={i}/>
        ) 
      })
    }
    return (
      <section className='palettes'>
        <section className='palette-container'>
          <div className='palette-border-div'>
            {this.mapColors}
          </div>
        </section>
        <section className='customize-generator'>
          <article>
            <h2>Scheme...</h2>
            <select 
              className='customize-palette-input' 
              name="colorScheme" 
              onChange={(e) => this.handleChange(e)}
            >
              <option value="triade">Triade</option>
              <option value="contrast">Contrast</option>
              <option value="tetrade">Tetrade</option>
            </select>
          </article>
          <article>
            <h2>Variation...</h2>
            <select 
              className='customize-palette-input'
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
          </article>
        </section>
        <section className='palette-container-controls'>
          <button className='generate-btn' onClick={() => this.mapColors()}>Generate new Palette!</button>
          <NewPaletteForm />
        </section>
      </section>
    )
  }
}

export default Palette;
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
      colors:[],
      isLocked_1:false,
      isLocked_2:false,
      isLocked_3: false,
      isLocked_4: false,
      isLocked_5: false,
    }
  }

  componentDidMount() {
    this.makeRandomColors()
  }

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
      this.setState({colors:firstFiveColors})
      firstFiveColors.map((randomColor, i)=> {
        let stateNum = `color_${i+1}`
        let lockedNum = `isLocked_${i+1}`
        if(!this.state[lockedNum]) {
          this.setState({[stateNum]:randomColor})
        }
      })
    return firstFiveColors
  }

  mapColors = () => {
    return this.state.colors.map((color, i) => {
      return <Color hexcode={color} index={i} setColors={this.setColors}/>
    })
  }

  setColors = (color, index, locked) => {
    let lockedIndex = `isLocked_${index}`
    console.log(color, index, locked)
    this.setState({['color_'+index]:color, [lockedIndex]: this.state[lockedIndex]})
    console.log(color, index, locked)
  }

  render() {
    return (
      <section className='palettes'>
        <section className='palette-container'>
          <div className='palette-border-div'>
            {this.mapColors()}
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
          <button className='generate-btn' onClick={() => this.makeRandomColors()}>Generate new Palette!</button>
          <NewPaletteForm />
        </section>
      </section>
    )
  }
}

export default Palette;
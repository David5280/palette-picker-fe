import React, { Component } from 'react';
import ColorScheme from 'color-scheme';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';

class Palette extends Component {
  constructor() {
    super() 
    this.state = {
      colorScheme:'triade',
      colorVariation:'soft',
      update:false,
      colors:[
        {
        color: 'fff',
        locked: false
        },
        {
        color: '000',
        locked: false
        },
        {
        color: 'fff',
        locked: false
        },
        {
        color: '000',
        locked: false
        },
        {
        color: 'fff',
        locked: false
        }
      ]
    }
  }

  componentDidMount() {
    let random = this.makeRandomColors()
      this.setState({colors:random.map((genCol, i) => {
        if(!this.state.colors[i].locked) {
          return {color:genCol}
        }
      })
    })
  };

  // componentDidUpdate() {
  //   let random = this.makeRandomColors()
  //   this.setState({colors:random.map((genCol, i) => {
  //     if(!this.state.colors[i].locked) {
  //       return {color:genCol}
  //     }
  //   })
  // })
  // }

  fakeState =() => {
    this.setState({update: !this.state.update})
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
    return firstFiveColors
  }

  lockColor = (i) => {
    console.log(i)
  //   this.setState({colors: this.state.colors.map((ele, inc) => {
  //     if(ele[inc]===i) {
  //       console.log(ele)
  //       return {...ele, locked:!ele.locked}
  //     }
  //   })
  // })
  }

  colorStuff = () => {
    return this.state.colors.map((color, i) => {
      let divStyle ={
        backgroundColor: `#${color.color}`
      }
      console.log(color.color)
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
        <p>{color.color.toUpperCase()}</p>
        </div>
      ) 
    })
  }

  render() {
    return (
      <section className='palettes'>
        <section className='palette-container'>
          <div className='palette-border-div'>
            {this.colorStuff()}
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
          <button className='generate-btn' onClick={() => this.fakeState()}>Generate new Palette!</button>
          <NewPaletteForm />
        </section>
      </section>
    )
  }
}

export default Palette;
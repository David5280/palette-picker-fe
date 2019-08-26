import React, { Component } from 'react'

export class NewPaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      paletteName: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  colorCodes = () => {

  }
  render() {
    return (
      <form className='new-palette-form'>
        <select className='new-palette-input'>
          <option>Palette 1</option>
          <option>Palette 2</option>
          <option>Palette 3</option>
        </select>
        <input 
          type='text' 
          placeholder='Palette Name...'
          className='new-palette-input palette-name-input'
          name='paletteName' 
          onChange={(e) => this.handleChange(e)}
        />
        <button className='new-palette-input'>Save Palette</button>
      </form>
    )
  }
}

export default NewPaletteForm;
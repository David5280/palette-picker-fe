import React, { Component } from 'react'

export class NewPaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      projectId: null,
      paletteName: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <form>
        <select>
          <option>Palette 1</option>
          <option>Palette 2</option>
          <option>Palette 3</option>
        </select>
        <input 
          type='text' 
          placeholder='Palette Name'
          name='paletteName' 
        />
        <button>Save Palette</button>
      </form>
    )
  }
}

export default NewPaletteForm;
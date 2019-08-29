import React, { Component } from 'react';
import { connect } from 'react-redux';
import { serverCall } from '../../fetchCalls/fetchCalls';
export class NewPaletteForm extends Component {
  constructor() {
    super()
    this.state = {
      paletteName: '',
      currentProjectId: 1
    }
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  allProjects = () => this.props.projects.map(project => {
    return <option key={project.id} value={project.id}>{project.name}</option>
  })

  savePalette = (e) => {
    e.preventDefault()
    serverCall('palettes', 'POST', {
      name: this.state.paletteName,
      project_id: this.state.currentProjectId,
      color_1: `#${this.props.colors[0]}`,
      color_2: `#${this.props.colors[1]}`,
      color_3: `#${this.props.colors[2]}`,
      color_4: `#${this.props.colors[3]}`,
      color_5: `#${this.props.colors[4]}`
    })
    this.setState({ paletteName: ''})
  }

  render() {
    return (
      <form className='new-palette-form'>
        <select 
          className='new-palette-input'
          name='currentProjectId'
          onChange={this.handleChange}
        >
          {this.allProjects()}
        </select>
        <input 
          type='text' 
          placeholder='Palette Name...'
          className='new-palette-input palette-name-input'
          name='paletteName' 
          value={this.state.paletteName}
          onChange={(e) => this.handleChange(e)}
        />
        <button 
        className='new-palette-input'
        onClick={(e)=> this.savePalette(e)}
        >
          Save Palette
        </button>
      </form>
    )
  }
}

export const mapStateToProps = state => ({
  colors: state.palettes.colors,
  projects: state.projects
});

export default connect(mapStateToProps)(NewPaletteForm);
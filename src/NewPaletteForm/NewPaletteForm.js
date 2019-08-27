import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return <option value={project.id}>{project.name}</option>
  })

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
          onChange={(e) => this.handleChange(e)}
        />
        <button className='new-palette-input'>Save Palette</button>
      </form>
    )
  }
}

export const mapStateToProps = state => ({
  colors: state.palettes.colors,
  projects: state.projects
});

export default connect(mapStateToProps)(NewPaletteForm);
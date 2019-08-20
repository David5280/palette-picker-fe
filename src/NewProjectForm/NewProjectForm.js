import React, { Component } from 'react'

export class NewProjectForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor='new-project-name'>Create a new project:</label>
        <div>
          <input 
            type='text' 
            placeholder='New Project Name...'
            id='new-project-name' 
          />
          <button>Save Project</button>
        </div>
      </form>
    )
  }
}

export default NewProjectForm;

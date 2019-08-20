import React, { Component } from 'react'

export class NewProjectForm extends Component {
  render() {
    return (
      <form>
        <label for='new-project-name'>Create a new project:</label>
        <div>
          <input type='text' placeholder='New Project Name...' />
          <button>Save Project</button>
        </div>
      </form>
    )
  }
}

export default NewProjectForm;

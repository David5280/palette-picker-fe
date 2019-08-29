import React, { Component } from 'react'
import { serverCall } from '../../fetchCalls/fetchCalls';
import { addProject } from '../../actions';
import { connect } from 'react-redux';

export class NewProjectForm extends Component {
  state = {
    projectName: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  createProject = async (e) => {
    e.preventDefault();
    const newProjectRes = await serverCall('projects', 'POST', { name: this.state.projectName })
    this.props.addProject({ name: await newProjectRes.name, id: await newProjectRes.id })
    this.props.submit()
  }

  render() {
    return (
      <form className='project-name-input'>
        <div>
          <input 
            type='text' 
            placeholder='New Project Name...'
            data-test="project-name-test-input"
            value={this.state.projectName}
            onChange={this.handleChange}
            name='projectName'
            className='buttons-left project-name-input'
          />
          <button onClick={(e) => this.createProject(e)} className='buttons-left project-name-input'>Save Project</button>
        </div>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addProject: project => dispatch(addProject(project))
});

export default connect(null, mapDispatchToProps)(NewProjectForm);

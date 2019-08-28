import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-browser-router';
import { deleteProject } from '../actions';
import { serverCall } from '../fetchCalls/fetchCalls';
import deleteIcon from '../images/stop.png';

export class Projects extends Component {
  constructor(){
    super()
    this.state ={

    }
  }

  handleDelete = async (id) => {
    const deleteRes = await serverCall(`projects/${id}`, 'DELETE')
    if (!await deleteRes.deleted) {
      throw new Error('Unable to delete at this time.')
    }
    this.props.deleteProject(parseInt(deleteRes.id))
  }

  allProjects = () => {
    return this.props.projects.map(project => {
      return (
        <article className='single-project'>
          <Link 
            to={`/projects/${project.name.split(' ').join('')+'_'+project.id}`}
          >
            <h2>{project.name}</h2>
          </Link>
            <img 
            src={deleteIcon}
            alt='delete-icon'
            className='delete-project-btn'
            onClick={() => this.handleDelete(project.id)} />
        </article>
      )
    })
  }
  render() {
    return (
      <section className='palettes'>
        {this.allProjects()}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  projects: state.projects
});

export const mapDispatchToProps = dispatch => ({
  deleteProject: projectID => dispatch(deleteProject(projectID))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

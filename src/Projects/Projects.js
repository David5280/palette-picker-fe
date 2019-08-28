import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-browser-router';
import SingleProject from '../SingleProject/SingleProject';

export class Projects extends Component {
  constructor(){
    super()
    this.state ={

    }
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

export default connect(mapStateToProps, null)(Projects);

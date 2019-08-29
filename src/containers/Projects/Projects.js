import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-browser-router';
import { deleteProject } from '../../actions';
import { serverCall } from '../../fetchCalls/fetchCalls';
import deleteIcon from '../../images/delete.png';
import backIcon from '../../images/back.png';


export const Projects = (props) => {

  const handleDelete = async (id) => {
    const deleteRes = await serverCall(`projects/${id}`, 'DELETE')
    if (!await deleteRes.deleted) {
      throw new Error('Unable to delete at this time.')
    }
    props.deleteProject(parseInt(deleteRes.id))
  }

  const allProjects = () => {
    return props.projects.map((project, i) => {
      return (
        <article className='single-project' key={i}>
          <Link 
            to={`/projects/${project.name.split(' ').join('')+'_'+project.id}`}
          >
            <h2>{project.name}</h2>
          </Link>
            <img 
            data-test={`delete-project-${i}`}
            src={deleteIcon}
            alt='delete-icon'
            className='delete-project-btn'
            onClick={() => handleDelete(project.id)} />
        </article>
      )
    })
  }
    return (
      <section className='palettes'>
        <div className='project-header'>
          <Link 
            to='/'
            className='back-home-icon'
          >
            <img 
              src={backIcon}
              alt='back-icon'
              className='back-image'
            />
          </Link>
          <h2 className='saved-projects-title'>Saved Projects</h2>
        </div>
        {allProjects()}
      </section>
    )
}

export const mapStateToProps = ({ projects }) => ({
  projects
});

export const mapDispatchToProps = dispatch => ({
  deleteProject: projectID => dispatch(deleteProject(projectID))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

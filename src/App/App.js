import React from 'react';
import Palette from '../Palette/Palette';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { serverCall } from '../fetchCalls/fetchCalls';
import { connect } from 'react-redux';
import { retrieveProjects, loadComplete, hasErrored } from '../actions';
import { Route, Link } from 'react-router-dom';
import Projects from '../Projects/Projects';
import SingleProject from '../SingleProject/SingleProject';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount = async () => {
    try {
      const projects = await serverCall('projects')
      await this.props.retrieveProjects(projects)
      await this.props.loadComplete()
    } catch (error) {
      this.props.loadComplete()
      this.props.hasErrored(error.message)
    }
  }

  setColors = (colors) => {
    this.setState({colors})
  }

  makeRoutes = () => {
    return this.props.projects.map(project => {
      return <Route exact path={`/projects/${project.name.split(' ').join('')}_${project.id}`} render={()=> <SingleProject id={project.id}/>} />
    })
  }

  render() {
    return (
      <div className="App">
            <header>
              <h1>Palette! Picker</h1>
            </header>
          <Route exact path='/' render={() => 
            (
            <main>
              <Palette />
              <ProjectContainer />
            </main>
            )
        } />
          <Route exact path='/projects' render={ () => <Projects /> } />
        {this.makeRoutes()}
          <footer>
            <p>Follow us on the interwebs, nerd.</p>
          </footer>  
      </div>
    );
  }
}

export const mapStateToProps = ({projects}) => ({
  projects
})

export const mapDispatchToProps = dispatch => ({
  retrieveProjects: projects => dispatch(retrieveProjects(projects)),
  loadComplete: () => dispatch(loadComplete()),
  hasErrored: error => dispatch(hasErrored(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

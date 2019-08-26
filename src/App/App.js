import React from 'react';
import Palette from '../Palette/Palette';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { serverCall } from '../fetchCalls/fetchCalls';
import { connect } from 'react-redux';
import { retrieveProjects, loadComplete, hasErrored } from '../actions';

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

  render() {
    return (
      <div className="App">
        <header>
          <h1>Palette! Picker</h1>
        </header>
        <main>
          <Palette />
          <ProjectContainer />
        </main>
        <footer>
          <p>Follow us on the interwebs, nerd.</p>
        </footer>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  retrieveProjects: projects => dispatch(retrieveProjects(projects)),
  loadComplete: () => dispatch(loadComplete()),
  hasErrored: error => dispatch(hasErrored(error))
});

export default connect(null, mapDispatchToProps)(App);

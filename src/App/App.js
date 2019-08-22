import React from 'react';
import Palette from '../Palette/Palette';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: {
        color_1: '',
        color_2: '',
        color_3: '',
        color_4: '',
        color_5: '',
      }
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
            <Palette setColors={this.setColors}/>
          <ProjectContainer />
        </main>
        <footer>
          <p>Follow us on the interwebs, nerd.</p>
        </footer>
      </div>
    );
  }
}

export default App;

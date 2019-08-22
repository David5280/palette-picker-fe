import React from 'react';
import Palette from '../Palette/Palette';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Palette! Picker</h1>
      </header>
      <main>
          <Palette />
        <ProjectContainer />
      </main>
    </div>
  );
}

export default App;

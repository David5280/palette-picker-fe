import React from 'react';
import Palette from '../Palette/Palette';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Palette! Picker</h1>
      </header>
      <main>
          <Palette />
          <NewPaletteForm />
        <NewProjectForm />
        <ProjectContainer />
      </main>
    </div>
  );
}

export default App;

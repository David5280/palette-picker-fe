import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Palette! Picker</h1>
      </header>
      <main>
        <section>
          <div>Palette 1</div>
          <div>Palette 2</div>
          <div>Palette 3</div>
          <div>Palette 4</div>
          <div>Palette 5</div>
          <button>Generate new Palette!</button>
          <form>
            <select>
              <option>Palette 1</option>
              <option>Palette 2</option>
              <option>Palette 3</option>
            </select>
            <input type='text' placeholder='Palette Name' />
            <button>Save Palette</button>
          </form>
        </section>
        <section>
          <form>
            <label for='new-project-name'>Create a new project:</label>
            <div>
              <input type='text' placeholder='New Project Name...' />
              <button>Save Project</button>
            </div>
          </form>
        </section>
        <section>
          <p>Project 1</p>
          <p>Project 2</p>
        </section>
      </main>
    </div>
  );
}

export default App;

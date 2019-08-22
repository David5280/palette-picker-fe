import React from 'react';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';

const Palette = () => {
  return (
    <section className='palettes'>
      <section className='palette-container'>
        <div>Palette 1</div>
        <div>Palette 2</div>
        <div>Palette 3</div>
        <div>Palette 4</div>
        <div>Palette 5</div>
      </section>
      <section className='palette-container-controls'>
        <button>Generate new Palette!</button>
        <NewPaletteForm />
      </section>
    </section>
  )
}

export default Palette;
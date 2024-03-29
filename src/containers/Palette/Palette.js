import React, { Component } from 'react';
import ColorScheme from 'color-scheme';
import Color from '../../components/Color/Color';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import { storePalette, changeScheme, changeVariation } from '../../actions'
import { connect } from 'react-redux';
import lockedIcon from '../../images/locked.svg';
import unlockedIcon from '../../images/unlocked.svg';

export class Palette extends Component {
  state = {
    lockedColors: [],
    showNewProjectForm: false
  };
  componentDidMount() {
    this.makeRandomColors()
  };

  makeRandomColors = () => {
    const { scheme, variation, storePalette } = this.props;
    const randomHue = (Math.random() * (360 - 1) + 1)
    const colorScheme = new ColorScheme();
    colorScheme.from_hue(randomHue)
    .scheme(scheme) 
    .variation(variation)
    let colors = colorScheme.colors();
    let firstFiveColors = colors.slice(0,5)
    const colorsToDisplay = this.state.lockedColors.length ?this.checkLockedColors(firstFiveColors) :
    firstFiveColors
    storePalette(colorsToDisplay)
  };

  checkLockedColors = (newPalette) => {
    return newPalette.map((newColor, i) => {
      const oldColor = this.props.colors[i]
      if(this.state.lockedColors.includes(oldColor)) {
        return oldColor
      } else {
        return newColor
      };
    });
  };

  handleChange = () => {
    this.setState({ showNewProjectForm: !this.state.showNewProjectForm })
  };
  
  handleLock = hexcode => {
    const currentLocked = this.state.lockedColors
    if (currentLocked.includes(hexcode)) {
      const filteredColors = this.state.lockedColors.filter(color => color !== hexcode)
      this.setState({ lockedColors: filteredColors })
    } else {
      this.setState({ lockedColors:  [...currentLocked, hexcode]})
    };
  };

  mapColors = () => {
    const { colors } = this.props;
    return colors.map((color, i) => {
      const icon = this.state.lockedColors.includes(color) ?
      lockedIcon :
      unlockedIcon
      return <Color 
        hexcode={color} 
        index={i}
        key={i}
        icon={icon}
        handleLock={this.handleLock} 
        />
    });
  };

  render() {
    return (
      <section className='palettes'>
        <section className='palette-container'>
          <div className='palette-border-div'>
            {this.props.colors && this.mapColors()}
          </div>
        </section>
        <section className='customize-generator'>
          <article>
            <h2>Scheme...</h2>
            <select 
              className='customize-palette-input' 
              name="colorScheme" 
              onChange={(e) => this.props.changeScheme(e.target.value)}
            >
              <option value="triade">Triade</option>
              <option value="contrast">Contrast</option>
              <option value="tetrade">Tetrade</option>
            </select>
          </article>
          <article>
            <h2>Variation...</h2>
            <select 
              className='customize-palette-input'
              name="colorVariation" 
              onChange={(e)=> this.props.changeVariation(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="pastel">Pastel</option>
              <option value="soft">Soft</option>
              <option value="light">Light</option>
              <option value="hard">Hard</option>
              <option value="pale">Pale</option>
            </select>
          </article>
        </section>
        <section className='palette-container-controls'>
          <button 
            className='buttons-left'
            data-test="make-random-color-btn" 
            id="make-random-color-btn"
            onClick={() => this.makeRandomColors()}
          >
            Generate new Palette!
          </button>
          {!this.state.showNewProjectForm && <button 
            className='buttons-left'
            data-test="add-project-btn"
            onClick={() => this.handleChange()}
          >
            Create New Project!
          </button>}
          {this.state.showNewProjectForm && <NewProjectForm submit={this.handleChange}/>}
          <NewPaletteForm />
        </section>
      </section>
    )
  }
}

export const mapStateToProps = state => {
  return {
    scheme: state.palettes.colorScheme,
    variation: state.palettes.colorVariation,
    colors: state.palettes.colors,
    projects: state.projects
  }
};

export const mapDispatchToProps = dispatch => ({
  storePalette: palette => dispatch(storePalette(palette)),
  changeScheme: scheme => dispatch(changeScheme(scheme)),
  changeVariation: variation => dispatch(changeVariation(variation)),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Palette);
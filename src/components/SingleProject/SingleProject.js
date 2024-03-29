import React, { Component } from 'react'
import ColorPreview from '../ColorPreview/ColorPreview';
import { serverCall } from '../../fetchCalls/fetchCalls';
import { Link } from 'react-browser-router';
import deleteIcon from '../../images/delete.png';
import backIcon from '../../images/back.png';

export class SingleProject extends Component {
  constructor() {
    super()
    this.state ={
      project_name:'',
      palettes: []
    }
  }

  async componentDidMount() {
    const projectInfo = await serverCall(`projects/${this.props.id}`)
    this.setState({project_id: projectInfo.id, palettes: projectInfo.palette, project_name: projectInfo.name})
  }

  patchProject = async (path, value) => {
    await serverCall(path, "PATCH", value)
  }

  deletePalette = async (paletteID) => {
    const deleteRes = await serverCall(`palettes/${paletteID}`, 'DELETE')
    if (await deleteRes.deleted) {
      const filteredPalettes = this.state.palettes.filter(palette => {
        return palette.id !== paletteID
      })
      this.setState({ palettes: filteredPalettes })
    }
  } 

  showPalettes = () => {
    return this.state.palettes.map((palette, i) => {
      let colors = [
        {
          paletteID: palette.id,
          paletteName: palette.name,
          color: palette.color_1,
          dbKey: 'color_1'
        },
        {
          paletteID: palette.id,
          paletteName: palette.name,
          color: palette.color_2,
          dbKey: 'color_2'
        },
        {
          paletteID: palette.id,
          paletteName: palette.name,
          color: palette.color_3,
          dbKey: 'color_3'
        },
        {
          paletteID: palette.id,
          paletteName: palette.name,
          color: palette.color_4,
          dbKey: 'color_4'
        },
        {
          paletteID: palette.id,
          paletteName: palette.name,
          color: palette.color_5,
          dbKey: 'color_5'
        }
      ]
      return (
        <>
        <div className='palette-header'>
          <h3 
            contentEditable={true}
            className='palette-name-editable' 
            onBlur={(e) => this.patchProject(`palettes/${palette.id}`, { name: e.target.innerText })}
          >
          {palette.name}
          </h3>
            <img 
              src={deleteIcon} 
              alt='delete-icon'
              data-test={`delete-btn-${i}`}
              className='delete-palette-button'
              onClick={()=> this.deletePalette(palette.id)} 
            />
        </div>
          <div className='color-preview'>
            {colors.map((colorObj, i) => {
              return <ColorPreview 
                color={colorObj.color} 
                paletteID={colorObj.paletteID} 
                dbKey={colorObj.dbKey}
                patchProject={this.patchProject}
                key={colorObj.name + i}
              />
            })
            }
          </div>
        </>
      )}
    )
  }

  render() {
    return (
      <div className='palettes'>
        <div className='project-header'>
        <Link to='/projects' className='back-icon'>
          <img src={backIcon} alt='back-icon' className='back-image' />
        </Link>
        <h2>
          {this.state.project_name}
        </h2>
        </div>
        {this.showPalettes()}
      </div>
    )
  }
}

export default SingleProject

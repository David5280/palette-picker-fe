import React, { Component } from 'react'
import ColorPreview from '../ColorPreview/ColorPreview';
import { serverCall } from '../fetchCalls/fetchCalls';
import { Link } from 'react-browser-router';

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
    console.log(path)
    await serverCall(path, "PATCH", value)
  }

  deletePalette = async (paletteID) => {
    const deleteRes = await serverCall(`palettes/${paletteID}`, 'DELETE')
    console.log(await deleteRes)
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
        <h2 
          contentEditable={true} 
          onBlur={(e) => this.patchProject(`palettes/${palette.id}`, { name: e.target.innerText })}
        >
        {palette.name}
        </h2>
          <div onClick={()=> this.deletePalette(palette.id)}>
            🗑
          </div>

          <div style={{display:'flex', flexWrap:'wrap', width:'100%'}}>
            {colors.map(colorObj => {
              return <ColorPreview 
                color={colorObj.color} 
                paletteID={colorObj.paletteID} 
                dbKey={colorObj.dbKey}
                patchProject={this.patchProject}
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
      <div className='palettes' style={{overflow: "auto"}}>
        <Link to='/projects'>
          <span role="img" aria-label="back buttton">🔙</span>
        </Link>
        <h2>
          {this.state.project_name}
        </h2>
        {this.showPalettes()}
      </div>
    )
  }
}

export default SingleProject

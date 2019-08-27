import React, { Component } from 'react'
import { serverCall } from '../fetchCalls/fetchCalls';

export class SingleProject extends Component {
  constructor() {
    super()
    this.state ={
      project_name:'',
      palettes: []
    }
  }

  async componentDidMount() {
    console.log('hit')
    const projectInfo = await serverCall(`projects/${this.props.id}`)
    console.log(await projectInfo)
    this.setState({project_id:projectInfo.id, palettes:projectInfo.palette, project_name:projectInfo.name})
    console.log(this.state)
  }

  showPalettes = () => {
    return this.state.palettes.map((color, i) => {
      console.log(color)
      return (
        <section>
          <p>Color Palette: {color.name}</p>
        <div style={{ backgroundColor:`${color.color_1}`}} >
          some
        </div>
        <div style={{ backgroundColor:`${color.color_2}`}} >
          thing
        </div>
        <div style={{ backgroundColor:`${color.color_3}`}} >
          here
        </div>
        <div style={{ backgroundColor:`${color.color_4}`}} >
          bitch
        </div>
        <div style={{ backgroundColor:`${color.color_5}`}} >
          jev
        </div>
        </section>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.project_name}
        </h2>
        {this.showPalettes()}
      </div>
    )
  }
}

export default SingleProject

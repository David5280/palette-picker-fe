import React, { Component } from 'react'
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
    console.log('hit')
    const projectInfo = await serverCall(`projects/${this.props.id}`)
    console.log(await projectInfo)
    this.setState({project_id:projectInfo.id, palettes:projectInfo.palette, project_name:projectInfo.name})
    console.log(this.state)
  }

  showPalettes = () => {
    return this.state.palettes.map((color, i) => {
      return (
        <section className='palette-container'>
          <p>Color Palette: {color.name}</p>
        <div className='single-color' style={{ 
          backgroundColor:`${color.color_1}`,
          height:"50px"
          }} >
        {color.color_1}
        </div>
        <div className='single-color' style={{ 
          backgroundColor:`${color.color_2}`,
          height:"50px"
          }} >
        {color.color_2}
        </div>
        <div className='single-color' style={{ 
          backgroundColor:`${color.color_3}`,
          height:"50px"
          }} >
        {color.color_3}
        </div>
        <div className='single-color' style={{ 
          backgroundColor:`${color.color_4}`,
          height:"50px"
          }} >
        {color.color_4}
        </div>
        <div className='single-color' style={{ 
          backgroundColor:`${color.color_5}`,
          height:"50px"
          }} >
        {color.color_5}
        </div>
        </section>
      )
    })
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

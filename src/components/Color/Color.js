import React from 'react'

export const Color = (props) => {
  const { hexcode, index, handleLock, icon } = props;
  return (
    <div 
      className='single-color'
      style= {
        {backgroundColor: `#${hexcode}`}
      }
    >
    <div style={{borderRadius: '100px', margin:'auto', backgroundColor:'#'+hexcode, width:'100px'}}>
      <p className='color-info'>Color {index + 1}: </p>
      <p>#{hexcode.toUpperCase()}</p>
    </div>
      <img 
        src={`${icon}`} 
        alt='locked-icon' 
        onClick={() => handleLock(hexcode)}
        className='locked-icon color-info' 
      />
    </div>
  ) 
}

export default Color

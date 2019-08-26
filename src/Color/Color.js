import React from 'react'

const Color = (props) => {
  const { hexcode, index, handleLock, icon } = props;
  return (
    <div 
      className='single-color'
      style= {
        {backgroundColor: `#${hexcode}`}
      }
    >
      <p className='color-info'>Color {index + 1}: </p>
      <p>#{hexcode.toUpperCase()}</p>
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

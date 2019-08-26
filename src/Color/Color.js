import React from 'react'

const Color = (props) => {
  const { hexcode, index, handleLock, icon } = props;
  console.log(icon)
  return (
    <div 
      className='single-color'
      style= {
        {backgroundColor: `#${hexcode}`}
      }
    >
      <p>Color {index + 1}: </p>
      <p>#{hexcode.toUpperCase()}</p>
      <img 
        src={`${icon}`} 
        alt='locked-icon' 
        onClick={() => handleLock(hexcode)}
        className='locked-icon' 
      />
    </div>
  ) 
}

export default Color

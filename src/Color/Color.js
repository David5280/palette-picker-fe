import React from 'react'

const Color = (props) => {
  const { hexcode, index, handleLock } = props;
  return (
    <div 
      className='single-color'
      style= {
        {backgroundColor: `#${hexcode}`}
      }
    >
      <button
      onClick={() => handleLock(hexcode) }
      >
        Lock Color
      </button>
    <p>Color {index + 1}: </p>
    <p>#{hexcode.toUpperCase()}</p>
    </div>
  ) 
}

export default Color

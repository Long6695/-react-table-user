import React from 'react'

const FormButton = ({ type, name }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <button
        style={{
          padding: '1rem 2rem',
          outline: 'none',
          border: 'none',
          borderRadius: '0.6rem',
          backgroundColor: '#4040a1',
          color: '#fff',
        }}
        type={type}
      >
        {name}
      </button>
    </div>
  )
}

export default FormButton

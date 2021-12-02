import React from 'react'

const FormPolicy = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
      }}
    >
      <label style={{ cursor: 'pointer' }}>
        <input style={{ marginRight: '1rem' }} type="checkbox" required />I
        agree to the{' '}
        <a style={{ textDecoration: 'none' }} href="#">
          {' '}
          Terms and Conditions
        </a>
      </label>
    </div>
  )
}

export default FormPolicy

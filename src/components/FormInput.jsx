import React from 'react'
import './formInput.css'
const FormInput = ({
  value,
  onChange,
  placeholder,
  name,
  label,
  type,
  errorMessage,
  pattern,
  onBlur,
  error,
}) => {
  return (
    <div className={`formInput ${name}`}>
      <label className="formInput__label">{label}</label>
      <input
        className="formInput__input"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        name={name}
        pattern={pattern}
      />
      <span>{error && errorMessage}</span>
    </div>
  )
}

export default FormInput

import React, { useState } from 'react'
import './formInput.css'
const FormInput = ({
  value,
  onChange,
  placeholder,
  name,
  label,
  type,
  errorMessage,
  required,
  pattern,
}) => {
  const [focus, setFocus] = useState(false)
  const handleFocus = (e) => {
    setFocus(true)
  }
  return (
    <div className="formInput">
      <label className="formInput__label">{label}</label>
      <input
        className="formInput__input"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focus.toString()}
        placeholder={placeholder}
        name={name}
        required={required}
        pattern={pattern}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput

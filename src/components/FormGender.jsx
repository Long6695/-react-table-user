import React, { useState } from 'react'
import './formGender.css'
const FormGender = ({ type, onChange }) => {
  const [isClick, setIsClick] = useState(true)
  return (
    <div className="formInput gender">
      <p className="formInput__label">Gender</p>
      <div className="formGender__input">
        <div>
          <input
            type={type}
            name="gender"
            value="male"
            onChange={onChange}
            checked={isClick ? true : false}
            onClick={() => setIsClick(!isClick)}
          />
          <label>Male</label>
        </div>
        <div>
          <input
            type={type}
            name="gender"
            value="female"
            onChange={onChange}
            checked={!isClick ? true : false}
            onClick={() => setIsClick(!isClick)}
          />
          <label>Female</label>
        </div>
      </div>
    </div>
  )
}

export default FormGender

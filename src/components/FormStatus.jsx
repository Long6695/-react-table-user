import React from 'react'
const FormStatus = ({ onChange }) => {
  return (
    <div className="formInput">
      <label className="formInput__label">Status</label>
      <select className="formInput__input" name="status" onChange={onChange}>
        <option value="Pending">Pending</option>
        <option value="Complete">Complete</option>
      </select>
    </div>
  )
}

export default FormStatus

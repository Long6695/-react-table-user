import React from 'react'

const FormBio = ({ onChange, value }) => {
  return (
    <div className="formInput bio">
      <label className="formInput__label">Bio</label>
      <textarea
        style={{ resize: 'none' }}
        className="formInput__input"
        name="bio"
        cols="30"
        rows="5"
        value={value}
        onChange={onChange}
        placeholder="Write something..."
      ></textarea>
    </div>
  )
}

export default FormBio

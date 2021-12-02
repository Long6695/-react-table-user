import React, { useState } from 'react'
import FormInput from './FormInput'
import { v4 as uuidv4 } from 'uuid'
import FormButton from './FormButton'
import FormGender from './FormGender'
import FormStatus from './FormStatus'
import FormBio from './FormBio'
import FormPolicy from './FormPolicy'
import FormModal from './FormModal'
import './formRegister.css'
const FormRegister = () => {
  const [valueInput, setValueInput] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    password2: '',
    bio: '',
    status: 'pending',
    gender: 'male',
  })
  const [isData, setIsData] = useState([])
  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Enter your name',
      errorMessage: 'Please enter your name',
      label: 'Name',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      errorMessage: 'It should be a valid email address',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      errorMessage: 'Password should be more than 6 characters',
      pattern: '^[A-Za-z0-9]{6,16}$',
      label: 'Password',
      required: true,
    },
    {
      id: 4,
      name: 'password2',
      type: 'password',
      placeholder: 'Confirm your password',
      errorMessage: `Password don't match`,
      label: 'Confirm password',
      pattern: valueInput.password,
      required: true,
    },
  ]

  const handleDelete = (id) => {
    setIsData((prev) => prev.filter((user) => user.id !== id))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setIsData((prev) => {
      return [valueInput, ...prev]
    })

    setValueInput({
      id: '',
      name: '',
      email: '',
      password: '',
      password2: '',
      bio: '',
      status: 'pending',
      gender: 'male',
    })
  }

  const onChange = (event) => {
    const { name, value } = event.target

    setValueInput((prev) => {
      return {
        ...prev,
        [name]: value,
        id: uuidv4(),
      }
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="heading">Register</h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          placeholder={input.placeholder}
          name={input.name}
          label={input.label}
          type={input.type}
          value={valueInput[input.name]}
          onChange={onChange}
          errorMessage={input.errorMessage}
          required={input.required}
          pattern={input.pattern}
        />
      ))}
      <FormGender type="radio" onChange={onChange} value={valueInput.gender} />
      <FormStatus value={valueInput.status} onChange={onChange} />
      <FormBio value={valueInput.bio} onChange={onChange} />
      <FormPolicy />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormButton type="submit" name="Register" />
        <FormModal data={isData} handleDelete={handleDelete} />
      </div>
    </form>
  )
}

export default FormRegister

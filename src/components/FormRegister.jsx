import React, { useState } from 'react'
import FormInput from './FormInput'
import { v4 as uuidv4 } from 'uuid'
import FormButton from './FormButton'
import FormGender from './FormGender'
import FormStatus from './FormStatus'
import FormBio from './FormBio'
import FormPolicy from './FormPolicy'
import Tables from './Tables'
import './formRegister.css'

const initialValue = {
  id: '',
  name: '',
  email: '',
  password: '',
  password2: '',
  bio: '',
  status: 'pending',
  gender: 'male',
}

const FormRegister = () => {
  const [valueInput, setValueInput] = useState(initialValue)
  const [error, setError] = useState({})
  const [users, setUsers] = useState([])

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Enter your name',
      errorMessage: 'Please enter your name',
      label: 'Name',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      errorMessage: 'It should be a valid email address',
      label: 'Email',
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      errorMessage: 'Password should be more than 6 characters',
      pattern: '^[A-Za-z0-9]{6,16}$',
      label: 'Password',
    },
    {
      id: 4,
      name: 'password2',
      type: 'password',
      placeholder: 'Confirm your password',
      errorMessage: `Password don't match`,
      label: 'Confirm password',
      pattern: valueInput.password,
    },
  ]

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  const updateDataAfterEdit = (newData) => {
    setUsers(newData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const inputs = document.querySelectorAll('input.formInput__input')

    inputs.forEach((input) => {
      if (input.value === '') {
        const inputName = input.name
        setError((prev) => {
          return {
            ...prev,
            [inputName]: true,
          }
        })
      }
    })
    const errors = Object.keys(valueInput).filter(
      (element) => !valueInput[element]
    )

    if (errors.length > 0) return

    setUsers((prev) => {
      return [valueInput, ...prev]
    })
    setValueInput(initialValue)
  }

  const onChange = (event) => {
    const { name, value } = event.target

    if (value !== '') {
      const newError = { ...error }
      delete newError[name]
      setError(newError)
    }
    setValueInput((prev) => {
      return {
        ...prev,
        [name]: value,
        id: uuidv4(),
      }
    })
  }

  function onBlur(event) {
    const { name, value } = event.target
    if (value !== '') return

    setError((prevState) => {
      return {
        ...prevState,
        [name]: true,
      }
    })
  }
  return (
    <div className="wrapper">
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
            onBlur={onBlur}
            errorMessage={input.errorMessage}
            error={error[input.name]}
            pattern={input.pattern}
          />
        ))}
        <FormGender
          type="radio"
          onChange={onChange}
          value={valueInput.gender}
        />
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
        </div>
      </form>
      <Tables
        users={users}
        handleDelete={handleDelete}
        handleUpdate={updateDataAfterEdit}
      />
    </div>
  )
}

export default FormRegister

import React, { useState } from 'react'
import { Table, Button } from 'reactstrap'
const Tables = ({ data, handleDelete, newData }) => {
  const [editUser, setEditUser] = useState({})
  const stylesBtn = {
    fontSize: '1.6rem',
    marginLeft: '1rem',
    marginBottom: '1rem',
    padding: '0.5rem 1.5rem',
  }
  const getId = (id) => {
    handleDelete(id)
  }

  const handleEditUser = (user) => {
    const isEmpty = Object.keys(editUser).length === 0
    if (!isEmpty && user.id === editUser.id) {
      const copyData = [...data]
      const currentIndex = copyData.findIndex((item) => item.id === user.id)
      copyData[currentIndex].name = user.name
      copyData[currentIndex].email = user.email
      copyData[currentIndex].gender = user.gender
      copyData[currentIndex].bio = user.bio
      copyData[currentIndex].status = user.status
      newData(copyData)
      setEditUser({})
      return
    }
    setEditUser(user)
  }

  const onChange = (event) => {
    const { value, name } = event.target
    let userEditCopy = { ...editUser }
    userEditCopy[name] = value
    setEditUser(userEditCopy)
  }

  return (
    <div style={{ fontSize: '1.6rem' }}>
      {data.length === 0 ? (
        <p>No Users</p>
      ) : (
        <Table borderless dark hover responsive striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Status</th>
              <th>Bio</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={user.id}>
                  {Object.keys(editUser).length === 0 ? (
                    <>
                      <th scope="row">{index + 1}</th>
                      <td>{user.name}</td>
                      <td>
                        {user.gender.replace(
                          user.gender.charAt(0),
                          user.gender.charAt(0).toUpperCase()
                        )}
                      </td>
                      <td>{user.email}</td>
                      <td>
                        {user.status.replace(
                          user.status.charAt(0),
                          user.status.charAt(0).toUpperCase()
                        )}
                      </td>
                      <td>
                        <p
                          style={{
                            textOverflow: 'ellipsis',
                            width: '150px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                          }}
                        >
                          {user.bio}
                        </p>
                      </td>
                      <td>
                        <Button
                          style={stylesBtn}
                          color="success"
                          outline
                          onClick={() => handleEditUser(user)}
                        >
                          Edit
                        </Button>

                        <Button
                          style={stylesBtn}
                          color="danger"
                          outline
                          onClick={() => getId(user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </>
                  ) : (
                    <>
                      {user.id === editUser.id ? (
                        <>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <input
                              type="text"
                              name="name"
                              value={editUser.name}
                              onChange={(event) => onChange(event)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="gender"
                              value={editUser.gender}
                              onChange={(event) => onChange(event)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="email"
                              value={editUser.email}
                              onChange={(event) => onChange(event)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="status"
                              value={editUser.status}
                              onChange={(event) => onChange(event)}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="bio"
                              value={editUser.bio}
                              onChange={(event) => onChange(event)}
                            />
                          </td>
                          <td>
                            <Button
                              style={stylesBtn}
                              color="success"
                              outline
                              onClick={() => handleEditUser(user)}
                            >
                              {Object.keys(editUser).length > 0
                                ? 'Save'
                                : 'Edit'}
                            </Button>

                            <Button
                              style={stylesBtn}
                              color="danger"
                              outline
                              onClick={() => getId(user.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </>
                      ) : (
                        <>
                          <th scope="row">{index + 1}</th>
                          <td>{user.name}</td>
                          <td>
                            {user.gender.replace(
                              user.gender.charAt(0),
                              user.gender.charAt(0).toUpperCase()
                            )}
                          </td>
                          <td>{user.email}</td>
                          <td>
                            {user.status.replace(
                              user.status.charAt(0),
                              user.status.charAt(0).toUpperCase()
                            )}
                          </td>
                          <td>
                            <p
                              style={{
                                textOverflow: 'ellipsis',
                                width: '150px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                              }}
                            >
                              {user.bio}
                            </p>
                          </td>
                          <td>
                            <Button
                              style={stylesBtn}
                              color="success"
                              outline
                              onClick={() => handleEditUser(user.id)}
                            >
                              Edit
                            </Button>

                            <Button
                              style={stylesBtn}
                              color="danger"
                              outline
                              onClick={() => getId(user.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </>
                      )}
                    </>
                  )}
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default Tables

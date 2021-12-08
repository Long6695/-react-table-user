import React, { useState } from 'react'
import { Table, Button, Spinner } from 'reactstrap'
const Tables = ({ users, handleDelete, handleUpdate, isLoading }) => {
  const [editUser, setEditUser] = useState({})
  const stylesBtn = {
    fontSize: '1.6rem',
    marginLeft: '1rem',
    marginBottom: '1rem',
    padding: '0.5rem 1.5rem',
  }
  const _handleDeleteUser = (id) => {
    handleDelete(id)
  }

  const handleEditUser = (user) => {
    const isEmpty = Object.keys(editUser).length === 0
    if (!isEmpty && user.id === editUser.id) {
      const copyData = [...users]
      const currentIndex = copyData.findIndex((item) => item.id === user.id)
      copyData[currentIndex].name = editUser.name
      copyData[currentIndex].email = editUser.email
      copyData[currentIndex].gender = editUser.gender
      copyData[currentIndex].bio = editUser.bio
      copyData[currentIndex].status = editUser.status
      handleUpdate(copyData)
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
    <div
      style={{
        fontSize: '1.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {users.length === 0 ? (
        <div
          style={{
            width: '20rem',
            height: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `${isLoading ? '#04AA6D' : 'gray'}`,
          }}
        >
          <p
            style={{
              fontSize: '1.8rem',
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: '500',
              margin: '0',
            }}
          >
            {isLoading ? (
              <div>
                Loading...
                <Spinner color="info" size="" />
              </div>
            ) : (
              'No Users'
            )}
          </p>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#04AA6D',
                fontSize: '1.8rem',
                color: '#fff',
                margin: '2rem 0',
                width: '20rem',
                height: '5rem',
              }}
            >
              Loading...
              <Spinner color="info" size="" />
            </div>
          ) : null}
          <Table striped bordered hover responsive="sm">
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
              {users.map((user, index) => {
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
                            onClick={() => _handleDeleteUser(user.id)}
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
                                onClick={() => _handleDeleteUser(user.id)}
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
                                onClick={() => _handleDeleteUser(user.id)}
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
        </>
      )}
    </div>
  )
}

export default Tables

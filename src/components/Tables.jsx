import React from 'react'
import { Table, Button } from 'reactstrap'
const Tables = ({ data, handleDelete }) => {
  const stylesBtn = {
    fontSize: '1.6rem',
    marginLeft: '1rem',
    marginBottom: '1rem',
    padding: '0.5rem 1.5rem',
  }
  const getId = (id) => {
    handleDelete(id)
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
                    <Button style={stylesBtn} color="success" outline>
                      Edit
                    </Button>
                    <Button style={stylesBtn} color="info" outline>
                      View
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

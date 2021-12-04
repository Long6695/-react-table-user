import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap'
import Tables from './Tables'

const FormModal = ({ data, handleDelete, newData }) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  return (
    <div>
      <Button
        style={{
          padding: '1rem 2rem',
          outline: 'none',
          border: 'none',
          borderRadius: '0.6rem',
          fontSize: '1.5rem',
          marginLeft: '5rem',
        }}
        color="danger"
        onClick={toggle}
      >
        Show Users
      </Button>
      <Modal centered size="xl" toggle={toggle} isOpen={modal}>
        <ModalHeader toggle={toggle}>Users</ModalHeader>
        <ModalBody>
          <Tables data={data} handleDelete={handleDelete} newData={newData} />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default FormModal

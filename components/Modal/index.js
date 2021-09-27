import React, { useState } from 'react'
import Modal from './Modal'

const CustomModal = () => {
  const [modal, setModal] = useState(false)

  const modalOpen = () => {
    setModal(true)
  }

  const modalClose = () => {
    setModal(false)
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={e => modalOpen(e)}>Open Modal</button>
      <Modal show={modal} handleClose={e => modalClose(e)}>
        <h2 className="modal-title">Hello Modal</h2>
        <div className="modal-body">
          Wow!!!
        </div>
      </Modal>
    </div>
  )
}

export default CustomModal

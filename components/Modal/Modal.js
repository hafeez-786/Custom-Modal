import React from 'react'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary"
            onClick={handleClose}>Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

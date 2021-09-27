import React from 'react'
import CustomModal from './components/Modal/index';
import './components/Modal/Modal.css';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center custom-modal-block">
            <h1>Custom Modal</h1>
            <CustomModal />
          </div>
        </div>
      </div>
    </>
  )
}
export default App
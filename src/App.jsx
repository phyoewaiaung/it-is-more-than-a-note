import React from 'react';
import {useNavigate} from "react-router-dom";
import './App.scss'
function App() {
  const navigate = useNavigate();
  const htmlClick = () => {
    navigate('/html-note');
  }

  return (
    <div className="App">
      <h1 className='mb-3' s>Notes</h1>
      <p className='h5'>IT IS MORE THAN A NOTE!</p>
      <div className='row'>
        <div onClick={htmlClick} className="col-lg-4 col-md-6 col-sm-12">
          <div className='card'>
            <h3>HTML</h3>
            <div className="card-body">
              <p className="card-text">It is more than a note!</p>
            </div>
            <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='card'>
            <h3>CSS</h3>
            <div className="card-body">
              <p className="card-text">It is more than a note!</p>
            </div>
            <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='card'>
            <h3>JAVASCRIPT</h3>
            <div className="card-body">
              <p className="card-text">It is more than a note!</p>
            </div>
            <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='card'>
            <h3>REACT</h3>
            <div className="card-body">
              <p className="card-text">It is more than a note!</p>
            </div>
            <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='card'>
            <h3>PHP</h3>
            <div className="card-body">
              <p className="card-text">It is more than a note!</p>
            </div>
            <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className='card'>
            <h3>LARAVEL</h3>
            <div className="card-body">
              <p className="card-text">It is more than a note!</p>
            </div>
            <div className="go-corner" href="#">
            <div className="go-arrow">
              →
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

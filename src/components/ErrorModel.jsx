import React from 'react'
import '../styles/ErrorModel.css'
import Button from './Button'

const ErrorModel = (props) => {
  return (
    <div className='error-box'>
        <div className='error-content'>
          <header className='header'>
           <h1 className='heading'>{props.title}</h1>
            </header>
           <div className='message'>{props.message}</div>
           <footer className='footer'>
           <Button onClick={props.onConfirm}>close</Button>
           </footer>
        </div>
        
    </div>
  )
}

export default ErrorModel
import React from 'react'
import '../styles/ErrorModel.css'
import Button from './Button'

const ErrorModel = (props) => {
  return (
    <div className='error-box'>
        <div className='error-content'>
          <h2>{props.title}</h2>
           <div>{props.message}</div>
           <Button onClick={props.onConfirm}>close</Button>
        </div>
        
    </div>
  )
}

export default ErrorModel
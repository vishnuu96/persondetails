import React from 'react'
import '../styles/ErrorModel.css'

const ErrorModel = (props) => {
  return (
    <div className='error-box'>
        <div className='error-content'>
          <h2>{props.title}</h2>
           <div>{props.children}</div>
        </div>
    </div>
  )
}

export default ErrorModel
import React from 'react'
import ErrorModel from './ErrorModel'
import '../styles/ErrorMOdelWrapper.css'

const ErrorModelWrapper = (props) => {
  return (
    <div>
     {props.error && <div className="overlay" onClick={props.onConfirm}/>}
    {props.error && <ErrorModel title={props.error.title} onClose={props.onClose} message={props.error.message} onConfirm={props.onConfirm}/>}
    </div>
  )
}

export default ErrorModelWrapper
import React from 'react'
import ErrorModel from './ErrorModel'
import '../styles/ErrorMOdelWrapper.css'

const ErrorModelWrapper = (props) => {
    // const onClose=()=>{
    //     props.setIsValid(true)
    //    }
  return (
    <div>
         {/* {props.isValid && <PersonDisplay people={personArray}/>} */}
     {props.error && <div className="overlay" onConfirm={props.onConfirm}/>}
    {props.error && <ErrorModel title={props.error.title} onClose={props.onClose} message={props.error.message} onConfirm={props.onConfirm}/>}
    </div>
  )
}

export default ErrorModelWrapper
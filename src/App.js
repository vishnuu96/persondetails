import React,{useState} from "react";
// import "./styles/UserInput.css";
import UserBox from "./components/UserBox";
import PersonDisplay from "./components/PersonDisplay";
// import ErrorModel from "./components/ErrorModel";
import ErrorModelWrapper from "./components/ErrorModelWrapper";
// import "./styles/Button.css";


function App() {
 const [personArray, setPersonArray] = useState([])
 const [error, setError] = useState()

 const addPersonHandler=(savedPersondata)=>{
  if((savedPersondata.username.trim().length===0)||(savedPersondata.age.trim().length===0)){
    setError({
      title:'invalid input',
      message:'please enetr a valid name and age'
    })
  }else 
  if(savedPersondata.age<1){
    setError({
      title:'invalid age',
      message:'please enter a valid age'
    })
  }
  else{
    
    setPersonArray(prevArray=>{
        const updatedArray=[savedPersondata,...prevArray]
         return updatedArray
    })
    
  }
 }

 const errorHandler=()=>{
  setError(null)
 }

  return (
    <div className="App">
      
      <UserBox onAddPerson={addPersonHandler}/>
      {<ErrorModelWrapper error={error} onConfirm={errorHandler}/>}
      {<PersonDisplay people={personArray}/>}

    </div>
  );
}

export default App;

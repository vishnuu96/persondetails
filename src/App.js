import React,{useState} from "react";
// import "./styles/UserInput.css";
import UserBox from "./components/UserBox";
import PersonDisplay from "./components/PersonDisplay";
import ErrorModel from "./components/ErrorModel";
// import "./styles/Button.css";


function App() {
 const [personArray, setPersonArray] = useState([])
 const [isValid, setIsValid] = useState(true)

 const addPersonHandler=(savedPersondata)=>{
  if((savedPersondata.username.trim().length===0)||(savedPersondata.age.trim().length===0)){
    setIsValid(false)
  }
  else{
    setPersonArray(prevArray=>{
        const updatedArray=[savedPersondata,...prevArray]
         return updatedArray
    })
    setIsValid(true)
 
    // setContent(<PersonDisplay people={personArray}/>)
  }

    // const [content, setContent]=useState(<PersonDisplay people={personArray}/>)

    // if(!isUsernameValid){
    //   setContent=(<ErrorModel title='error'>username is required</ErrorModel>)}
    // if(!isAgeValid){
    //   setContent=(<ErrorModel title='error'>username is required</ErrorModel>)
    // }
 }
//  const [content, setContent]= useState(<PersonDisplay people={personArray}/>
// let content=''
//  if(!isValid){
//    content=(<ErrorModel title='error'>username is required</ErrorModel>)}
  return (
    <div className="App">
      
    <UserBox onAddPerson={addPersonHandler}/>
   {isValid && <PersonDisplay people={personArray}/>}
    {!isValid && <ErrorModel title='error'>username is required</ErrorModel>}
    </div>
  );
}

export default App;

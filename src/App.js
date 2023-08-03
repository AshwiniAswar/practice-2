import React, { useState } from 'react'
import "./App.css";

const initialInput ={firstName:"",lastName:"",phone:"",mail:""};

function App() {
  const [input,setInput]=useState(initialInput);
  const [submitted,setSubmitted]=useState(false);

  const firstNameChangeHandler=(e)=>{
    setInput((prevState)=>({...prevState,firstName:e.target.value}))
  }
  const lastNameChangeHandler=(e)=>{
    setInput((prevState)=>({...prevState,lastName:e.target.value}))
  }
  
  const [showhide,setshowhide]=useState("");
  const handleshowhide=(event)=>{
    const getuser = event.target.value;
    setshowhide(getuser)
  }
  const onSubmitHandler =(e)=>{
    e.preventDefault();
    setInput(initialInput);
    setSubmitted(true);
    alert(JSON.stringify(input));
  }
  
  return (
    <div className='form-containeer'>
      <form className='form' autoComplete='off'>
        {/* {submitted && <span className='success-message'>Success!</span>} */}
        <div className='form-control'>
         <lable htmlFor="firstName" className="form-label">
          First Name</lable>
         <input
            id='firstName'
            name='firstName'
            className='form-field'
            placeholder='First Name'
            value={input.firstName}
            onChange={firstNameChangeHandler}
         />
         </div>
         <div className='form-control'>
            <lable htmlFor="lastName" className="form-label">
              Last Name</lable>
            <input
                id='lastName'
                name='lastName'
                className='form-field'
                placeholder='Last Name'
                value={input.lastName}
                onChange={lastNameChangeHandler}
            />
         </div>
         
         <div>
          <lable htmlFor="" className="form-label">How we contact you 
          </lable>
            <select name='usertype'  className='form-field' onChange={(e)=>(handleshowhide(e))}>
              <option value={""}>--Select user type--</option>
              <option value="1">phone</option>
              <option value="2">email</option>
            </select>
         </div>
         {
          showhide==="1" && (
            <div className='col-md-8 from-group'>
              <label>phone address</label>
              <textarea name='address' className="form-control"></textarea>
            </div>
          
          )
         }
          {
          showhide==="2" && (
            <div className='col-md-8 from-group'>
              <label>email address</label>
              <textarea name='address' className="form-control"></textarea>
            </div>
          
          )
         }


         <button className='submit-button' onClick={onSubmitHandler}>Submit</button>
      </form>
      
    </div>
  )
}

export default App
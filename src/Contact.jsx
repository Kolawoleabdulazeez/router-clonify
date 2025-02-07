import React from 'react'

import {useState} from 'react';
import UserCard from './Components/atoms/UserCard';
import UserForm from './UserForm';
import Navbar from './Navbar';

const Contact = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [description, setDescription] = useState("");
    const[formSubmitted, setFormSubmitted]= useState(false)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormSubmitted(true)
    }



  return (
    <div>
    <Navbar/>
    <div className='formContainer'>
      {formSubmitted === false ? ( <UserForm name={name} setName={setName} setAge={setAge} setDescription={setDescription} age={age} description={description} handleSubmit={handleSubmit}/>):(    <UserCard userName={name} userAge={age} userDescription={description}/>
) }
     
    </div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>;l.
    </div>
  )
}

export default Contact
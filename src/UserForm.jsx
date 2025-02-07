import React from 'react'

const UserForm = ({
    name,
    age,
    description,
    setAge,
    setName,
    setDescription,
    handleSubmit

}) => {

  return (
    <div>
      <div className='formContainer'>
       <form action="" className='formClass' onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name'>Name</label>
          <input name='name' placeholder='Enter Username' value={name} type='text'onChange={(e)=>{
            setName(e.target.value)
          }}/>
        </div>
        <div className='formGroup'>
          <label htmlFor='age'>Age</label>
          <input name='age' placeholder='Enter your age' value={age} type='text' onChange={(e)=>{
            setAge(e.target.value)
          }}/>
        </div>
        <div className='formGroup'>
          <label htmlFor='description'>Description</label>
          <textarea name='description' rows={5} value={description} onChange={(e)=>{
            setDescription(e.target.value)
          }}></textarea> 
      </div>
        <button className='btn'>Submit</button>
      </form>
     
    </div>
    </div>
  )
}

export default UserForm

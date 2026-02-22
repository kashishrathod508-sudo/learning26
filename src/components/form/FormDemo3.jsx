
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

  const {register,handleSubmit} = useForm()
  const [userData, setuserData] = useState({})
  const [isSubmited, setisSubmited] = useState(false)
  //handleSubmit --> form -->submmit -->handleSubmit --> it will handle submit...
  //register is a function which is use for register input...

  //callback function
  const submitHandler = (data)=>{
    console.log(data) //{} object
    setuserData(data)
    setisSubmited(true)
  }
  
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>Name</label>
            <input type='text' placeholder='Name' {...register("Name")}></input>
          </div>
          <div>
            <label>Email</label>
            <input type='Email' placeholder='Email'{...register("Email")}></input>
          </div>
          <div>
            <label>Pincode</label>  <br></br>
            <input type='number'  {...register("Pincode")}></input>
            
          </div>
         
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1> Name= {userData.Name}</h1>
          <h2> Email = {userData.Email}</h2>
          <h3>Pincode={userData.Pincode}</h3>
        </div>
          }
        
    </div>
  )
}

import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

export const Formvalidation2 = () => {

  const {register,handleSubmit}= useForm()
  const [userData, setuserData] = useState({})
  const [issubmited, setisSubmited]= useState(false)
  //handleSubmit --> form -->submit -->handleSubmit --> it will handle submit...
  //register is a function which is use for register input...

  //callback function
  const submitHandler = (data)=>{
    console.log (data) //{} object

    setuserData(data)
    setisSubmited(true)
  }
  

  return (
    <div style={{textAlign:"center"}}>
        <h1>Formvalidation2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>FULL NAME</label>
            <input type='text' placeholder='enter name' {...register("FULL Name")}></input>
          </div>
          <div>
            <label>EMAIL</label>
            <input type='text' {...register("Email")}></input>
          </div>
          <div>
            <label>MOBILE</label>  <br></br>
            <input type='number' placeholder="enter mobile number" {...register("Mobile")}></input>
          </div>
          <div>
            <label>ADDRESS</label> <br></br>
            <input type="text" placeholder="enter address" {...register("Address")}></input>
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>

          {
            issubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1> Full Name = {userData.firstName}</h1>
          <h2>Email = {userData.email}</h2>
          <h3>Mobile = {userData.mobile}</h3>
          <h4>Address = {userData.address}</h4>
        </div>
          }
        
    </div>
  )
}
    

    


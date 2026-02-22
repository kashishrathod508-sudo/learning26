
import axios from 'axios'
import React  ,{ustState} from  'react'

export const ApiDemo2 = () => {

    const addUser = async()=>{
        //form -->
        const userObj = {
            name:"amit",
            age:22,
            email:"amit1gmail",
            password:"amit12",
            isActive:true
        }

        //post(url,obj)
        try{
        const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
        console.log(res)
        console.log(res.data)
        }catch(err){
            console.log(err)
            alert("error while adding user")
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 2</h1>
        <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}

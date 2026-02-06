import React from 'react'

export const MapDemo2 = () => {

    var users =[
        {id:1,name:"ishani",age:22,gender:"female"},
        {id:2,name:"prakruti",age:20,gender:"female"},
        {id:3,name:"kashish",age:22,gender:"female"}
    ]
  return (
    <div>
        <h1>MapDemo2</h1>
        {
           users.map((user)=>{
                return <li>{user.id} {user.name} {user.age} {user.gender}</li>

           })
                    }
    </div>
  )
}

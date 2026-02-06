import React from 'react'

export const MapDemo3 = () => {

    var students =[
        {id:1,name:"kashish",age:22,marks:76,city:"ahmedabad",gender:"female"},
        {id:2,name:"prakruti",age:20,marks:70,city:"ahmedabad",gender:"female"},
        {id:3,name:"ishani",age:22,marks:79,city:"ahmedabad",gender:"female"},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{textAlign:"left"}}>Map Demo 3</h1>
        <table border="2" style={{ margin: "0 auto"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                            <td>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

import React from "react";

export const MapDemo4 = () => {
  var cities = [
    { id: 1, name: "Mumbai", pop: 12400000, AQI: 220 },
    { id: 2, name: "kolkata", pop: 4500000, AQI: 180 },
    { id: 3, name: "Chennai", pop: 7100000, AQI: 160 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 4</h1>
      <table className="table table-dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>POPULATION</th>
                <th>AQI</th>
            </tr>
        </thead>
        <tbody>
            {
                cities.map((city)=>{
                    return <tr>
                        <td>{city.id}</td>
                        <td>{city.name}</td>
                        <td>{city.pop}</td>
                        <td>{city.AQI}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};

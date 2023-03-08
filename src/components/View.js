import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
//import './View.css';

export default function Table1() {
    const [data, setData] = useState([]);

    async function init() {
        let res = await axios.get('http://localhost:8080/getorder');
        let dat = res.data;
        setData(dat);
        
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8080/deletecake/${id}`)
            .then((response) => {
                const newdata = data.filter((item) => item.id !== id);
                setData(newdata);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateData = (id, newData) => {
        axios.put(`http://localhost:8080/updatecake/${id}`, newData)
          .then((response) => {
            const newdata = data.map((item) => {
              if (item.id === id) {
                return { ...item, ...newData };
              }
              return item;
            });
            setData(newdata);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    useEffect(() => { init() }, [])
    return (
        <div className="body1">
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>category</th>
                    <th>name</th>
                    <th>cost</th>
                    <th>paymode</th>
                    <th>delivery</th>
                   
                    
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.category}</td>
                        <td>{user.name}</td>
                        <td>{user.cost}</td>
                        <td>{user.paymode}</td>
                        <td>{user.delivery}</td>
                      
                        
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => deleteData(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                        <td>
  <button
    className="btn btn-secondary"
    onClick={() => {
      
    
      const newData2 = prompt("cost");
      if(newData2){
        updateData(user.id,{cost:newData2});
      }
      
      
      

     
      
      
    }}>
    Update
  </button>
</td>
                    </tr>

                ))}
            </tbody>
        </table>
        </div>
    );
}
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom"
export default function () {
  const {pathname} = useLocation();
  const urlType=pathname.split('/')[2]

  let {id}= useParams();
  let [user,setUser]=useState({})
// console.log(useParams());
  useEffect(()=>{
    console.log(useParams);
    axios.get(`http://localhost:7000/api/v1/${urlType}/${id}`, { 
      withCredentials: true, 
      headers: { 
        'Access-Control-Allow-Origin': 'http://localhost:3000', 
        'Content-Type': 'application/json' 
      } 
    })
    .then(res => { 
      setUser(res.data.data)
    })
    .catch(err => console.log(err))
  },[])

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:7000/api/v1/${urlType}/${id}`, user, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err))
    
  }

  return (
    <div>
      <form onSubmit={handleUpdate} class="py-3 d-flex flex-column"  >
        <input type="text" class="my-2 form-control" value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} />
        <input type="text" class="my-2 form-control" value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} />
        <input type="text" class="my-2 form-control" value={user.phoneNum} onChange={(e) => setUser({...user, phoneNum: e.target.value})} />
        <input type="email" class="my-2 form-control" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
        <input type="submit" class="my-2" value="Update" className="btn btn-success"/>
      </form>
    </div>
  )
}

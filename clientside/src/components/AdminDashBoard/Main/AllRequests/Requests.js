import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/images/user.jpg'


export default function Requests() {
  let [provs,setProvs] = useState([])
  const handleUpdateStatus = async (id,newStatus) => {
    console.log(id);
      await axios.patch(`http://localhost:7000/api/v1/providers/${id}`,{status:newStatus},{withCredentials: true, headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json'}
    }
    )
    .then(res => {
      console.log(res.data);
      getProvidersReqs()
    })
    .catch(err => console.log(err))
    
  }
 const getProvidersReqs = ()=>{
  axios.get(`http://localhost:7000/api/v1/providers`, {
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      setProvs(res.data.data.providers)
    })
    .catch(err => console.log(err))

 }
 useEffect(()=>{
  getProvidersReqs()
 },[])
  return (
    <div className='row justify-content-center '>
    <h4 className='text-main'>Pending requests</h4>  
      {provs.map((prov)=>{
        if (prov.status == 'pending') {
          return (
            <div className="card col-lg-3 m-2">
            <div className="d-flex align-items-center py-3">
              <img src={`${prov.profileImg?prov.profileImg:img}`} className="card-img-top w-25 rounded-circle" alt="..." />
              <div>
                <h6 className="ps-3">{prov.firstName} {prov.lastName}</h6>
                <p className="ps-3 fs-12 text-main">{prov.title}</p>
              </div>
            </div>
            <Link className="btn btn-warning w-100" to={`/admin/providers/${prov._id}`}>Show Details</Link>
            <div>
              <button className="btn btn-success m-2 " onClick={()=>handleUpdateStatus(prov._id,'approved')}> Accept </button>
              <button className="btn btn-primary  m-2" onClick={()=>handleUpdateStatus(prov._id,'suspended')}> Suspend </button>
              <button className="btn btn-danger  m-2" onClick={()=>handleUpdateStatus(prov._id,'rejected')} > Decline </button>
            </div>
          </div>
          )
        }
      })}
    </div>
  )
}

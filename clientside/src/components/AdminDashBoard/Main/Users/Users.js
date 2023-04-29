
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import img from '../../../../assets/images/user.jpg'
function Users() {
  const {pathname} = useLocation();
  const urlType=pathname.split('/')[2]
  console.log(urlType);

  let [flag, setflag] = useState(true)
  const [users, setUsers] = useState([]);
  const [topUsr, setTopusr] = useState([])
  const [wrstUsr, setWrstUsr] = useState([])

  const getAllUsers=()=>{
    axios.get(`http://localhost:7000/api/v1/${urlType}`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res.data.data.users);
        if(res.data.data.users){
          setUsers(res.data.data.users)}
        if (res.data.data.providers) {
          setUsers(res.data.data.providers)}
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
  getAllUsers()

    axios.get(`http://localhost:7000/api/v1/${urlType}?ratings[gte]=4.8`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.data.data.users){
        setTopusr(res.data.data.users)}
      if (res.data.data.providers) {
        console.log(res.data.data.providers);
        setTopusr(res.data.data.providers)}
  })
      .catch(err => console.log(err))
    axios.get(`http://localhost:7000/api/v1/${urlType}?ratings[lte]=2`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.data.data.users){
        setWrstUsr(res.data.data.users)}
      if (res.data.data.providers) {
        setWrstUsr(res.data.data.providers)}
  })
      .catch(err => console.log(err))

  }, [urlType])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:7000/api/v1/${urlType}/${id}`, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
        getAllUsers()
      })
      .catch(err => console.log(err));
  }
  return (
    <div>
      <div className="row">
        <div className="col-2 h-500  overflow-y-auto">
          <ul className="nav nav-tabs ">
            <li className="nav-item col-5">
              <a className={flag ? 'text-main shadow-sm rounded-pill px-2' : 'text-muted'} onClick={() => { setflag(true) }}>
                Top 5
              </a>
            </li>
            <li className="nav-item col-6">
              <a className={flag ? 'text-muted' : 'text-main shadow-sm rounded-pill px-2'} onClick={() => {
                setflag(false)
              }}>
                Worst 5
              </a>
            </li>
          </ul>
          {flag ? (
            <div className=''>
              {topUsr.map((tUsr) => (
                <div className="m-3 col-11 d-flex  p-2 align-items-center justify-content-evenly bg-white rounded-5 shadow-sm">
                  <img src={`${tUsr.profileImg?tUsr.profileImg:img}`} className="w-50 p-2  rounded-circle"></img>
                  <div className="text-start">
                    <h6 className="fs-12">{tUsr.firstName}</h6>
                    <div className="ratingBox">
                      <p>
                        {tUsr.ratings}
                        <i className=" ps-1 text-warning fa-solid fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}


            </div>
          ) : (
            <div className=''>
              {wrstUsr.map((wUsr) => (
                <div className="m-3 col-11 d-flex  p-2 align-items-center justify-content-evenly bg-white rounded-5 shadow-sm">
                  <img src={`${wUsr.profileImg?wUsr.profileImg:img}`} className="w-50 p-2  rounded-circle"></img>
                  <div className="text-start">
                    <h6 className="fs-12">{wUsr.firstName}</h6>
                    <div className="ratingBox">
                      <p>
                        {wUsr.ratings}
                        <i className=" ps-1 text-warning fa-solid fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-10">
          <h6 className="text-main text-start">All {urlType}</h6>
          <div className="h-500 overflow-y-scroll shadow">
            <table className="table bg-white  rounded-5 text-start w-75 shadow-sm  my-2 ">
              <thead>
                <tr>
                  <th className='col-1'>Profile</th>
                  <th className='col-1'>First</th>
                  <th className='col-1'>Last</th>
                  <th className=''>Email</th>
                  <th className='col-1'> Details</th>
                  <th className='col-1'>Update</th>
                  <th className='col-1'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((usr) => (
                  <tr>
                    <th scope="row">
                      <img src={`${usr.profileImg?usr.profileImg:img}`} className="w-100 rounded-circle"></img>
                    </th>
                    <td>{usr.firstName}</td>
                    <td>{usr.lastName}</td>
                    <td>{usr.email}</td>
                    <td>
                      <Link className="btn btn-warning" to={`/admin/${urlType}/${usr._id}`}>Details</Link>
                    </td>

                    <td>
                      <Link className="btn btn-success" to={`/admin/${urlType}/update/${usr._id}`}>Update</Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (usr && usr._id) {
                            handleDelete(usr._id);
                            console.log(usr._id);
                          } else {
                            console.log('User or user ID is undefined');
                          }
                        }}
                      >
                        Delete
                      </button>                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;

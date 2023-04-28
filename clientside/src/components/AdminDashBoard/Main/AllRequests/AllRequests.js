// import React, { useEffect, useState } from 'react'
// import img from "../../../../assets/images/fff.png";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// export default function
//   () {

//   let [requests, setRequests] = useState([])
//   let provider={}
//   const getAllReqs = () => {
//     axios.get(`http://localhost:7000/api/v1/requests`, {
//       withCredentials: true,
//       headers: {
//         'Access-Control-Allow-Origin': 'http://localhost:3000',
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => {
//         setRequests(res.data.data.requests)
//       })
//       .catch(err => console.log(err))
//   }
//   const getProviderDetails=(providerId)=>{
//     axios.get(`http://localhost:7000/api/v1/providers/${providerId}`, {
//       withCredentials: true,
//       headers: {
//         'Access-Control-Allow-Origin': 'http://localhost:3000',
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => {
//         // provider=res.data.data
//       })
//       .catch(err => console.log(err))
//   }

//   useEffect(() => {
//     getAllReqs()
//   }, [])
//   return (
//     <div>
//       <div className="row p-4 justify-content-center">
//         {requests?.map((req) => {
//           if (req.reqStatus == 'pending') {
//            getProviderDetails(req.providerId)
//           //  console.log(provider);
//             return (
//               <div className="card col-lg-3 m-2">
//                 <div className="d-flex align-items-center py-3">
//                   <img src={img} className="card-img-top w-25" alt="..." />
//                   <div>
//                     {/* <h6 className="ps-3">{provider.firstName}</h6> */}
//                     <p className="ps-3 fs-12">{req.reqStatus}</p>
//                   </div>
//                 </div>
//                 <Link className="btn btn-warning w-100" to={`/requests/${req._id}`} >Show Details</Link>
//                 <div>
//                   <button className="btn btn-success m-2 "> Accept </button>
//                   <button className="btn btn-danger  m-2"> Decline </button>
//                 </div>
//               </div>
//             )
//           }
//         })}



//       </div>

//     </div>
//   )
// }

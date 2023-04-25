import React from 'react'
import img from "../../../../assets/images/fff.png";
export default function 
() {
  return (
    <div>
         <div className="row p-4 justify-content-center">
        <div className="card col-lg-3 m-2">
          <div className="d-flex align-items-center py-3 ">
            <img src={img} className="card-img-top w-25" alt="..." />
            <div>
              <h6 className="ps-3"> ahmed ali</h6>
              <p className="ps-3 fs-12"> position</p>
            </div>
          </div>
          <button className="btn btn-warning w-100">Show Details</button>
          <div>
            <button className="btn btn-success m-2 "> Accept </button>
            <button className="btn btn-danger  m-2"> Decline </button>
          </div>
        </div>
        <div className="card col-lg-3 m-2">
          <div className="d-flex align-items-center py-3 ">
            <img src={img} className="card-img-top w-25" alt="..." />
            <div>
              <h6 className="ps-3"> ahmed ali</h6>
              <p className="ps-3 fs-12"> position</p>
            </div>
          </div>
          <button className="btn btn-warning w-100">Show Details</button>
          <div>
            <button className="btn btn-success m-2 "> Accept </button>
            <button className="btn btn-danger  m-2"> Decline </button>
          </div>
        </div>
        <div className="card col-lg-3 m-2">
          <div className="d-flex align-items-center py-3 ">
            <img src={img} className="card-img-top w-25" alt="..." />
            <div>
              <h6 className="ps-3"> ahmed ali</h6>
              <p className="ps-3 fs-12"> position</p>
            </div>
          </div>
          <button className="btn btn-warning w-100">Show Details</button>
          <div>
            <button className="btn btn-success m-2 "> Accept </button>
            <button className="btn btn-danger  m-2"> Decline </button>
          </div>
        </div>
      </div>
    
    </div>
  )
}

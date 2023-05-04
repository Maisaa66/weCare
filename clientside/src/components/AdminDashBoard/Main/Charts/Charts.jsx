import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BarChart from './BarChart'
import { Chart } from 'chart.js'
import  LineChart from './LineChart'
export default function Charts() {
    let [MyStats,setMyStats]=useState(null)
    let locationsArr=[]
    // const [serviceLocations,setServiceLocations]=useState(null)
    // const [serviceLocations,setServiceLocations] =useState(null)
    useEffect(()=>{
        axios.get(
            "http://localhost:7000/api/v1/stats?start=2023-04-30&end=2023-05-07", {
              withCredentials: true,
              headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Content-Type": "application/json"}
              })
            .then((res)=>{
                setMyStats(res.data.stats)
               return res.data.stats.serviceLocationsStats.map((obj)=>locationsArr.push(obj.label))}
            )

            // if(MyStats){
            //     setServiceLocations({
            //         labels: MyStats.serviceLocationsStats.map((data)=>data.label),
            //         datasets:[{
            //             label:"Service Locations",
            //             data: MyStats && MyStats.serviceLocationsStats.map((data)=>data.count),
            //             backgroundColor:['green','blue']
            //         }]
            
            //     })
            // }
    },[])

    const [serviceLocations,setServiceLocations] =useState({
        labels:locationsArr.map((l)=>[l.label]),
        datasets:[{
            label:"Service Locations",
            data: MyStats && MyStats.serviceLocationsStats.map((d)=>[d.label]),
            backgroundColor:['green','blue']
        }]
    })

//     // const [serviceType,setServiceType]=useState([])
//     // const [usersOverPassedWeek,setUsersOverPassedWeek]=useState([])
//     // const [providersOverPassedWeek,setProvidersOverPassedWeek]=useState([])

  return (
    <div style={{width:500}}>
        klklk
        <BarChart chartData={MyStats} />
        <LineChart chartData={serviceLocations}></LineChart>
        {/* {MyStats && MyStats.serviceLocationsStats.map((l)=><h1>{l.count}</h1>)} */}
 {/* {MyStats &&} */}
    </div>
  )
        }

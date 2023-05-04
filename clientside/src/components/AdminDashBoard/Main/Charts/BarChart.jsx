import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
export default function BarChart({chartData}) {
  return  <Line  data={chartData}/>
  
}
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';

// const BarCharts = () => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:7000/api/v1/stats?start=2023-04-30&end=2023-05-07')
//       .then((response) => {
//         const { stats } = response.data;
//         setChartData(stats);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       {chartData &&
//         Object.entries(chartData).map(([key, data]) => (
//           <div key={key}>
//             <h2>{key}</h2>
//             <Bar
//               data={{
//                 labels: data.map((item) => item.label),
//                 datasets: [
//                   {
//                     label: 'Count',
//                     data: data.map((item) => item.count),
//                     backgroundColor: ['green', 'blue'],
//                   },
//                 ],
//               }}
//               options={{
//                 responsive: true,
//               }}
//             />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default BarCharts;

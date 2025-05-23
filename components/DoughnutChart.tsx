"use client"

import {Chart as Chartjs, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

Chartjs.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label: 'Banks',
                data: [1250, 3750, 2500, 5000],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Bank1', 'Bank2', 'Bank3', 'Bank4']
    }
  return <Doughnut 
    data={data}
    options= {{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
        
        
    }}

  />
}

export default DoughnutChart
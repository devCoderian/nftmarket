import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import styled from 'styled-components';
//https://react-chartjs-2.js.org/examples/pie-chart
import {Line} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: [1, 2, 3, 4, 5],
      },
      {
        type: 'line',
        label: 'Dataset 2',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [1, 2, 3, 4, 5, 6],
        borderColor: 'red',
        borderWidth: 2,
      },
      {
        type: 'line',
        label: 'Dataset 3',
        backgroundColor: 'rgb(75, 192, 192)',
        data: [1, 2, 3, 4, 5, 6],
      },
    ],
  };
  
const Graph = () => {

    // const [value, setValue] = useState('');

    return(
            <Line type ="line" data={data} />
    )
    
}

export default Graph;
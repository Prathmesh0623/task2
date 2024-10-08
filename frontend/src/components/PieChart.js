import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const [pieData, setPieData] = useState([]);
  const [month, setMonth] = useState('3');

  useEffect(() => {
    fetchPieChartData();
  }, [month]);

  const fetchPieChartData = async () => {
    const response = await axios.get(`http://localhost:5000/api/category-distribution?month=${month}`);
    setPieData(response.data);
  };

  const data = {
    labels: pieData.map((category) => category._id),
    datasets: [{
      label: 'Number of Items',
      data: pieData.map((category) => category.count),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#F7464A'],
    }],
  };

  return (
    <div>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
        ))}
      </select>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

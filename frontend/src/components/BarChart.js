import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [barData, setBarData] = useState([]);
  const [month, setMonth] = useState('3');

  useEffect(() => {
    fetchBarChartData();
  }, [month]);

  const fetchBarChartData = async () => {
    const response = await axios.get(`http://localhost:5000/api/price-range?month=${month}`);
    setBarData(response.data);
  };

  const data = {
    labels: barData.map((range) => range._id),
    datasets: [{
      label: 'Number of Items',
      data: barData.map((range) => range.count),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }],
  };

  return (
    <div>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
        ))}
      </select>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;

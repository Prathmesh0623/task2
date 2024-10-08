import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Statistics = () => {
  const [statistics, setStatistics] = useState({ totalSale: 0, totalSoldItems: 0, totalNotSoldItems: 0 });
  const [month, setMonth] = useState('3'); // Default March

  useEffect(() => {
    fetchStatistics();
  }, [month]);

  const fetchStatistics = async () => {
    const response = await axios.get(`http://localhost:5000/api/statistics?month=${month}`);
    setStatistics(response.data);
  };

  return (
    <div>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
        ))}
      </select>

      <div>
        <p>Total Sale Amount: ${statistics.totalSale}</p>
        <p>Total Sold Items: {statistics.totalSoldItems}</p>
        <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
      </div>
    </div>
  );
};

export default Statistics;

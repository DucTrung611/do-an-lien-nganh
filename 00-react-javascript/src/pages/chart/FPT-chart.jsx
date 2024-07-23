import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getTimeSeriesDataBySymbol } from '../../util/api';


const FPTFinancialChart = ({ symbol }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const endDate = new Date().toISOString().split('T')[0]; // Today's date
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 1);
      const formattedStartDate = startDate.toISOString().split('T')[0]; // Date 1 month ago

      try {
        const data = await getTimeSeriesDataBySymbol("FPT", formattedStartDate, endDate);
        setChartData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, ["FPT"]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{symbol} Financial Chart</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="open" stroke="#8884d8" />
          <Line type="monotone" dataKey="close" stroke="#82ca9d" />
          <Line type="monotone" dataKey="high" stroke="#ff7300" />
          <Line type="monotone" dataKey="low" stroke="#387908" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FPTFinancialChart;

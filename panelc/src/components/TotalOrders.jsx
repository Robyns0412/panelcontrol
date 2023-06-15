import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const TotalOrders = () => {
  const [loading, setLoading] = useState(true);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com')
      .then((response) => response.json())
      .then((data) => {
        setTotalOrders(data.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

  const data = {
    labels: ['Total Orders'],
    datasets: [
      {
        label: 'Orders',
        data: [totalOrders],
        backgroundColor: '#1773D1',
      },
    ],
  };

  return (
    <div className="metric">
      <h3>Total Orders</h3>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      )}
    </div>
  );
};

export default TotalOrders;







import React from 'react';
import { Bar } from 'react-chartjs-2';

const TotalIncome = ({ orders }) => {
  const totalIncome = orders.reduce((sum, order) => sum + order.total, 0).toFixed(2);

  const data = {
    labels: ['Total Income'],
    datasets: [
      {
        label: 'Total Income',
        data: [totalIncome],
        backgroundColor: '#1773D1',
      },
    ],
  };

  return (
    <div className="metric">
      <h3>Ingresos totales generados</h3>
      <Bar data={data} />
    </div>
  );
};

export default TotalIncome;



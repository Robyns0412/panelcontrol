import React from 'react';
import { Bar } from 'react-chartjs-2';

const TotalProducts = ({ products }) => {
  const chartData = {
    labels: products.map((product) => product.name),
    datasets: [
      {
        label: 'Cantidad de Productos',
        data: products.map((product) => product.rating.count),
        backgroundColor: '#D1E6FF',
        borderColor: '#1773D1',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Total de Productos</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default TotalProducts;


import React from 'react';

const AveragePrice = ({ products }) => {
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const averagePrice = (totalPrice / products.length).toFixed(2);

  return (
    <div className="metric">
      <h3>Precio promedio de los productos</h3>
      <p>${averagePrice}</p>
    </div>
  );
};

export default AveragePrice;


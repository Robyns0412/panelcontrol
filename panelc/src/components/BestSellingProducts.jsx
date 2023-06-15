import React, { useState } from 'react';

const BestSellingProducts = ({ products, orders }) => {
  const [sortBy, setSortBy] = useState('orders'); // Estado para almacenar la opción seleccionada de clasificación

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortProducts = (products, sortBy) => {
    if (sortBy === 'orders') {
      return products.sort((a, b) => b.orders - a.orders);
    }
    if (sortBy === 'price') {
      return products.sort((a, b) => b.price - a.price);
    }

    return products;
  };

  const sortedProducts = sortProducts(products, sortBy);

  return (
    <div className="metric">
      <h3>Productos más vendidos (según el número de pedidos)</h3>
      <div className="filter">
        <label htmlFor="sort">Ordenar por:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="orders">Número de pedidos</option>
          <option value="price">Precio</option>
        </select>
      </div>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.title} - Orders: {product.orders}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellingProducts;



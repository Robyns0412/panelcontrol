import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TotalProducts from './TotalProducts';
import TotalOrders from './TotalOrders';
import TotalIncome from './TotalIncome';
import AveragePrice from './AveragePrice';
import BestSellingProducts from './BestSellingProducts';
import ProductDetails from './ProductDetails';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('orders');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const productsWithOrders = response.data.map((product) => ({
          ...product,
          orders: 0,
        }));
        setProducts(productsWithOrders);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    fetchOrders();
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <TotalProducts products={products} />
          <AveragePrice products={products} />
          <BestSellingProducts products={products} sortBy={sortBy} />
          <div>
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="orders">Orders</option>
              <option value="price">Price</option>
            </select>
          </div>
          <ProductDetails products={products} />
        </>
      )}
    </div>
  );
};

export default Dashboard;















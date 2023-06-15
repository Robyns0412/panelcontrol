import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
 
ChartJs.register(
  BarElement, 
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
  )

const App = () => {
  return (
    <div>
      <h1>Panel de Control</h1>
      <Dashboard />
    </div>
  );
};

export default App;





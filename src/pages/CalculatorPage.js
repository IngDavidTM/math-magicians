import React from 'react';
import '../stylesheet/CalculatorPage.css';
import Calculator from '../components/Calculator';

const CalculatorPage = () => (
  <div className="calculatorPage">
    <h2>Lets do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;

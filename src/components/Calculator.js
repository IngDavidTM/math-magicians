import '../stylesheet/Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <p className="screen">
          {total}
          {operation}
          {next}
        </p>
        <div className="keys">
          <button type="button" onClick={this.clickHandler}>AC</button>
          <button type="button" onClick={this.clickHandler}>+/-</button>
          <button type="button" onClick={this.clickHandler}>%</button>
          <button type="button" className="orange" onClick={this.clickHandler}>÷</button>
          <button type="button" onClick={this.clickHandler}>7</button>
          <button type="button" onClick={this.clickHandler}>8</button>
          <button type="button" onClick={this.clickHandler}>9</button>
          <button type="button" className="orange" onClick={this.clickHandler}>x</button>
          <button type="button" onClick={this.clickHandler}>4</button>
          <button type="button" onClick={this.clickHandler}>5</button>
          <button type="button" onClick={this.clickHandler}>6</button>
          <button type="button" className="orange" onClick={this.clickHandler}>-</button>
          <button type="button" onClick={this.clickHandler}>1</button>
          <button type="button" onClick={this.clickHandler}>2</button>
          <button type="button" onClick={this.clickHandler}>3</button>
          <button type="button" className="orange" onClick={this.clickHandler}>+</button>
          <button type="button" className="btn0" onClick={this.clickHandler}>0</button>
          <button type="button" onClick={this.clickHandler}>.</button>
          <button type="button" className="orange" onClick={this.clickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;

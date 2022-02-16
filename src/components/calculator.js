import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calc: ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+'] };
  }

  render() {
    const { calc } = this.state;
    return (
      <div className="main-container">
        <div className="display-screen">0</div>
        <div className="btn-cols">

          {calc.map((item) => (
            <div className="btn" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="bottom-cols">
          <div className="btn">0</div>
          <div className="btn">.</div>
          <div className="btn-equals">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;

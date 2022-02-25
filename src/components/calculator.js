/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const clickHandler = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = calculate(data, e.target.name);

    if (next === null && total === null) {
      setData({ ...data, total: '0' });
    } else {
      setData({ next, total, operation });
    }
  };
  const { total, next } = data;
  return (
    <>
      <div className="math">
        <p>Lets do some Math!</p>
      </div>
      <div className="main-container">
        {next ? (
          <div className="display-screen">{next}</div>
        ) : (
          <div className="display-screen">{total}</div>
        )}
        <div className="btn-cols">
          {btns.map((btnName) => (
            <button
              onClick={clickHandler}
              name={btnName}
              type="button"
              className={`btn ${btnName === '0' ? 'btn-zero' : ''} ${
                btnName === '=' ? 'btn-equals' : ''
              }`}
              key={btnName}
            >
              {btnName}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;

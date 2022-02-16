import react from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends react.Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = calculate(this.state, e.target.name);

    if (next === null && total === null) {
      this.setState({ next, total: '0', operation });
    } else {
      this.setState({ next, total, operation });
    }
  };

  render() {
    const { total, next } = this.state;
    const btns = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    return (
      <div className="main-container">
        {next ? (
          <div className="display-screen">{next}</div>
        ) : (
          <div className="display-screen">{total}</div>
        )}
        <div className="btn-cols">
          {btns.map((btnName) => (
            <button
              onClick={(e) => this.clickHandler(e)}
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
    );
  }
}
export default Calculator;

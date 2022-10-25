import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAnswer,
  loadButtons,
  loadClear,
  loadBackspace,
  
} from "../redux/CalCRedux/action";
import { CALCULATOR_KEY } from "../redux/CalCRedux/calReducers";

const CalculatorApp = () => {
  const dispatch = useDispatch();

  
  const handleAnswer = (e) => {
    e.preventDefault();
    dispatch(loadAnswer());
  };

  const viewCalculator = useSelector((state) => {
    return state[CALCULATOR_KEY];
  });

  return (
    <React.Fragment>
      <section>
        <div>
          <div>
            <h2>CALCULATOR APP</h2>
          </div>
        <div className="calci">
          <div>
            <input
              type="text"
              value={
                viewCalculator.ans.length === 0
                  ? viewCalculator.number
                  : viewCalculator.ans 
              }
            />
          </div>
          <div>
            <table >
              <tbody>
                <tr>
                  <td>
                    <button onClick={() => dispatch(loadBackspace())}>
                      &larr;{" "}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons("/"))}>
                      /{" "}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons("-"))}>
                      -
                    </button>
                  </td>
                  <td rowSpan={2}>
                    <button
                      onClick={() => dispatch(loadClear())}
                      id="btnheight"
                    >
                      {" "}
                      C
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => dispatch(loadButtons(9))}>9</button>{" "}
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons(8))}>8</button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons(7))}>7</button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => dispatch(loadButtons(4))}>4</button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons(5))}>5</button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons(6))}>6</button>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(loadButtons("+"))}
                      id="btnplus"
                    >
                      +
                    </button>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => dispatch(loadButtons(1))}>1</button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons(2))}>2</button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons(3))}>3</button>
                  </td>
                  <td rowSpan={2}>
                    <button onClick={handleAnswer} id="btnheight">
                      =
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => dispatch(loadButtons("."))}>
                      .
                    </button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(loadButtons(0))}>0</button>
                  </td>

                  <td>
                    <button onClick={() => dispatch(loadButtons("*"))}>
                      *
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CalculatorApp;

import "./App.scss";
import { CalculatorKeys } from "./CalculatorKeys";
import { CalculatorScreen } from "./CalculatorScreen";

function App() {
  function operate(a: number, b: number) {}
  return (
    <div className="main-container">
      <div className="calculator">
        <CalculatorScreen />
        {/* <CalculatorKe /> */}
      </div>
    </div>
  );
}

export default App;

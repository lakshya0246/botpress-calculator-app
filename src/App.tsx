import "./App.scss";
import { useCalculator } from "./Calculator";
import { CalculatorKeys } from "./CalculatorKeys";
import { CalculatorScreen } from "./CalculatorScreen";
function App() {
  const { setOperand, clear, displayValue, calculate, setOperator } = useCalculator();

  return (
    <div className="main-container">
      <div className="calculator">
        <CalculatorScreen displayValue={displayValue} />
        <CalculatorKeys
          onOperatorKeyPress={setOperator}
          onNumberKeyPress={setOperand}
          onEqualsKeyPress={calculate}
          onClearKeyPress={clear}
        />
      </div>
    </div>
  );
}

export default App;

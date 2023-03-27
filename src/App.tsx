import "./App.scss";
import "./colors.scss";
import "./fonts.scss";
import { useCalculator } from "./Calculator";
import { CalculatorKeys } from "./CalculatorKeys";
import { CalculatorScreen } from "./CalculatorScreen";
function App() {
  const { setOperand, clear, displayValue, calculate, setOperator } = useCalculator();

  return (
    <div className="main-container">
      <div className="calculator">
        <CalculatorScreen displayValue={displayValue} />
        <div className="spacer"></div>
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

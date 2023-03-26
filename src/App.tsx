import "./App.scss";
import { CalculatorKeys } from "./CalculatorKeys";
import { CalculatorScreen } from "./CalculatorScreen";

function App() {
  return (
    <div className="main-container">
      <div className="calculator">
        <CalculatorScreen />
        <CalculatorKeys />
      </div>
    </div>
  );
}

export default App;

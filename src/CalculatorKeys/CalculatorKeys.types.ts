import { MathOperators } from "../Calculator";

export interface CalculatorKeysProps {
  onNumberKeyPress?: (num: number) => void;
  onOperatorKeyPress?: (operator: MathOperators) => void;
  onEqualsKeyPress?: () => void;
  onClearKeyPress?: () => void;
}

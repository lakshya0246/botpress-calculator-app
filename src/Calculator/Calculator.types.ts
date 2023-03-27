export enum MathOperators {
  MULTIPLY = "*",
  DIVIDE = "/",
  SUBTRACT = "-",
  ADD = "+",
}

export interface UseCalculatorReturnType {
  setOperand: (value: number) => void;
  setOperator: (operator: string) => void;
  /**
   * clears the current operands and operator and as a result `displayValue`
   */
  clear: () => void;
  /**
   * computes the selected operands and operator and as a result updates `displayValue`
   */
  calculate: () => void;
  /**
   * value that represents user output for any ongoing operation. Defaults to `-`
   */
  displayValue: string;
}

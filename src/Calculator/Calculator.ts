import { useState } from "react";
import { DEFAULT_DISPLAY_VALUE, OPERATOR_FUNCTIONS } from "./Calculator.constants";
import { MathOperators, UseCalculatorReturnType } from "./Calculator.types";

type Operand = string | undefined;

export function useCalculator(): UseCalculatorReturnType {
  const [_operands, _setOperands] = useState<[Operand, Operand]>([undefined, undefined]);
  const [_operator, _setOperator] = useState<MathOperators | undefined>(undefined);
  const [displayValue, setDisplayValue] = useState<string>(DEFAULT_DISPLAY_VALUE);

  function calculate() {
    if (_operator && _operands[0] !== undefined && _operands[1] !== undefined) {
      try {
        const result = OPERATOR_FUNCTIONS[_operator](parseInt(_operands[0]), parseInt(_operands[1]));
        _setOperands([result.toString(), undefined]);
      } catch (err) {
        _setOperator(undefined);
        initOperands();
        setDisplayValue("Error");
      }
    }
  }
  function initOperands() {
    _setOperands([undefined, undefined]);
  }

  function getDisplayValue() {
    return _operands[1] ?? _operands[0] ?? displayValue;
  }

  // TODO: Add check for setting the right operator;
  function setOperator(operator: MathOperators) {
    _setOperator(operator);
  }

  function clear() {
    _setOperator(undefined);
    initOperands();
  }

  function setOperand(value: number) {
    setDisplayValue(DEFAULT_DISPLAY_VALUE);
    if (_operator === undefined) {
      _setOperands((previousOperands) => [(previousOperands[0] ?? "") + value, undefined]);
    } else {
      _setOperands((previousOperands) => [previousOperands[0], (previousOperands[1] ?? "") + value.toString()]);
    }
  }

  return { setOperand, clear, calculate, setOperator, displayValue: getDisplayValue() };
}

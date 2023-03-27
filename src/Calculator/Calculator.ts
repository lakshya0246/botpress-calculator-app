import { useState } from "react";
import { OPERATOR_FUNCTIONS } from "./calculator.constants";
import { MathOperators } from "./Calculator.types";

type Operand = string | undefined;

export function useCalculator() {
  const [_operands, _setOperands] = useState<[Operand, Operand]>([undefined, undefined]);
  const [_operator, setOperator] = useState<MathOperators | undefined>(undefined);

  function calculate() {
    if (_operator && _operands[0] !== undefined && _operands[1] !== undefined) {
      _setOperands([
        OPERATOR_FUNCTIONS[_operator](parseInt(_operands[0]), parseInt(_operands[1])).toString(),
        undefined,
      ]);
    }
  }

  function getDisplayValue() {
    return _operands[1] ?? _operands[0] ?? "-";
  }

  function clear() {
    setOperator(undefined);
    _setOperands([undefined, undefined]);
  }

  function setOperand(value: number) {
    if (_operator === undefined) {
      _setOperands((previousOperands) => [(previousOperands[0] ?? "") + value, undefined]);
    } else {
      _setOperands((previousOperands) => [previousOperands[0], (previousOperands[1] ?? "") + value.toString()]);
    }
  }

  return { setOperand, clear, calculate, setOperator, displayValue: getDisplayValue() };
}

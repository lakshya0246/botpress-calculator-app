import { MathOperators } from "./Calculator.types";
import * as utils from "./Calculator.utils";
export const OPERATOR_FUNCTIONS: Record<MathOperators, (a: number, b: number) => number> = {
  [MathOperators.ADD]: utils.add,
  [MathOperators.SUBTRACT]: utils.subtract,
  [MathOperators.MULTIPLY]: utils.multiply,
  [MathOperators.DIVIDE]: utils.divide,
};

export const DEFAULT_DISPLAY_VALUE = "";

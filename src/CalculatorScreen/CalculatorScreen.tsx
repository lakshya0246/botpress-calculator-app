import { CalculatorScreenProps } from "./CalculatorScreen.types";

export const CalculatorScreen = (props: CalculatorScreenProps) => {
  return <div>{props?.displayValue}</div>;
};

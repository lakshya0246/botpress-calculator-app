import classNames from "classnames";
import styles from "./CalculatorKeys.module.scss";
import { CalculatorKeysProps, MathOperators } from "./CalculatorKeys.types";

export const CalculatorKeys = (props: CalculatorKeysProps) => {
  function handleNumberKeyPress(element: string | number) {}
  function handleOperatorKeyPress(element: string | number) {}
  return (
    <div className={styles.keyContainer}>
      <button className={classNames(styles.equalsActionButton, styles.isWide)}>=</button>
      {Object.values(MathOperators).map((value) => {
        return (
          <button
            onClick={() => handleOperatorKeyPress(value)}
            key={value}
            className={classNames(styles.operatorButton, { [styles.isWide]: value === MathOperators.ADD })}
          >
            {value}
          </button>
        );
      })}
      {(Array.from({ length: 10 }, (_, j) => Math.abs(j - 9)) as number[]).map((numberElement) => {
        return (
          <button
            key={numberElement}
            onClick={() => handleNumberKeyPress(numberElement)}
            className={classNames(styles.numberButton, { [styles.isExtraWide]: numberElement === 0 })}
          >
            {numberElement}
          </button>
        );
      })}
      <button className={styles.negativeActionButton}>CE</button>
    </div>
  );
};

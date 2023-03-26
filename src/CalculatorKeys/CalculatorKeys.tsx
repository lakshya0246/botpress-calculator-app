import styles from "./CalculatorKeys.module.scss";
import { CalculatorKeysProps, MathOperators } from "./CalculatorKeys.types";

export const CalculatorKeys = (props: CalculatorKeysProps) => {
  function handleNumberKeyPress(element: string | number) {}
  function handleOperatorKeyPress(element: string | number) {}
  return (
    <div className={styles.keyContainer}>
      <button className={styles.equalsActionButton}>=</button>
      {Object.values(MathOperators).map((value) => {
        return (
          <button onClick={() => handleOperatorKeyPress(value)} key={value} className={styles.operatorButton}>
            {value}
          </button>
        );
      })}
      {(Array.from({ length: 10 }, (_, j) => Math.abs(j - 9)) as number[]).map((numberElement) => {
        return (
          <button
            key={numberElement}
            onClick={() => handleNumberKeyPress(numberElement)}
            className={styles.numberButton}
          >
            {numberElement}
          </button>
        );
      })}
      <button className={styles.negativeActionButton}>CE</button>
    </div>
  );
};

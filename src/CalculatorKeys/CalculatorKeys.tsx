import styles from "./CalculatorKeys.module.scss";
import { CalculatorKeysProps } from "./CalculatorKeys.types";

export const CalculatorKeys = (props: CalculatorKeysProps) => {
  function handleNumberKeyPress(element: string | number) {
    console.log();
  }
  return (
    <div className={styles.keyContainer}>
      {(Array.from({ length: 10 }, (_, j) => Math.abs(j - 9)) as number[]).map((numberElement) => {
        return (
          <button onClick={() => handleNumberKeyPress(numberElement)} className={styles.numberButton}>
            {numberElement}
          </button>
        );
      })}
      <button className={styles.actionButton}>AC</button>
      <button className={styles.operatorButton}>/</button>
      <button className={styles.operatorButton}>-</button>
      <button className={styles.operatorButton}>+</button>
      <button className={styles.operatorButton}>*</button>
      <button className={styles.operatorButton}>=</button>
    </div>
  );
};

import classNames from "classnames";
import { useEffect } from "react";
import { MathOperators } from "../Calculator";
import styles from "./CalculatorKeys.module.scss";
import { CalculatorKeysProps } from "./CalculatorKeys.types";
const OPERATOR_KEYS = Object.values(MathOperators);
const NUMBERS = Array.from({ length: 10 }, (_, j) => Math.abs(j - 9)) as number[];

export const CalculatorKeys = (props: CalculatorKeysProps) => {
  useEffect(() => {
    function onKeyUp(event: KeyboardEvent) {
      if (Number.isInteger(+event.key)) {
        props.onNumberKeyPress?.(+event.key);
        return;
      }
      if (event.key === "=" || event.key === "Enter") {
        props.onEqualsKeyPress?.();
        return;
      }
      if (event.key === "Backspace") {
        props.onClearKeyPress?.();
        return;
      }
      if (OPERATOR_KEYS.includes(event.key as any)) {
        props.onOperatorKeyPress?.(event.key as MathOperators);
        return;
      }
    }
    document.addEventListener("keyup", onKeyUp);
    return () => document.removeEventListener("keyup", onKeyUp);
  }, [props]);

  return (
    <div className={styles.keyContainer}>
      <button onClick={props.onEqualsKeyPress} className={classNames(styles.equalsActionButton, styles.isWide)}>
        =
      </button>
      {Object.values(MathOperators).map((value) => {
        return (
          <button
            onClick={() => props.onOperatorKeyPress?.(value)}
            key={value}
            className={classNames(styles.operatorButton, { [styles.isWide]: value === MathOperators.ADD })}
          >
            {value}
          </button>
        );
      })}
      {NUMBERS.map((num) => {
        return (
          <button
            key={num}
            onClick={() => props.onNumberKeyPress?.(num)}
            className={classNames(styles.numberButton, { [styles.isExtraWide]: num === 0 })}
          >
            {num}
          </button>
        );
      })}
      <button onClick={props.onClearKeyPress} className={styles.negativeActionButton}>
        CE
      </button>
    </div>
  );
};

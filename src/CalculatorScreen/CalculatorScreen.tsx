import { CalculatorScreenProps } from "./CalculatorScreen.types";
import styles from "./CalculatorScreen.module.scss";
export const CalculatorScreen = (props: CalculatorScreenProps) => {
  return (
    <div className={styles.screen}>
      <div className={styles.latticeFilter}></div>
      {props?.displayValue}
    </div>
  );
};

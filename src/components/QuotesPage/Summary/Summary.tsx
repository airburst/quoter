import { Text } from "@simplybusiness/mobius";
import styles from "./Summary.module.css";

export const Summary = () => {
  return (
    <div className={styles.container}>
      <span className={styles.intro}>Here are your quotes for</span>
      <h1 className={styles.title}>General Liability</h1>
      <Text elementType="p">
        Searching across <strong>13 carriers</strong> we found
        <br />
        <strong>3 quotes</strong> starting from <strong>$48.91</strong> a month
      </Text>
    </div>
  );
};

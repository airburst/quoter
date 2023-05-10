import { Icon, Text } from "@simplybusiness/mobius";
import styles from "./Highlight.module.css";

export const Highlight = () => {
  return (
    <div className={styles.container}>
      <Text className={styles.text} variant="caption">
        <Icon name="buttonArrowRightActive" className={styles.icon} /> Bought by
        75% of businesses like yours
      </Text>
    </div>
  );
};

import { Flex, Icon } from "@simplybusiness/mobius";
import styles from "./Rating.module.css";

export const Rating = () => {
  return (
    <Flex
      justifyContent="space-between"
      gap="var(--size-30)"
      className={styles.container}
    >
      <Flex alignItems="center" gap="var(--size-10)">
        <Icon name="star" className={styles.icon} /> Rating
        <span className={styles.provider}>(A.M. Best)</span>
      </Flex>
      <span>
        <strong>A+ (Excellent)</strong>
      </span>
    </Flex>
  );
};

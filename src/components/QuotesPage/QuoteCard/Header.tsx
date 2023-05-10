import { Flex, Text } from "@simplybusiness/mobius";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Flex
      elementType="header"
      justifyContent="space-between"
      className={styles.container}
    >
      <span>Partner logo</span>
      <div>
        <Flex alignItems="baseline" gap="var(--size-20)">
          <Text className={styles.amount} variant="h2" elementType="span">
            $48.91
          </Text>
          <Text className={styles.cadence} elementType="span">
            /mo
          </Text>
        </Flex>
        <Flex alignItems="baseline" gap="var(--size-20)" justifyContent="end">
          <Text
            className={styles.totalLabel}
            variant="caption"
            elementType="span"
          >
            Total
          </Text>
          <Text className={styles.totalAmount} elementType="span">
            $587.92
          </Text>
        </Flex>
      </div>
    </Flex>
  );
};

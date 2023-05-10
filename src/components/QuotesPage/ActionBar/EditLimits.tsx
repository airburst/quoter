import { Button, Flex, Text } from "@simplybusiness/mobius";
import styles from "./EditLimits.module.css";

export const EditLimits = () => {
  return (
    <Flex alignItems="center" gap="var(--size-20)">
      <Button variant="basic" size="small" className={styles.button}>
        Edit Limits
      </Button>
      <Text variant="legal" elementType="span" className={styles.count}>
        3
      </Text>
    </Flex>
  );
};

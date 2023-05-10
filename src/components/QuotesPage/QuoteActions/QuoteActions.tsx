import { Button, Flex, Icon, LinkButton } from "@simplybusiness/mobius";
import styles from "./QuoteActions.module.css";

export const QuoteActions = () => {
  return (
    <Flex
      elementType="footer"
      gap="var(--size-30)"
      className={styles.container}
    >
      <Button variant="secondary" className={styles.link}>
        Compare
      </Button>
      <LinkButton href="#" className={styles.link}>
        View Policy <Icon name="rightArrow" />
      </LinkButton>
    </Flex>
  );
};

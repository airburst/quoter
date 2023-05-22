import { Button } from "@twilio-paste/core/button";
import { Flex } from "@twilio-paste/core/flex";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";

import styles from "./QuoteActions.module.css";

export const QuoteActions = () => {
  return (
    <Flex padding="space50" grow>
      <Button variant="secondary" className={styles.link}>
        Compare
      </Button>
      <Button variant="primary" as="a" href="#" className={styles.link}>
        View Policy <ArrowForwardIcon decorative={false} title="View policy" />
      </Button>
    </Flex>
  );
};

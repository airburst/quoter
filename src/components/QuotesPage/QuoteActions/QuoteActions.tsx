import { Button } from "@twilio-paste/button";
import { Flex } from "@twilio-paste/flex";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import styles from "./QuoteActions.module.css";

export const QuoteActions = () => {
  return (
    <div className={styles.container}>
      <Flex grow>
        <Button variant="secondary" fullWidth>
          Compare
        </Button>
      </Flex>
      <Flex grow>
        <Button variant="primary" fullWidth>
          View Policy{" "}
          <ArrowForwardIcon decorative={false} title="View policy" />
        </Button>
      </Flex>
    </div>
  );
};

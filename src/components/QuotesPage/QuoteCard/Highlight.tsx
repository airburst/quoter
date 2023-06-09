import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { Badge } from "@twilio-paste/badge";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import styles from "./Highlight.module.css";

export const Highlight = () => {
  return (
    <div className={styles.container}>
      <Stack orientation="horizontal" spacing="space30">
        <Badge as="span" variant="decorative40">
          <ArrowForwardIcon decorative />
        </Badge>
        <Text as="p" fontSize="fontSize30" fontWeight="fontWeightBold">
          BOUGHT BY 75% OF BUSINESSES LIKE YOURS
        </Text>
      </Stack>
    </div>
  );
};

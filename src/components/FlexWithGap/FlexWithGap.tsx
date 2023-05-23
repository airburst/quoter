import { Box } from "@twilio-paste/core/box";
import { Flex } from "@twilio-paste/core/flex";
import { ReactNode } from "react";
import styles from "./FlexWithGap.module.css";

type FlexWithGapProps = {
  children: ReactNode;
};

export const FlexWithGap = (props: FlexWithGapProps) => {
  return (
    <Box className={styles.container}>
      <Flex>{props.children}</Flex>
    </Box>
  );
};

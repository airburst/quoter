import { ReactNode } from "react";
import { Box } from "@twilio-paste/core/box";
import { Radio } from "@twilio-paste/core/radio-group";
import styles from "./RadioOption.module.css";

type RadioOptionProps = {
  id: string;
  value: string;
  name: string;
  children: NonNullable<ReactNode>;
};

export const RadioOption = (props: RadioOptionProps) => {
  return (
    <Box className={styles.container}>
      <Radio {...props} />
    </Box>
  );
};

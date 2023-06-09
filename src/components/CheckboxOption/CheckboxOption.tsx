import { ReactNode } from "react";
import { Box } from "@twilio-paste/box";
import { Checkbox } from "@twilio-paste/checkbox";
import styles from "./CheckboxOption.module.css";

type CheckboxOptionProps = {
  id: string;
  value: string;
  name?: string;
  children: NonNullable<ReactNode>;
};

export const CheckboxOption = (props: CheckboxOptionProps) => {
  return (
    <Box className={styles.container}>
      <Checkbox {...props} />
    </Box>
  );
};

import { ReactNode } from "react";
import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import styles from "./ListWithIcon.module.css";

type Props = {
  items: string[];
  icon: ReactNode;
};

export const ListWithIcon = ({ items, icon }: Props) => {
  return (
    <ul className={styles.list}>
      {items.map(label => (
        <li key={label} className={styles.listItem}>
          <Box>
            <Stack orientation="horizontal" spacing="space30">
              {icon}
              <Text as="span" color="colorTextWeak">
                {label}
              </Text>
            </Stack>
          </Box>
        </li>
      ))}
    </ul>
  );
};

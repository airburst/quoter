import { Text } from "@twilio-paste/core/text";
import { UnorderedList } from "@twilio-paste/core/list";
import styles from "./ListWithIcon.module.css";
import { ReactNode } from "react";

export const ListWithIcon = ({
  title,
  icon,
  color,
  children,
}: {
  title: string;
  icon: string;
  color: string;
  children: ReactNode;
}) => {
  return (
    <div>
      <Text as="p" className={styles.title}>
        {title}
      </Text>
      <UnorderedList>{children}</UnorderedList>
    </div>
  );
};

import { Icon, List, Text } from "@simplybusiness/mobius";
import type { IconName } from "@simplybusiness/icons";
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
      <Text variant="caption" className={styles.title}>
        {title}
      </Text>
      <List
        icon={
          <Icon
            // TODO: this should be exported from Mobius
            name={icon as IconName}
            className={styles.icon}
            // @ts-expect-error style prop should be allowed
            style={{ color }}
          />
        }
      >
        {children}
      </List>
    </div>
  );
};

import { Flex, Icon, List, ListItem, Text } from "@simplybusiness/mobius";
import type { IconName } from "@simplybusiness/icons";
import styles from "./ListWithIcon.module.css";

export const ListWithIcon = ({
  title,
  icon,
  color,
}: {
  title: string;
  icon: string;
  color: string;
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
        <ListItem>
          <Flex justifyContent="space-between" className={styles.listItem}>
            General Liability <strong>$2m</strong>
          </Flex>
        </ListItem>
        <ListItem>Additional Insureds</ListItem>
        <ListItem>No Deductibles</ListItem>
      </List>
    </div>
  );
};

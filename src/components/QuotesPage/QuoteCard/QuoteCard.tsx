import { QuoteActions } from "../QuoteActions";
import { Rating } from "../Rating";
import styles from "./QuoteCard.module.css";
import { Highlight } from "./Highlight";
import { Header } from "./Header";
import { Flex, ListItem } from "@simplybusiness/mobius";
import { ListWithIcon } from "../ListWithIcon/ListWithIcon";

export const QuoteCard = () => {
  return (
    <li className={styles.container}>
      <Highlight />
      <Header />
      <Rating />
      <Flex className={styles.body}>
        <ListWithIcon
          title="Included with this policy"
          icon="tick"
          color="var(--color-valid)"
        >
          <ListItem>
            <Flex className={styles.listItem}>
              General Liability <strong>$2M</strong>
            </Flex>
          </ListItem>
          <ListItem>Additional Insureds</ListItem>
          <ListItem>No Deductibles</ListItem>
        </ListWithIcon>
        <ListWithIcon
          title="Available to add to this policy"
          icon="plus"
          color="var(--color-text-medium)"
        >
          <ListItem>Business Property and Equipment</ListItem>
          <ListItem>And More</ListItem>
        </ListWithIcon>
      </Flex>
      <QuoteActions />
    </li>
  );
};

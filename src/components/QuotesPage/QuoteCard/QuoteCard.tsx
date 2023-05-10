import { QuoteActions } from "../QuoteActions";
import { Rating } from "../Rating";
import styles from "./QuoteCard.module.css";
import { Highlight } from "./Highlight";
import { Header } from "./Header";
import { Flex } from "@simplybusiness/mobius";
import { ListWithIcon } from "../ListWithIcon/ListWithIcon";

export const QuoteCard = () => {
  return (
    <li className={styles.container}>
      <Highlight />
      <Header />
      <Rating />
      <Flex className={styles.body} gap="var(--size-20)" flexDirection="column">
        <ListWithIcon
          title="Included with this policy"
          icon="tick"
          color="var(--color-valid)"
        />
        <ListWithIcon
          title="Available to add to this policy"
          icon="plus"
          color="var(--color-text-medium)"
        />
      </Flex>
      <QuoteActions />
    </li>
  );
};

import { ActionBar } from "../ActionBar";
import { QuoteCard } from "../QuoteCard";
import styles from "./QuoteSection.module.css";

export const QuoteSection = () => {
  return (
    <>
      <ActionBar />
      <ul className={styles.list}>
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
      </ul>
    </>
  );
};

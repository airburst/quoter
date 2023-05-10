import { Section } from "@components/Section";
import { ActionBar } from "../ActionBar";
import { QuoteCard } from "../QuoteCard";
import styles from "./QuoteSection.module.css";

export const QuoteSection = () => {
  return (
    <>
      <ActionBar />
      <Section>
        <ul className={styles.list}>
          <QuoteCard />
          <QuoteCard />
          <QuoteCard />
        </ul>
      </Section>
    </>
  );
};

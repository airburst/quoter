import { Section } from "@components/Section";
import { ActionBar } from "../ActionBar";
import { QuoteCard } from "../QuoteCard";
import { Highlight } from "../QuoteCard/Highlight";
import styles from "./QuoteSection.module.css";

export const QuoteSection = () => {
  return (
    <Section>
      <ActionBar />
      <ul className={styles.list}>
        <QuoteCard highlight={<Highlight />} />
        <QuoteCard />
        <QuoteCard />
      </ul>
    </Section>
  );
};

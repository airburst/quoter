import { Text } from "@twilio-paste/text";
import { Section } from "@components/Section";
import styles from "./Summary.module.css";

export const Summary = () => {
  return (
    <Section>
      <div className={styles.container}>
        <Text variant="p" as="span" className={styles.intro}>
          Here are your quotes for
        </Text>
        <h1 className={styles.title}>General Liability</h1>
        <Text as="p">
          Searching across <strong>13 carriers</strong> we found
          <br />
          <strong>3 quotes</strong> starting from <strong>$48.91</strong> a
          month
        </Text>
      </div>
    </Section>
  );
};

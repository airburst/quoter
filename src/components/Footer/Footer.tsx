import { Section } from "@components/Section";
import { Trustpilot } from "./Trustpilot";
import { Address } from "./Address";
import { Legal } from "./Legal";
import styles from "./Footer.module.css";

export const Footer = () => (
  <Section color="dark">
    <footer className={styles.footer}>
      <Trustpilot />
      <Address />
      <Legal />
    </footer>
  </Section>
);

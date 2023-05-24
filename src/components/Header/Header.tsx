import Link from "next/link";
import { Button } from "@twilio-paste/button";
import { Logo } from "@components/Logo";
import { Section } from "@components/Section";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Section>
        <div className={styles.innerWrapper}>
          <Link
            className={styles.logo}
            href="/"
            aria-label="Link back to home page"
          >
            <Logo />
          </Link>
          <Button variant="primary">Call Us</Button>
        </div>
      </Section>
    </header>
  );
};

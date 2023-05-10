import Link from "next/link";
import { Button } from "@simplybusiness/mobius";
import { Logo } from "@components/Logo";
import { Section } from "@components/Section";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Section>
        <div className={styles.innerWrapper}>
          <Link className={styles.logo} href="/">
            <Logo />
          </Link>
          <Button variant="ghost">Call Us</Button>
        </div>
      </Section>
    </header>
  );
};

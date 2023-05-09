import Link from "next/link";
import { Logo } from "@components/Logo";
import styles from "./Header.module.css";
import { Navigation } from "@components/Navigation";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Logo />
      </Link>
      <Navigation />
    </header>
  );
};

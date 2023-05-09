import Link from "next/link";
import { Logo } from "@components/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Logo />
      </Link>
      <button>Call Us</button>
    </header>
  );
};

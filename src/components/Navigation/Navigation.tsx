import { List, ListItem } from "@simplybusiness/mobius";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <List className={styles.list}>
        <ListItem>
          <ActiveLink href="/">General Liability</ActiveLink>
        </ListItem>
      </List>
      <button>{/* <img src="./toggle.png" alt="Toggle menu" /> */}</button>
    </nav>
  );
};

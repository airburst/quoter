import { List, ListItem } from "@simplybusiness/mobius";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <List className={styles.list}>
        <ListItem>
          <ActiveLink href="/">Home</ActiveLink>
        </ListItem>
        <ListItem>
          <ActiveLink href="/projects">Projects</ActiveLink>
        </ListItem>
        <ListItem>
          <ActiveLink href="/about">About</ActiveLink>
        </ListItem>
      </List>
    </nav>
  );
};

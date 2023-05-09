"use client";

import { Icon, List, ListItem, Button } from "@simplybusiness/mobius";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navigation.module.css";
import { Donut } from "./Donut";
import { useState } from "react";
import clsx from "clsx";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const containerClasses = clsx(styles.container, {
    [styles.containerOpen]: isOpen,
  });

  const iconClasses = clsx(styles.icon, {
    [styles.iconOpen]: isOpen,
  });

  return (
    <nav className={containerClasses}>
      <List className={styles.list}>
        <ListItem className={styles.listItem}>
          <Donut value="100" />
          <ActiveLink href="/">General Liability</ActiveLink>
        </ListItem>
        <ListItem className={styles.listItem}>
          <Donut value="100" />
          <ActiveLink href="/page-1">Page 1</ActiveLink>
        </ListItem>
        <ListItem className={styles.listItem}>
          <Donut value="100" />
          <ActiveLink href="/page-2">Page 2</ActiveLink>
        </ListItem>
      </List>
      <Button
        className={styles.button}
        variant="basic"
        size="small"
        onClick={handleClick}
      >
        <Icon className={iconClasses} name="chevronDown" />
      </Button>
    </nav>
  );
};

"use client";

import { Button } from "@twilio-paste/core/Button";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { ActiveLink } from "./ActiveLink";
import { Section } from "@components/Section";
import { Separator } from "@twilio-paste/core/separator";
import { Donut } from "./Donut";
import { useState } from "react";
import clsx from "clsx";
import styles from "./Navigation.module.css";

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
    <>
      <Section>
        <nav className={containerClasses}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Donut value="50" />
              <ActiveLink href="/trade">Welcome</ActiveLink>
            </li>
            <li className={styles.listItem}>
              <Donut value="0" />
              <ActiveLink href="/page-1">Coverage</ActiveLink>
            </li>
            <li className={styles.listItem}>
              <Donut value="0" />
              <ActiveLink href="/page-2">Application</ActiveLink>
            </li>
            <li className={styles.listItem}>
              <Donut value="0" />
              <ActiveLink href="/quotes">Quotes</ActiveLink>
            </li>
            <li className={styles.listItem}>
              <Donut value="0" />
              <ActiveLink href="/checkout">Checkout</ActiveLink>
            </li>
          </ul>
          <Button
            className={styles.button}
            variant="secondary"
            size="small"
            aria-label="Open or close navigation"
            onClick={handleClick}
          >
            <ChevronDownIcon
              className={iconClasses}
              decorative={false}
              title="Click to show navigation"
            />
          </Button>
        </nav>
      </Section>
      <Separator orientation="horizontal" verticalSpacing="space20" />
    </>
  );
};

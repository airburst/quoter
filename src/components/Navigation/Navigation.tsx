"use client";

import { Button } from "@twilio-paste/core/Button";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { ChevronUpIcon } from "@twilio-paste/icons/esm/ChevronUpIcon";
import { ActiveLink } from "./ActiveLink";
import { Section } from "@components/Section";
import { Separator } from "@twilio-paste/core/separator";
import { Box } from "@twilio-paste/core/box";
import { Donut } from "./Donut";
import { useState } from "react";
import clsx from "clsx";
import styles from "./Navigation.module.css";

type Props = {
  completed?: string[];
};

export const Navigation = ({ completed }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const completedValues = completed?.slice(0, 5);

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
              <Donut value={completedValues?.[0] || "0"} />
              <ActiveLink href="/trade">Welcome</ActiveLink>
            </li>
            <li className={styles.listItem}>
              <Donut value={completedValues?.[1] || "0"} />
              <ActiveLink href="/what-you-do">Coverage</ActiveLink>
            </li>
            <li className={styles.listItem}>
              <Donut value={completedValues?.[2] || "0"} />
              <ActiveLink href="/general-liability">
                General Liability
              </ActiveLink>
            </li>
            <li className={styles.listItem}>
              <Donut value={completedValues?.[3] || "0"} />
              <ActiveLink href="/quotes">Quotes</ActiveLink>
            </li>
            <li className={styles.listItem}>
              <Donut value={completedValues?.[4] || "0"} />
              <ActiveLink href="/checkout">Checkout</ActiveLink>
            </li>
          </ul>

          <Box className={iconClasses}>
            <Button
              className={styles.button}
              variant="link"
              size="small"
              aria-label="Open or close navigation"
              onClick={handleClick}
            >
              {isOpen ? (
                <ChevronUpIcon
                  decorative={false}
                  title="Click to hide navigation"
                />
              ) : (
                <ChevronDownIcon
                  decorative={false}
                  title="Click to show navigation"
                />
              )}
            </Button>
          </Box>
        </nav>
      </Section>
      <Separator orientation="horizontal" verticalSpacing="space20" />
    </>
  );
};

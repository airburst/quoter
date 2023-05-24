"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useAtom } from "jotai";
import { Button } from "@twilio-paste/button";
import { Separator } from "@twilio-paste/separator";
import { Box } from "@twilio-paste/box";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { ChevronUpIcon } from "@twilio-paste/icons/esm/ChevronUpIcon";
import { ActiveLink } from "./ActiveLink";
import { Section } from "@components/Section";
import { Donut } from "./Donut";
import styles from "./Navigation.module.css";
import { navigationAtom } from "./state";

type Props = {
  completed?: string[];
};

export const Navigation = ({ completed }: Props) => {
  const [navigation, setNavigation] = useAtom(navigationAtom);
  const [isOpen, setIsOpen] = useState(false);
  const { steps } = navigation;

  const newSteps = completed
    ? steps.map((link, index) => {
        return {
          ...link,
          completed: completed[index] || "0",
        };
      })
    : steps;

  useEffect(() => {
    setNavigation(nav => ({
      ...nav,
      steps: newSteps,
    }));
  }, []);

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
            {navigation.steps.map(step => {
              const { label, href, completed } = step;
              return (
                <li key={href} className={styles.listItem}>
                  <Donut value={completed} />
                  <ActiveLink href={href}>{label}</ActiveLink>
                </li>
              );
            })}
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

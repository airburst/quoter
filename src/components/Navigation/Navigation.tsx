"use client";

import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Button } from "@twilio-paste/button";
import { Separator } from "@twilio-paste/separator";
import { Box } from "@twilio-paste/box";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { ChevronUpIcon } from "@twilio-paste/icons/esm/ChevronUpIcon";
import { ActiveLink } from "./ActiveLink";
import { Section } from "@components/Section";
import { Donut } from "./Donut";
import styles from "./Navigation.module.css";
import { NAV_STEPS } from "@/constants";
import { navState } from "./store";

type Props = {
  progress?: string[];
};

export const Navigation = ({ progress }: Props) => {
  const [_, setProgress] = useAtom(navState);
  const [isOpen, setIsOpen] = useState(false);

  const nav = NAV_STEPS.map((step, index) => {
    const completedVal = progress && progress[index];
    return {
      ...step,
      progress: completedVal,
    };
  });

  const navProgress = nav.reduce(
    (acc: string[], currVal) =>
      currVal.progress ? [...acc, currVal.progress] : [...acc],
    [],
  );

  const currentStepId = progress ? progress.length - 1 : -1;
  const currentStep = currentStepId > -1 ? nav[currentStepId] : null;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setProgress(() => navProgress);
  }, []);

  const containerClasses = clsx(styles.container, {
    [styles.containerOpen]: isOpen,
  });

  const iconClasses = clsx(styles.icon, {
    [styles.iconOpen]: isOpen,
  });

  const listClasses = clsx(styles.list, {
    [styles.listOpen]: isOpen,
  });

  const listItemClasses = (index: number) => {
    return clsx(styles.listItem, {
      [styles.invisible]: !isOpen || currentStepId === index,
      [styles.visible]: isOpen,
    });
  };

  const currentStepClasses = clsx(styles.listItem, styles.listItemCurrent);
  // TODO: read CSS variable?
  const listItemHeight = 40;
  const currentStepY = isOpen ? Math.abs(currentStepId) * listItemHeight : 0;

  return (
    <>
      <Section>
        <nav className={containerClasses}>
          <ul className={listClasses}>
            {/* TODO: move to its own component */}
            {currentStep && (
              <li
                className={currentStepClasses}
                role="presentation"
                style={{
                  transform: `translateY(${currentStepY}px)`,
                }}
              >
                <Donut value={currentStep.progress} />
                <ActiveLink href={currentStep.href}>
                  {currentStep.label}
                </ActiveLink>
              </li>
            )}
            {nav.map((step, index) => {
              const { label, href, progress } = step;
              return (
                <li key={href} className={listItemClasses(index)}>
                  <Donut value={progress} />
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

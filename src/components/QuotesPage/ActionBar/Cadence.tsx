"use client";

import { useState } from "react";
import styles from "./Cadence.module.css";
import clsx from "clsx";

export const Cadence = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const buttonClasses = clsx(styles.button, {
    [styles.buttonToggled]: isToggled,
  });

  return (
    <button className={buttonClasses} onClick={handleClick}>
      <span>Monthly</span>
      <span>Yearly</span>
    </button>
  );
};

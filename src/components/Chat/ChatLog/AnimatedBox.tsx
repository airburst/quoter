import { CSSProperties, ReactNode } from "react";
import styles from "./AnimatedBox.module.css";

type AnimatedBoxProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

const DEFAULT_DELAY_IN_MS = 1000;
const DEFAULT_DURATION_IN_MS = 300;

export const AnimatedBox = ({
  children,
  delay = DEFAULT_DELAY_IN_MS,
  duration = DEFAULT_DURATION_IN_MS,
  ...otherProps
}: AnimatedBoxProps) => {
  return (
    <div
      className={styles.container}
      style={
        {
          "--animation-delay": `${delay}ms`,
          "--animation-duration": `${duration}ms`,
        } as CSSProperties
      }
      {...otherProps}
    >
      {children}
    </div>
  );
};

import { ReactNode } from "react";
import { Text } from "@twilio-paste/core/text";
import styles from "./Feature.module.css";

export const Feature = ({
  // icon,
  title,
  description,
  children,
}: {
  icon: string;
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.content}>
        <Text as="h4" className={styles.noMargin}>
          {title}
        </Text>
        <Text as="p" className={styles.text}>
          {description}
        </Text>
        {children}
      </div>
    </div>
  );
};

import { ReactNode } from "react";
import { Text } from "@twilio-paste/text";
import styles from "./Feature.module.css";
import { CircularIcon } from "@components/CircularIcon";

export const Feature = ({
  icon,
  title,
  description,
  children,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <CircularIcon
          backgroundColor="colorBackgroundBrandHighlight"
          size="20px"
          icon={icon}
        />
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

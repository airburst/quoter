import { ReactNode } from "react";
import { Box } from "@twilio-paste/box";
import type { ResponsiveValue } from "@twilio-paste/styling-library";
import type { ThemeShape } from "@twilio-paste/theme";
import styles from "./CircularIcon.module.css";

type CircularIconProps = {
  backgroundColor: ResponsiveValue<keyof ThemeShape["backgroundColors"]>;
  size: string;
  icon: ReactNode;
};

export const CircularIcon = (props: CircularIconProps) => {
  const { backgroundColor, size, icon } = props;
  return (
    <Box
      backgroundColor={backgroundColor}
      className={styles.container}
      borderRadius="borderRadiusCircle"
      style={{ "--size": size } as React.CSSProperties}
    >
      {icon}
    </Box>
  );
};

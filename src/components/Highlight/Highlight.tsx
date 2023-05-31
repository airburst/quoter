import { ReactNode } from "react";
import { Box } from "@twilio-paste/box";

type HighlightProps = {
  children: ReactNode;
};

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <Box
      backgroundColor="colorBackgroundBrandHighlightWeakest"
      padding="space50"
      marginY="space50"
      borderRadius="borderRadius20"
      borderLeftColor="colorBorderPrimary"
      borderLeftWidth="borderWidth30"
      borderLeftStyle="solid"
    >
      {children}
    </Box>
  );
};

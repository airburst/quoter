import { ReactNode } from "react";
import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Stack } from "@twilio-paste/core/stack";
import { LightModeIcon } from "@twilio-paste/icons/esm/LightModeIcon";

type InfoProps = {
  children: ReactNode;
};

export const Info = (props: InfoProps) => {
  return (
    <Box
      backgroundColor="colorBackgroundDecorative10Weakest"
      padding="space50"
      marginY="space50"
      borderRadius="borderRadius30"
      borderTopLeftRadius="borderRadius0"
    >
      <Stack orientation="horizontal" spacing="space50">
        <LightModeIcon
          decorative={true}
          color="colorTextBrandHighlight"
          size="sizeIcon40"
        />
        <Text as="p" fontSize="fontSize40">
          {props.children}
        </Text>
      </Stack>
    </Box>
  );
};

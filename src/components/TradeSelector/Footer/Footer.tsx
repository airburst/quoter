import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Stack } from "@twilio-paste/core/stack";
import { Anchor } from "@twilio-paste/core/anchor";
import { LightModeIcon } from "@twilio-paste/icons/esm/LightModeIcon";

export const Footer = () => {
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
          You can also choose from the{" "}
          <Anchor href="/components">full list of professions</Anchor>.
        </Text>
      </Stack>
    </Box>
  );
};

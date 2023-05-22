import { ReactNode } from "react";
import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Flex } from "@twilio-paste/core/flex";
import { LightbulbIcon } from "@components/Icon";

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
      <Flex>
        <Box color="colorTextBrandHighlight" marginRight="space50">
          <LightbulbIcon style={{ width: "12px" }} />
        </Box>
        <Text as="p" fontSize="fontSize30" color="colorTextWeak">
          {props.children}
        </Text>
      </Flex>
    </Box>
  );
};

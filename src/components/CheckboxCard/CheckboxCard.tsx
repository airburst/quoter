import { ReactNode } from "react";
import { Flex } from "@twilio-paste/core/flex";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import { Text } from "@twilio-paste/core/text";
import { Checkbox } from "@twilio-paste/core/checkbox";
import styles from "./CheckboxCard.module.css";

type CheckboxCard = {
  id: string;
  icon?: ReactNode;
  price?: string;
  title: string;
  description?: string;
};

export const CheckboxCard = (props: CheckboxCard) => {
  const { id, icon, price, title, description } = props;
  return (
    <Box
      className={styles.container}
      borderLeftStyle="solid"
      borderLeftWidth="borderWidth30"
      borderLeftColor="colorBorderPrimaryWeak"
      padding="space40"
      borderRadius="borderRadius20"
    >
      <Checkbox id={id} value={id}>
        <Box paddingLeft="space30">
          {(icon || price) && (
            <Flex marginBottom="space30">
              {icon && (
                <Flex grow>
                  <Box
                    marginBottom="space30"
                    color="colorTextWeak"
                    width="30px"
                  >
                    {icon}
                  </Box>
                </Flex>
              )}
              {price && (
                <Box
                  borderLeftStyle="solid"
                  borderLeftWidth="borderWidth20"
                  borderLeftColor="colorBorderPrimaryStrong"
                  paddingLeft="space20"
                >
                  <Text as="span" fontSize="fontSize20" color="colorTextWeak">
                    From
                  </Text>
                  <br />{" "}
                  <Text
                    as="span"
                    fontSize="fontSize40"
                    fontWeight="fontWeightBold"
                    color="colorTextWeak"
                  >
                    {price}
                  </Text>
                  <Text as="span" fontSize="fontSize20" color="colorTextWeak">
                    /mo
                  </Text>
                </Box>
              )}
            </Flex>
          )}
          <Text
            as="h2"
            fontSize="fontSize40"
            color="colorTextWeak"
            marginBottom="space30"
          >
            {title}
          </Text>
          {description && (
            <Text as="p" color="colorTextWeak" marginBottom="space30">
              {description}
            </Text>
          )}
          <Button variant="link">What is Covered</Button>
        </Box>
      </Checkbox>
    </Box>
  );
};

"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Stack } from "@twilio-paste/core/stack";
import { Text } from "@twilio-paste/core/text";
import { StarIcon } from "@twilio-paste/icons/esm/StarIcon";
import styles from "./Rating.module.css";

export const Rating = () => {
  return (
    <Flex padding="space50">
      <Flex grow>
        <Stack orientation="horizontal" spacing="space20">
          <StarIcon decorative={false} title="Rating" />
          <Text as="p" fontSize="fontSize40" fontWeight="fontWeightSemibold">
            Rating
          </Text>
          <Text as="p" fontSize="fontSize40">
            (A.M. Best)
          </Text>
        </Stack>
      </Flex>
      <Flex grow>
        <Text as="p" fontSize="fontSize40" fontWeight="fontWeightBold">
          A+ (Excellent)
        </Text>
      </Flex>
    </Flex>
  );
};

"use client";

import { Flex } from "@twilio-paste/flex";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { StarIcon } from "@twilio-paste/icons/esm/StarIcon";
import styles from "./Rating.module.css";

export const Rating = () => {
  return (
    <Flex paddingY="space50">
      <div className={styles.container}>
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
        <Text as="p" fontSize="fontSize40" fontWeight="fontWeightBold">
          A+ (Excellent)
        </Text>
      </div>
    </Flex>
  );
};

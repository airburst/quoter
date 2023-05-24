"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { Input } from "@twilio-paste/core/input";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Text } from "@twilio-paste/core/text";
import { BackButton } from "@components/BackButton";
import { NextButton } from "@components/NextButton";

export default function Location() {
  return (
    <>
      <BackButton />
      <Section>
        <Flex paddingY="space40">
          <Heading as="h2" variant="heading10">
            Nice, where is your |TRADE| buisness located?
          </Heading>
        </Flex>

        <Text as="label" fontSize="fontSize40">
          Select the state that is your main location.
        </Text>
        <Box paddingY="space40">
          <Input
            aria-describedby="payment_amount_help_text"
            aria-label="select state"
            id="payment_amount"
            name="payment_amount"
            type="text"
            placeholder="e.g. New York, Florida"
            insertBefore={
              <Text
                color="colorTextWeak"
                as="span"
                fontWeight="fontWeightSemibold"
              >
                <SearchIcon decorative />
              </Text>
            }
          />
        </Box>

        <NextButton href="/what-you-do" />
      </Section>
    </>
  );
}

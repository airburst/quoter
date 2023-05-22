"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Button } from "@twilio-paste/core/button";
import { Box } from "@twilio-paste/core/box";
import { Input } from "@twilio-paste/core/input";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Text } from "@twilio-paste/core/text";
import { BackLink } from "@components/BackLink";

export default function Trade() {
  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingBottom="space40">
          <Heading as="h2" variant="heading10">
            Nice, where is your |TRADE| buisness located?
          </Heading>
        </Flex>

        <Text as="label" fontSize="fontSize40">
          Select the state that is your main location.
        </Text>
        <Box marginTop="space40">
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

        <Box marginY="space100">
          <Button variant="primary" fullWidth>
            Next
            <ArrowForwardIcon decorative />
          </Button>
        </Box>
      </Section>
    </>
  );
}

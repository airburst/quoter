"use client";

import { Section } from "@components/Section";
import { Box } from "@twilio-paste/box";
import { Input } from "@twilio-paste/input";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { Text } from "@twilio-paste/text";
import { BackButton } from "@components/BackButton";
import { NextButton } from "@components/NextButton";
import { PageTitle } from "@components/PageTitle";

// eslint-disable-next-line react/function-component-definition
export default function Location() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Nice, where is your photography business located?" />

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

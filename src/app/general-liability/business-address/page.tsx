"use client";

import { Anchor } from "@twilio-paste/core/anchor";
import { Box } from "@twilio-paste/core/box";
import { Checkbox } from "@twilio-paste/core/checkbox";
import { Heading } from "@twilio-paste/core/heading";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { NextButton } from "@components/NextButton";
import { Text } from "@twilio-paste/core/text";
import { BackLink } from "@components/BackLink";
import { Section } from "@components/Section";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";

export default function BusinessAddress() {
  return (
    <>
      <BackLink />
      <Section>
        <Box paddingY="space40">
          <Heading as="h2" variant="heading10">
            Okay. next we need your business address.
          </Heading>
        </Box>

        <Box marginTop="space50">
          <Label htmlFor="business_name">Business name</Label>
          <Input id="business_name" name="business_name" type="text" />
        </Box>

        <Box marginTop="space100" marginBottom="space50">
          <Label htmlFor="find_address">Find address</Label>
          <Input
            id="find_address"
            name="find_address"
            type="text"
            placeholder="e.g. 123 Main Street"
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
        <Anchor href="#">Enter manually</Anchor>

        <Box marginTop="space100">
          <Checkbox
            id="marketing_consent"
            value="marketing_consent"
            name="marketing_consent"
          >
            By checking you consent to receive recurring autodialed
            non-marketing and marketing text messages from or on behalf of
            Simply Business to the phone number(s) provided in this form. You
            understand that consent is not required to make a purchase.
          </Checkbox>
        </Box>

        <Box marginY="space100">
          <NextButton href="#" />
        </Box>
      </Section>
    </>
  );
}

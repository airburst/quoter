"use client";

import Link from "next/link";
import { Box } from "@twilio-paste/box";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { NextButton } from "@components/NextButton";
import { Text } from "@twilio-paste/text";
import { BackButton } from "@components/BackButton";
import { Section } from "@components/Section";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { CheckboxOption } from "@components/CheckboxOption";
import { PageTitle } from "@components/PageTitle";

// eslint-disable-next-line react/function-component-definition
export default function BusinessAddress() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Okay. next we need your business address." />

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
        <Link href="#">Enter manually</Link>

        <Box marginTop="space100">
          <CheckboxOption
            id="marketing_consent"
            value="marketing_consent"
            name="marketing_consent"
          >
            By checking you consent to receive recurring autodialed
            non-marketing and marketing text messages from or on behalf of
            Simply Business to the phone number(s) provided in this form. You
            understand that consent is not required to make a purchase.
          </CheckboxOption>
        </Box>

        <Box marginY="space100">
          <NextButton href="/general-liability/customise-quotes" />
        </Box>
      </Section>
    </>
  );
}

"use client";

import Link from "next/link";
import { BackButton } from "@components/BackButton";
import { Box } from "@twilio-paste/box";
import { Info } from "@components/Info";
import { Input } from "@twilio-paste/input";
import { NextButton } from "@components/NextButton";
import { Section } from "@components/Section";
import { Text } from "@twilio-paste/text";
import { CheckboxOption } from "@components/CheckboxOption";
import { PageTitle } from "@components/PageTitle";

// eslint-disable-next-line react/function-component-definition
export default function Customer() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Amazing, we should get to know you better." />
        <Box marginTop="spaceNegative40" marginBottom="space40">
          <Link href="#">More Information</Link>
        </Box>

        <Box marginTop="space50">
          <Text as="label" fontSize="fontSize40">
            First name
          </Text>
          <Box paddingTop="space40">
            <Input
              aria-label="first name"
              id="first_name"
              name="first_name"
              type="text"
            />
          </Box>
        </Box>

        <Box marginTop="space50">
          <Text as="label" fontSize="fontSize40">
            Last name
          </Text>
          <Box paddingTop="space40">
            <Input
              aria-label="last name"
              id="last_name"
              name="last_name"
              type="text"
            />
          </Box>
        </Box>

        <Box marginTop="space50">
          <Text as="label" fontSize="fontSize40">
            Email
          </Text>
          <Box paddingTop="space40">
            <Input aria-label="email" id="email" name="email" type="email" />
          </Box>
          <Info>
            We will use it to send quotes, policy documents and certificate of
            insurance (COI).
          </Info>
        </Box>

        <Box marginTop="space50">
          <Text as="label" fontSize="fontSize40">
            Phone number
          </Text>
          <Box paddingTop="space40">
            <Input
              aria-label="phone_number"
              id="phone_number"
              name="phone_number"
              type="text"
            />
          </Box>
          <Info>
            Why are we asking? We may use this nmumebr to reach out to you about
            your application status, quote, or policy.
          </Info>
        </Box>

        <Box marginTop="space50">
          <CheckboxOption
            id="keep_updated"
            value="keep_updated"
            name="keep_updated"
          >
            Keep me updated on the latest small biz news, Simply Business
            updates, offers, and promotions. I understand I can unsubscribe at
            any time.
          </CheckboxOption>
        </Box>

        <Box marginY="space100">
          <NextButton href="/general-liability/about-your-business" />
        </Box>
      </Section>
    </>
  );
}

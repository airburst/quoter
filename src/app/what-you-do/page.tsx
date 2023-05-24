"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackButton } from "@components/BackButton";
import { RadioGroup } from "@twilio-paste/core/radio-group";
import { CheckboxGroup } from "@twilio-paste/core/checkbox";
import { useUID } from "@twilio-paste/core/uid-library";
import { NextButton } from "@components/NextButton";
import { Info } from "@components/Info";
import { RadioOption } from "@components/RadioOption";
import { CheckboxOption } from "@components/CheckboxOption";

export default function WhatYouDo() {
  return (
    <>
      <BackButton />
      <Section>
        <Flex paddingY="space40">
          <Heading as="h2" variant="heading10">
            Next, could you tell us more about what you do.
          </Heading>
        </Flex>
        <Box marginBottom="space100">
          <RadioGroup
            name="business-operation"
            legend="Where does your business operate?"
          >
            <RadioOption
              id={useUID()}
              value="home-only"
              name="business-operation"
            >
              Home only
            </RadioOption>
            <RadioOption
              id={useUID()}
              value="home-and-client-locations"
              name="business-operation"
            >
              Home and client locations
            </RadioOption>
            <RadioOption
              id={useUID()}
              value="own-rent-space"
              name="business-operation"
            >
              Own/rent space
            </RadioOption>
          </RadioGroup>
        </Box>
        <Box marginBottom="space100">
          <CheckboxGroup
            name="applicable-statements"
            legend="Select all statements that apply to your business."
          >
            <CheckboxOption id="provides_services" value="provides_services">
              I provide services or advice to my customers.
            </CheckboxOption>
            <CheckboxOption id="has_employees" value="has_employees">
              I have employees, contractors, and/or subcontractors.
            </CheckboxOption>
            <CheckboxOption id="collects_Data" value="collects_Data">
              I collect and/or store customer data (ex: credit card details,
              names and addresses, health info, etc.)
            </CheckboxOption>
          </CheckboxGroup>
        </Box>
        <Info>
          Your answers help us recommend coverage tailored to your
          business&apos;s needs
        </Info>
        <NextButton href="/coverages" />
      </Section>
    </>
  );
}

"use client";

import { Section } from "@components/Section";
import { Box } from "@twilio-paste/box";
import { BackButton } from "@components/BackButton";
import { RadioGroup } from "@twilio-paste/radio-group";
import { CheckboxGroup } from "@twilio-paste/checkbox";
import { useUID } from "@twilio-paste/uid-library";
import { NextButton } from "@components/NextButton";
import { Info } from "@components/Info";
import { RadioOption } from "@components/RadioOption";
import { CheckboxOption } from "@components/CheckboxOption";
import { PageTitle } from "@components/PageTitle";

// eslint-disable-next-line react/function-component-definition
export default function WhatYouDo() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Next, could you tell us more about what you do." />
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

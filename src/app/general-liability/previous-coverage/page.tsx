"use client";

import { BackLink } from "@components/BackLink";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { NextButton } from "@components/NextButton";
import { Section } from "@components/Section";
import { Stack } from "@twilio-paste/core/stack";
import { Radio, RadioGroup } from "@twilio-paste/core/radio-group";
import { UnorderedList, ListItem } from "@twilio-paste/core/list";
import { useUID } from "@twilio-paste/core/uid-library";

export default function PreviousCoverage() {
  return (
    <>
      <BackLink />
      <Section>
        <Box paddingY="space40">
          <Heading as="h2" variant="heading10">
            Please tell us about your previous coverage.
          </Heading>
        </Box>

        <Box marginTop="space50">
          <RadioGroup
            name="existing_policy"
            legend="Do you currently have an insurance policy in effect for the coverage you have requested?"
          >
            <Radio id={useUID()} value="yes" name="existing_policy">
              Yes, I&apos;m currently covered
            </Radio>
            <Radio id={useUID()} value="no" name="existing_policy">
              No, I&apos;m not covered
            </Radio>
          </RadioGroup>
        </Box>

        <Box marginTop="space100">
          <RadioGroup
            name="policy_statements"
            legend="Are any of the statements true for your business or anyone to whom this insurance would apply?"
          >
            <UnorderedList>
              <ListItem>
                Had any claim made against them in the past 5 years, or earlier
                if still pending, or had any circumstances that may give rise to
                a claim whether insured or not
              </ListItem>
              <ListItem>
                During the past three (3) years, have any claims, administrative
                or regulatory proceedings, or criminal or civil charges,
                hearings, demands or lawsuits involving employment related
                matters been made against the applicant or any entity or person
                proposed for this insurance, whether or not insured
              </ListItem>
              <ListItem>
                You had a construction defect claim for your current business or
                any previous business in the last 10 years
              </ListItem>
              <ListItem>
                An insurance carrier has ever cancelled or declined to renew
                your business insurance policy
              </ListItem>
              <ListItem>Your business has ever declared bankruptcy</ListItem>
            </UnorderedList>
            <Stack orientation="horizontal" spacing="space50">
              <Radio id={useUID()} value="yes" name="policy_statements">
                Yes
              </Radio>
              <Radio id={useUID()} value="no" name="policy_statements">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box marginY="space100">
          <NextButton href="./business-address" />
        </Box>
      </Section>
    </>
  );
}
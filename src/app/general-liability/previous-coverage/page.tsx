"use client";

import { BackButton } from "@components/BackButton";
import { Box } from "@twilio-paste/core/box";
import { NextButton } from "@components/NextButton";
import { Section } from "@components/Section";
import { RadioGroup } from "@twilio-paste/core/radio-group";
import { UnorderedList, ListItem } from "@twilio-paste/core/list";
import { useUID } from "@twilio-paste/core/uid-library";
import { RadioOption } from "@components/RadioOption";
import { FlexWithGap } from "@components/FlexWithGap";
import { PageTitle } from "@components/PageTitle";

export default function PreviousCoverage() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Please tell us about your previous coverage." />

        <Box marginTop="space50">
          <RadioGroup
            name="existing_policy"
            legend="Do you currently have an insurance policy in effect for the coverage you have requested?"
          >
            <RadioOption id={useUID()} value="yes" name="existing_policy">
              Yes, I&apos;m currently covered
            </RadioOption>
            <RadioOption id={useUID()} value="no" name="existing_policy">
              No, I&apos;m not covered
            </RadioOption>
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
            <FlexWithGap>
              <RadioOption id={useUID()} value="yes" name="policy_statements">
                Yes
              </RadioOption>
              <RadioOption id={useUID()} value="no" name="policy_statements">
                No
              </RadioOption>
            </FlexWithGap>
          </RadioGroup>
        </Box>

        <Box marginY="space100">
          <NextButton href="./business-address" />
        </Box>
      </Section>
    </>
  );
}

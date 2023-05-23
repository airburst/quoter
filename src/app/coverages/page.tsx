"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { CheckboxGroup } from "@twilio-paste/core/checkbox";
import { BackLink } from "@components/BackLink";
import { NextButton } from "@components/NextButton";
import { CameraIcon, ShieldHalvedIcon, SquarePlusIcon } from "@components/Icon";
import { CheckboxCard } from "@components/CheckboxCard";

export default function Coverages() {
  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingBottom="space40">
          <Heading as="h2" variant="heading10">
            Select all the coverage you would like quotes for today.
          </Heading>
        </Flex>
        <Box marginBottom="space100">
          <CheckboxGroup
            name="coverages"
            legend="Recommended for your business"
          >
            <CheckboxCard
              id="equipment_and_business_property"
              icon={<CameraIcon />}
              price="$21"
              title="Equipment and Business Property"
              description="This coverage can help you cover your business's
                    equipment or property while it's in transit or stored
                    off-site."
            />
            <CheckboxCard
              id="general_liability"
              icon={<ShieldHalvedIcon />}
              price="$45"
              title="General Liability"
              description="Can cover the costs if your business has caused bodily injury or property damage to someone else."
            />
            <CheckboxCard
              id="workers_compensation"
              icon={<SquarePlusIcon />}
              title="Workers' Compensation"
              description="This coverage protects employers from liability by providing benefits to workers who are injured or become sick as a result of their job."
            />
          </CheckboxGroup>
        </Box>
        <Box marginBottom="space100">
          <CheckboxGroup
            name="other_coverages"
            legend="Other coverages available"
          >
            <CheckboxCard
              id="professional_liability"
              title="Professional Liability / Errors & Omissions"
            />
            <CheckboxCard id="cyber" title="Cyber" />
          </CheckboxGroup>
        </Box>
        <NextButton href="/general-liability" />
      </Section>
    </>
  );
}

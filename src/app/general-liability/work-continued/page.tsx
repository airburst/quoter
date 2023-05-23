"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackLink } from "@components/BackLink";
import { Checkbox, CheckboxGroup } from "@twilio-paste/core/checkbox";
import { NextButton } from "@components/NextButton";

export default function WorkContinued() {
  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingY="space40">
          <Heading as="h2" variant="heading10">
            Next, let’s get some info about the kind of work you do.
          </Heading>
        </Flex>
        <Box marginBottom="space100">
          <CheckboxGroup
            name="services-materials-infrastructure"
            legend="Does the business perform any of the following services or use the following materials or infrastructure?"
          >
            <Checkbox id="asbestos" value="asbestos">
              Asbestos, lead, and mold evaluation or abatement
            </Checkbox>
            <Checkbox id="blasting" value="blasting">
              Blasting
            </Checkbox>
            <Checkbox id="cranes" value="cranes">
              Cranes, lifts, or bucket trucks
            </Checkbox>
            <Checkbox id="demolition" value="demolition">
              Demolition
            </Checkbox>
            <Checkbox id="emergency-systems" value="emergency-systems">
              Emergency systems
            </Checkbox>
            <Checkbox id="fire-suppresion" value="fire-suppresion">
              Fire suppression
            </Checkbox>
            <Checkbox id="foundations" value="foundations">
              Foundations
            </Checkbox>
            <Checkbox id="hazardous-material" value="hazardous-material">
              Hazardous material or waste removal
            </Checkbox>
            <Checkbox id="hydraulic-fracturing" value="hydraulic-fracturing">
              Hydraulic fracturing, hydrofracturing, or fracking
            </Checkbox>
            <Checkbox id="retaining-walls" value="retaining-walls">
              Retaining walls
            </Checkbox>
            <Checkbox id="scaffolding" value="scaffolding">
              Scaffolding operation
            </Checkbox>
            <Checkbox id="landfills" value="landfills">
              Work at landfills (This does not include dropping off waste or
              debris)
            </Checkbox>
            <Checkbox id="hazarouds-projects" value="hazarouds-projects">
              Any other similarly hazardous projects or materials
            </Checkbox>
            <Checkbox id="other" value="other">
              None of the above
            </Checkbox>
          </CheckboxGroup>
        </Box>
        <Box marginBottom="space100">
          <CheckboxGroup
            name="statements"
            legend="Select all the statements that are true for your business:"
          >
            <Checkbox id="banks" value="banks">
              Work with banks or asset managers to repair, inspect, manage
              insurance claims, or maintain a foreclosed property
            </Checkbox>
            <Checkbox id="multi-location" value="multi-location">
              Perform the same type of work in more than 15 units at a
              multi-unit location
            </Checkbox>
            <Checkbox id="new-developments" value="new-developments">
              Perform work in new developments or tracts where there will be
              more than 10 units?
            </Checkbox>
            <Checkbox id="mass-produce" value="mass-produce">
              Mass produce furniture or produce children&apos;s furniture?
            </Checkbox>
            <Checkbox id="hospitals" value="hospitals">
              Perform work in hospitals
            </Checkbox>
            <Checkbox id="other" value="other">
              None of the above
            </Checkbox>
          </CheckboxGroup>
        </Box>
        <NextButton href="./previous-coverage" />
      </Section>
    </>
  );
}

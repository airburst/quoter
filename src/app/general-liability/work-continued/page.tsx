"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackButton } from "@components/BackButton";
import { CheckboxGroup } from "@twilio-paste/core/checkbox";
import { NextButton } from "@components/NextButton";
import { CheckboxOption } from "@components/CheckboxOption";

export default function WorkContinued() {
  return (
    <>
      <BackButton />
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
            <CheckboxOption id="asbestos" value="asbestos">
              Asbestos, lead, and mold evaluation or abatement
            </CheckboxOption>
            <CheckboxOption id="blasting" value="blasting">
              Blasting
            </CheckboxOption>
            <CheckboxOption id="cranes" value="cranes">
              Cranes, lifts, or bucket trucks
            </CheckboxOption>
            <CheckboxOption id="demolition" value="demolition">
              Demolition
            </CheckboxOption>
            <CheckboxOption id="emergency-systems" value="emergency-systems">
              Emergency systems
            </CheckboxOption>
            <CheckboxOption id="fire-suppresion" value="fire-suppresion">
              Fire suppression
            </CheckboxOption>
            <CheckboxOption id="foundations" value="foundations">
              Foundations
            </CheckboxOption>
            <CheckboxOption id="hazardous-material" value="hazardous-material">
              Hazardous material or waste removal
            </CheckboxOption>
            <CheckboxOption
              id="hydraulic-fracturing"
              value="hydraulic-fracturing"
            >
              Hydraulic fracturing, hydrofracturing, or fracking
            </CheckboxOption>
            <CheckboxOption id="retaining-walls" value="retaining-walls">
              Retaining walls
            </CheckboxOption>
            <CheckboxOption id="scaffolding" value="scaffolding">
              Scaffolding operation
            </CheckboxOption>
            <CheckboxOption id="landfills" value="landfills">
              Work at landfills (This does not include dropping off waste or
              debris)
            </CheckboxOption>
            <CheckboxOption id="hazarouds-projects" value="hazarouds-projects">
              Any other similarly hazardous projects or materials
            </CheckboxOption>
            <CheckboxOption id="other" value="other">
              None of the above
            </CheckboxOption>
          </CheckboxGroup>
        </Box>
        <Box marginBottom="space100">
          <CheckboxGroup
            name="statements"
            legend="Select all the statements that are true for your business:"
          >
            <CheckboxOption id="banks" value="banks">
              Work with banks or asset managers to repair, inspect, manage
              insurance claims, or maintain a foreclosed property
            </CheckboxOption>
            <CheckboxOption id="multi-location" value="multi-location">
              Perform the same type of work in more than 15 units at a
              multi-unit location
            </CheckboxOption>
            <CheckboxOption id="new-developments" value="new-developments">
              Perform work in new developments or tracts where there will be
              more than 10 units?
            </CheckboxOption>
            <CheckboxOption id="mass-produce" value="mass-produce">
              Mass produce furniture or produce children&apos;s furniture?
            </CheckboxOption>
            <CheckboxOption id="hospitals" value="hospitals">
              Perform work in hospitals
            </CheckboxOption>
            <CheckboxOption id="other" value="other">
              None of the above
            </CheckboxOption>
          </CheckboxGroup>
        </Box>
        <NextButton href="./previous-coverage" />
      </Section>
    </>
  );
}

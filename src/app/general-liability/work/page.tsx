"use client";

import { BackLink } from "@components/BackLink";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { NextButton } from "@components/NextButton";
import { Section } from "@components/Section";
import { Stack } from "@twilio-paste/core/stack";
import { RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { RadioOption } from "@components/RadioOption";

export default function Work() {
  return (
    <>
      <BackLink />
      <Section>
        <Box paddingY="space40">
          <Heading as="h2" variant="heading10">
            Next, let&apos;s get some info about the kind of work you do.
          </Heading>
        </Box>

        <Box marginTop="space50">
          <RadioGroup
            name="type_of_work"
            legend="What type of work do you perform?"
          >
            <RadioOption id={useUID()} value="residential" name="type_of_work">
              Residential work
            </RadioOption>
            <RadioOption id={useUID()} value="commercial" name="type_of_work">
              Commercial work
            </RadioOption>
            <RadioOption id={useUID()} value="both" name="type_of_work">
              Both
            </RadioOption>
          </RadioGroup>
        </Box>

        <Box marginTop="space100">
          <RadioGroup
            name="external_buildings"
            legend="Do you work on exterior buildings?"
          >
            <Stack orientation="horizontal" spacing="space50">
              <RadioOption id={useUID()} value="yes" name="external_buildings">
                Yes
              </RadioOption>
              <RadioOption id={useUID()} value="no" name="external_buildings">
                No
              </RadioOption>
            </Stack>
          </RadioGroup>
        </Box>

        <Box marginTop="space100">
          <RadioGroup
            name="industrial_work"
            legend="Do you perform industrial work?"
            helpText="Industrial work typically pertains to work performed in manufacturing facilities, including factories and warehouses."
          >
            <Stack orientation="horizontal" spacing="space50">
              <RadioOption id={useUID()} value="yes" name="industrial_work">
                Yes
              </RadioOption>
              <RadioOption id={useUID()} value="no" name="industrial_work">
                No
              </RadioOption>
            </Stack>
          </RadioGroup>
        </Box>

        <Box marginY="space100">
          <NextButton href="./work-continued" />
        </Box>
      </Section>
    </>
  );
}

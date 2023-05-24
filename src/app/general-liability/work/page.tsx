"use client";

import { BackButton } from "@components/BackButton";
import { Box } from "@twilio-paste/core/box";
import { NextButton } from "@components/NextButton";
import { Section } from "@components/Section";
import { RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { RadioOption } from "@components/RadioOption";
import { FlexWithGap } from "@components/FlexWithGap";
import { PageTitle } from "@components/PageTitle";

export default function Work() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Next, let's get some info about the kind of work you do." />

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
            <FlexWithGap>
              <RadioOption id={useUID()} value="yes" name="external_buildings">
                Yes
              </RadioOption>
              <RadioOption id={useUID()} value="no" name="external_buildings">
                No
              </RadioOption>
            </FlexWithGap>
          </RadioGroup>
        </Box>

        <Box marginTop="space100">
          <RadioGroup
            name="industrial_work"
            legend="Do you perform industrial work?"
            helpText="Industrial work typically pertains to work performed in manufacturing facilities, including factories and warehouses."
          >
            <FlexWithGap>
              <RadioOption id={useUID()} value="yes" name="industrial_work">
                Yes
              </RadioOption>
              <RadioOption id={useUID()} value="no" name="industrial_work">
                No
              </RadioOption>
            </FlexWithGap>
          </RadioGroup>
        </Box>

        <Box marginY="space100">
          <NextButton href="./work-continued" />
        </Box>
      </Section>
    </>
  );
}

"use client";

import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { CheckboxGroup } from "@twilio-paste/core/checkbox";
import { BackButton } from "@components/BackButton";
import { NextButton } from "@components/NextButton";
import { CheckboxCard } from "@components/CheckboxCard";
import { PageTitle } from "@components/PageTitle";

export default function CustomiseQuotes() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Almost there, now you can customise your quotes." />
        <Box marginBottom="space100">
          <CheckboxGroup
            name="additional-options"
            legend="Additional coverage options"
          >
            <CheckboxCard
              id="waver-of-subrogation"
              title="Waiver of Subrogation"
              description="Customers typically include this coverage at their clients' request. With the waiver, your insurance company agrees to cover all damages in the event of a loss and no longer has the right to recover costs from your client's insurance."
            />
            <CheckboxCard
              id="additional-insureds"
              title="Additional Insureds"
              description="Will extend coverage to anyone under your policy in the event of a claim. Some carriers will automatically include this coverage."
            />
            <CheckboxCard
              id="terrorism-risk-coverage"
              title="Terrorism Risk Insurance Act Coverage"
              description='The Terrorism Risk Insurance Act ("TRIA") is a federal program that helps cover a percentage of losses if a terrorist attack happens and certain conditions are met.'
            />
          </CheckboxGroup>
        </Box>
        <NextButton href="./coverage-start" />
      </Section>
    </>
  );
}

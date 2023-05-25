"use client";

// import { useEffect } from "react";
// import { useAtom } from "jotai";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/box";
import { BackButton } from "@components/BackButton";
import { RadioGroup } from "@twilio-paste/radio-group";
import { useUID } from "@twilio-paste/uid-library";
import { NextButton } from "@components/NextButton";
import { RadioOption } from "@components/RadioOption";
import { PageTitle } from "@components/PageTitle";
// import { navState } from "@components/Navigation";

export default function PolicyHolder() {
  // const [progress, setProgress] = useAtom(navState);
  // const [currentStepVal] = progress?.slice(-1);
  // const updatedVal = Number(currentStepVal) + 10;

  // useEffect(() => {
  //   setProgress(state => {
  //     const calc = [...state.slice(0, -1), updatedVal.toString()];
  //     return calc;
  //   });
  // }, []);

  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="First, let us check something." />

        <Box marginBottom="space100">
          <RadioGroup
            name="policy-holder"
            legend="Will you be the policyholder?"
            helpText="The policyholder is the person or organization who owns the insurance policy."
          >
            <RadioOption id={useUID()} value="yes" name="policy-holder">
              Yes, I am purchasing for my own business
            </RadioOption>
            <RadioOption id={useUID()} value="no" name="policy-holder">
              No, I am acting on behalf of the business owner
            </RadioOption>
          </RadioGroup>
        </Box>
        <NextButton href="/general-liability/customer" />
      </Section>
    </>
  );
}

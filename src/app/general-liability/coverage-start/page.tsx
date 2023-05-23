"use client";

import { useState } from "react";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import { Heading } from "@twilio-paste/core/heading";
import { Radio, RadioGroup } from "@twilio-paste/core/radio-group";
import { Label } from "@twilio-paste/core/label";
import { DatePicker } from "@twilio-paste/core/date-picker";
import { useUID } from "@twilio-paste/core/uid-library";
import { BackLink } from "@components/BackLink";
import { Section } from "@components/Section";
import { getToday, getTomorrow } from "@utils/dates";

export default function CoverageStart() {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const isReadOnly = !!startDate;

  const handleDateChoice = (value: string) => {
    switch (value) {
      case "today":
        setStartDate(getToday());
        break;
      case "tomorrow":
        setStartDate(getTomorrow());
        break;
      default:
        setStartDate("");
        break;
    }
    setShowDatePicker(true);
  };

  return (
    <>
      <BackLink />
      <Section>
        <Box paddingY="space40">
          <Heading as="h2" variant="heading10">
            Last thing. When would you like your coverage to start?
          </Heading>
        </Box>

        <Box marginTop="space50">
          <RadioGroup
            name="start_date"
            legend="Choose your start date."
            onChange={handleDateChoice}
          >
            <Radio id={useUID()} value="today" name="start_date">
              Today
            </Radio>
            <Radio id={useUID()} value="tomorrow" name="start_date">
              Tomorrow
            </Radio>
            <Radio id={useUID()} value="later" name="start_date">
              Later
            </Radio>
          </RadioGroup>
        </Box>

        {showDatePicker && (
          <Box marginTop="space100">
            <Label htmlFor="date_picker" required>
              Select a date.
            </Label>
            <DatePicker
              id="date_picker"
              name="date_picker"
              min={getToday()}
              value={startDate}
              readOnly={isReadOnly}
              onChange={evt => console.log(evt.target.value)}
            />
          </Box>
        )}

        <Box marginY="space100">
          <Button variant="primary" as="a" href="/quotes" fullWidth>
            Get Quotes
          </Button>
        </Box>
      </Section>
    </>
  );
}

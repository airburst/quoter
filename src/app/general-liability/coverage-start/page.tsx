"use client";

import { useState } from "react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { RadioGroup } from "@twilio-paste/radio-group";
import { Label } from "@twilio-paste/label";
import { DatePicker } from "@twilio-paste/date-picker";
import { useUID } from "@twilio-paste/uid-library";
import { BackButton } from "@components/BackButton";
import { Section } from "@components/Section";
import { getToday, getTomorrow } from "@utils/dates";
import { RadioOption } from "@components/RadioOption";
import { PageTitle } from "@components/PageTitle";

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
      <BackButton />
      <Section>
        <PageTitle title="Last thing. When would you like your coverage to start?" />

        <Box marginTop="space50">
          <RadioGroup
            name="start_date"
            legend="Choose your start date."
            onChange={handleDateChoice}
          >
            <RadioOption id={useUID()} value="today" name="start_date">
              Today
            </RadioOption>
            <RadioOption id={useUID()} value="tomorrow" name="start_date">
              Tomorrow
            </RadioOption>
            <RadioOption id={useUID()} value="later" name="start_date">
              Later
            </RadioOption>
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

import { Badge } from "@twilio-paste/badge";
import { Stack } from "@twilio-paste/stack";
import { Button } from "@twilio-paste/button";
import { Flex } from "@twilio-paste/flex";

export const EditLimits = () => {
  return (
    <Flex grow>
      <Stack orientation="horizontal" spacing="space30">
        <Button variant="link">Edit Limits</Button>
        <Badge as="span" variant="neutral_counter">
          3
        </Badge>
      </Stack>
    </Flex>
  );
};

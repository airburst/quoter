import { Badge } from "@twilio-paste/core/badge";
import { Stack } from "@twilio-paste/core/stack";
import { Button } from "@twilio-paste/core/button";
import { Flex } from "@twilio-paste/core/flex";

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
